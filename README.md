# ASA 101 Skipper Trainer

Free interactive practice for the ASA 101 (Basic Keelboat Sailing) written test.

**Live site:** https://sailingtrainer.com

Core interactive practice:

- **Points of sail** — name the point of sail from the boat's angle to the wind
- **Helm and trim** — steer to orders and trim the mainsail, with live tack/jibe calls
- **Right of way** — eight crossing scenarios under the navigation rules
- **Boat parts** — click-the-part on a sloop diagram with rigging, deck hardware, and sail controls
- **Aids to navigation** — red-right-returning, buoys, safe water marks, regulatory marks, and lights
- **Safety & knots** — required gear, float plans, crew overboard, weather choices, and knot purpose
- **Written quiz** — comprehensive test-style questions scored against the 80% pass mark
- **Sailing simulator** — mission-based steering, trim, reefing, traffic, and decision cards
- **Practice tests** — randomized 25-question, 50-question, full-bank, weak-area, and category review modes
- **Learning plan** — saved weekend, one-week, and four-week study roadmaps
- **Crew briefing builder** — pre-departure skipper script for safety gear, movement, docking roles, weather limits, VHF, and crew overboard
- **Practice logbook** — saved browser log for sailing hours, conditions, skills practiced, confidence, weak spots, and CSV export
- **Chartwork trainer** — knots, nautical miles, ETA math, reciprocal bearings, buoyage, chart symbols, and anchor scope
- **Rules of the road game** — mixed right-of-way, navigation lights, sound signals, fog, and traffic scenarios
- **Sail trim, sound, VHF, and float plan tools** — telltale practice, horn/whistle signals, radio calls, and a printable safety plan
- **Installable/offline support** — PWA manifest, app icons, and a service worker cache for dockside or onboard study with weak signal

Plus study content: a [learning plan](https://sailingtrainer.com/course-plan), [crew briefing builder](https://sailingtrainer.com/crew-briefing), [practice logbook](https://sailingtrainer.com/logbook), [study guide](https://sailingtrainer.com/study-guide), [ASA 101 checklist](https://sailingtrainer.com/checklist), [points of sail explainer](https://sailingtrainer.com/points-of-sail), [sail trim trainer](https://sailingtrainer.com/sail-trim), [chartwork trainer](https://sailingtrainer.com/chartwork), [rules game](https://sailingtrainer.com/rules-road-game), [maneuver guide](https://sailingtrainer.com/maneuvers), [right of way guide](https://sailingtrainer.com/right-of-way), [aids to navigation guide](https://sailingtrainer.com/navigation-aids), [navigation lights trainer](https://sailingtrainer.com/navigation-lights), [sound signals trainer](https://sailingtrainer.com/sound-signals), [safety guide](https://sailingtrainer.com/safety), [float plan builder](https://sailingtrainer.com/float-plan), [VHF radio trainer](https://sailingtrainer.com/vhf-radio), [knots guide](https://sailingtrainer.com/knots), [weather guide](https://sailingtrainer.com/weather), [gear guide](https://sailingtrainer.com/gear), [podcasts/forums/boat buying links](https://sailingtrainer.com/community), [first sailboat buying worksheet](https://sailingtrainer.com/boat-buying), [glossary](https://sailingtrainer.com/sailing-terms), [FAQ](https://sailingtrainer.com/faq), and [sources/resources](https://sailingtrainer.com/resources).

## Stack

Plain static HTML/CSS/JS — no build step, no dependencies. The trainer is a single file ([index.html](index.html)); content pages share [site.css](site.css). Deployed on Vercel.

Progress (score, streak, accuracy) persists in the browser via localStorage. Nothing leaves your device.

## Develop

Open `index.html` in a browser. That's it.

Run the static quality gate before pushing:

```sh
node scripts/validate-site.mjs
```

## Disclaimer

Not affiliated with or endorsed by the American Sailing Association. Built by a sailing student as a study aid.

## Deploys

Pushes to `main` auto-deploy to production via Vercel (project `house-boat-studios/asa101-trainer`).
