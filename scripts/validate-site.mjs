import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const files = fs.readdirSync(root).filter((file) => file.endsWith(".html")).sort();
const failures = [];

for (const file of files) {
  const html = fs.readFileSync(path.join(root, file), "utf8");

  const scripts = [...html.matchAll(/<script(?![^>]*type="application\/ld\+json")[^>]*>([\s\S]*?)<\/script>/g)]
    .map((match) => match[1].trim())
    .filter(Boolean);

  scripts.forEach((js, index) => {
    try {
      new Function(js);
    } catch (error) {
      failures.push(`${file}: inline script ${index + 1} syntax: ${error.message}`);
    }
  });

  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((match) => match[1]);

  jsonLdBlocks.forEach((json) => {
    try {
      JSON.parse(json);
    } catch (error) {
      failures.push(`${file}: invalid JSON-LD: ${error.message}`);
    }
  });

  const requiredMarkers = [
    ["title", /<title>[^<]+<\/title>/],
    ["description", /<meta name="description" content="[^"]+"/],
    ["canonical", /<link rel="canonical" href="[^"]+"/],
    ["og image", /<meta property="og:image" content="https:\/\/sailingtrainer\.com\/og\.png"/],
    ["twitter card", /<meta name="twitter:card" content="summary_large_image"/],
    ["web app manifest", /<link rel="manifest" href="\/site\.webmanifest"/],
    ["service worker", /navigator\.serviceWorker\.register\("\/service-worker\.js"\)/],
    ["analytics", /\/_vercel\/insights\/script\.js/],
    ["speed insights", /\/_vercel\/speed-insights\/script\.js/],
  ];

  requiredMarkers.forEach(([label, pattern]) => {
    if (!pattern.test(html)) failures.push(`${file}: missing ${label}`);
  });

  if (file !== "privacy.html" && jsonLdBlocks.length < 1) {
    failures.push(`${file}: missing JSON-LD`);
  }

  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]+)(?:[?#][^"]*)?"/g)) {
    const local = match[1];
    if (local.startsWith("/_vercel/")) continue;

    let target = local === "/" ? "index.html" : local.slice(1);
    if (!path.extname(target)) target += ".html";

    if (!fs.existsSync(path.join(root, target))) {
      failures.push(`${file}: local reference missing ${local} -> ${target}`);
    }
  }
}

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
for (const page of files.filter((file) => file !== "privacy.html")) {
  const route = page === "index.html" ? "/" : `/${page.replace(/\.html$/, "")}`;
  const url = route === "/" ? "https://sailingtrainer.com/" : `https://sailingtrainer.com${route}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) {
    failures.push(`sitemap missing ${url}`);
  }
}

JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf8"));
JSON.parse(fs.readFileSync(path.join(root, "site.webmanifest"), "utf8"));

["service-worker.js", "icon-192.png", "icon-512.png", "llms.txt"].forEach((file) => {
  if (!fs.existsSync(path.join(root, file))) failures.push(`missing ${file}`);
});

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${files.length} HTML files: scripts, JSON-LD, SEO markers, analytics loaders, local refs, sitemap, vercel.json.`);
