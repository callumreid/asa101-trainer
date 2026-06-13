# ASA 101 Skipper Trainer

Free interactive practice for the ASA 101 (Basic Keelboat Sailing) written test.

**Live site:** https://sailingtrainer.com

Eight practice stations:

- **Points of sail** — name the point of sail from the boat's angle to the wind
- **Helm and trim** — steer to orders and trim the mainsail, with live tack/jibe calls
- **Right of way** — eight crossing scenarios under the navigation rules
- **Boat parts** — click-the-part on a sloop diagram with rigging, deck hardware, and sail controls
- **Aids to navigation** — red-right-returning, buoys, safe water marks, regulatory marks, and lights
- **Safety & knots** — required gear, float plans, crew overboard, weather choices, and knot purpose
- **Written quiz** — comprehensive test-style questions scored against the 80% pass mark

Plus study content: a [study guide](https://sailingtrainer.com/study-guide), [ASA 101 checklist](https://sailingtrainer.com/checklist), [points of sail explainer](https://sailingtrainer.com/points-of-sail), [maneuver guide](https://sailingtrainer.com/maneuvers), [right of way guide](https://sailingtrainer.com/right-of-way), [aids to navigation guide](https://sailingtrainer.com/navigation-aids), [safety guide](https://sailingtrainer.com/safety), [knots guide](https://sailingtrainer.com/knots), [weather guide](https://sailingtrainer.com/weather), [glossary](https://sailingtrainer.com/sailing-terms), [FAQ](https://sailingtrainer.com/faq), and [sources/resources](https://sailingtrainer.com/resources).

## Stack

Plain static HTML/CSS/JS — no build step, no dependencies. The trainer is a single file ([index.html](index.html)); content pages share [site.css](site.css). Deployed on Vercel.

Progress (score, streak, accuracy) persists in the browser via localStorage. Nothing leaves your device.

## Develop

Open `index.html` in a browser. That's it.

## Disclaimer

Not affiliated with or endorsed by the American Sailing Association. Built by a sailing student as a study aid.

## Deploys

Pushes to `main` auto-deploy to production via Vercel (project `house-boat-studios/asa101-trainer`).
