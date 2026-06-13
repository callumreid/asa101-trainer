const CACHE_VERSION = "sailingtrainer-2026-06-13-pwa2";
const PRECACHE_URLS = [
  "/",
  "/site.css",
  "/site.webmanifest",
  "/icon-192.png",
  "/icon-512.png",
  "/og.png",
  "/course-plan",
  "/crew-briefing",
  "/logbook",
  "/simulator",
  "/practice-tests",
  "/chartwork",
  "/rules-road-game",
  "/flashcards",
  "/gear",
  "/community",
  "/boat-buying",
  "/study-guide",
  "/checklist",
  "/exam-cram",
  "/points-of-sail",
  "/sail-trim",
  "/maneuvers",
  "/docking-anchoring",
  "/right-of-way",
  "/navigation-aids",
  "/navigation-lights",
  "/sound-signals",
  "/safety",
  "/float-plan",
  "/vhf-radio",
  "/crew-overboard",
  "/knots",
  "/weather",
  "/weather-trainer",
  "/sailing-terms",
  "/search",
  "/faq",
  "/resources",
  "/llms.txt",
  "/sitemap.xml"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/_vercel/")) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("/")))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const refresh = fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || refresh;
    })
  );
});
