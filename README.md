# ASA 101 Skipper Trainer

Free interactive practice for the ASA 101 (Basic Keelboat Sailing) written test.

**Live site:** https://asa101-trainer.vercel.app

Five practice stations:

- **Points of sail** — name the point of sail from the boat's angle to the wind
- **Helm and trim** — steer to orders and trim the mainsail, with live tack/jibe calls
- **Right of way** — eight crossing scenarios under the navigation rules
- **Boat parts** — click-the-part on a sloop diagram (15 parts)
- **Written quiz** — 26 test-style questions scored against the 80% pass mark

Plus study content: a [study guide](https://asa101-trainer.vercel.app/study-guide), [points of sail explainer](https://asa101-trainer.vercel.app/points-of-sail), [right of way guide](https://asa101-trainer.vercel.app/right-of-way), [glossary](https://asa101-trainer.vercel.app/sailing-terms), and [FAQ](https://asa101-trainer.vercel.app/faq).

## Stack

Plain static HTML/CSS/JS — no build step, no dependencies. The trainer is a single file ([index.html](index.html)); content pages share [site.css](site.css). Deployed on Vercel.

Progress (score, streak, accuracy) persists in the browser via localStorage. Nothing leaves your device.

## Develop

Open `index.html` in a browser. That's it.

## Disclaimer

Not affiliated with or endorsed by the American Sailing Association. Built by a sailing student as a study aid.
