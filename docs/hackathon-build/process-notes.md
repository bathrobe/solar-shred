# Process Notes

## Onboarding

- Started guided build with an initial idea: a small RPG.
- Joe refined the concept to a solar-system journey from the outer planets inward to the Sun.
- Calibration: moderate JavaScript experience and comfortable with AI coding tools.

## Scope Interview

- Brain dump: The player rides a skateboard-space-shuttle hybrid between planets. They earn points through tricks and trick contests, then spend them on upgrades that let the ship survive progressively closer approaches to the Sun. Skateboarding encounters use an RPG battle-like format. The end goal is reaching a treasure buried in the Sun's core.
- Direction chosen: tactical RPG-style battles are the primary interaction, with skateboarding as the theme and upgrade economy.
- Time budget: 4 hours. Scope should be one polished vertical slice rather than a multi-planet campaign.
- Battle definition: Final Fantasy-style turn selection, reframed as performing tricks against obstacles or other skaters in a game of SKATE.
- Scope decision: one compact solar route, one tactical battle type, three tricks, one upgrade, and a Sun-treasure ending. Cut free roaming, real-time skateboarding, individual planet levels, multiplayer, and a full campaign.
- Scope deepening rounds: 0. Joe chose to proceed after the mandatory beats.

## PRD Interview

- Opening experience: a cool animation with some 3D elements where the invented solar system dawns around the player.
- First-run flow: after the opening, the player sees a short route, lands on the first planet, and immediately enters action.
- Battle actions confirmed: Kickflip, Grind, and Boost.
- Turn feedback confirmed: opponent response, score changes, health changes, and a combo meter.
- PRD deepening rounds: 0. Joe indicated the riffing session was complete; the PRD uses the confirmed scope and a four-hour vertical-slice guardrail.

## Spec Interview

- Stack selected: React with JavaScript and CSS, using CSS transforms and canvas effects for the opening's 3D feel; no 3D engine.
- Demo plan: run locally with clear instructions and screenshots; no deployment required.
- Architecture confirmed: one React app, one in-memory game-state object, static game data, no backend, and no external APIs.
- File boundaries confirmed: App/reducer, static game data, and focused Intro, Route, Battle, Reward, Ending, and shared status components.
- Spec defaults: Vite, reducer-backed state machine, CSS transforms and canvas starfield, deterministic opponent sequence first, responsive CSS, and no persistent storage.
- Spec deepening rounds: 0. Joe authorized sensible defaults after confirming the proposed architecture.

## Checklist Decisions

- Joe delegated sequencing and build preferences to sensible defaults.
- Chosen order: scaffold, reducer/data, route shell, tactical battle, reward/upgrade, ending, cinematic visuals, responsive polish, QA/screenshots, Devpost handoff.
- Chosen mode: autonomous with verification enabled and balanced check-ins; no required git commits.
- Checklist deepening rounds: 0.
