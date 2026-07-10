# Title

Solar Shred

## One-line Summary

A compact tactical skate RPG where you ride a skateboard-space-shuttle through an invented solar system, win trick battles, upgrade your heat shield, and reach a treasure in the Sun.

## Problem

Short web games often ask players to choose between stylish movement and tactical decision-making. Solar Shred makes skate tricks meaningful: every choice changes the outcome of a turn-based contest and pushes the player closer to the Sun.

## Solution

Solar Shred is a local React game prototype with a complete playable route: Neptune Drift, Mercury Rail, and the Sun Core. Players choose Kickflip, Grind, or Boost during tactical skate battles, earn Stardust, buy a heat-shield upgrade, and unlock the next stage.

## Why This Matters

The project turns a surreal game premise into a compact, readable loop that a new player can understand immediately. It is designed to be complete rather than broad: the player sees the goal, makes tactical choices, earns a visible upgrade, and reaches a real ending.

## How We Used AI

The game has no runtime AI dependency. AI image generation was used during development to create original battle-scene art for the icy Neptune arena and the Sun-core arena. Those assets are bundled locally with the project and used as battle backdrops.

## How We Used Codex

Codex helped shape the game scope, create the product requirements and technical plan, implement the React state machine and battle loop, debug the heat-shield progression issue, run reducer-based full-route verification, build the production bundle, and generate the local battle-scene assets.

## Key Features

- Animated solar-system opening with layered CSS motion and a canvas starfield.
- Three-stage Sunward route with locked progression.
- Tactical battle choices: Kickflip, Grind, and Boost.
- Visible player and opponent hull, points, combo, and turn feedback.
- Stardust reward and heat-shield upgrade loop.
- Final Sun-core treasure ending and full-run restart.
- Generated Neptune and Sun-core battle-scene art.

## Architecture

Solar Shred is a Vite + React single-page application. A reducer-backed in-memory state machine controls the intro, route, battle, reward, defeat, and ending phases. Trick definitions, opponents, route stages, and upgrade costs are static JavaScript data. No backend, API keys, external service, or persistence is required to play the local demo.

## Testing Instructions

1. Install Node.js 20+ and pnpm.
2. Run `pnpm install`.
3. Run `pnpm dev`.
4. Open the URL printed by Vite.
5. Select **Start run**, then **Drop in** at Neptune Drift.
6. Win using Kickflip, Grind, and Boost; claim Stardust and install the heat shield.
7. Finish Mercury Rail and the Sun Core, then select **Start new run** from the ending.

Verified locally:

- Production build passes with `pnpm build`.
- The full Neptune -> Mercury -> Sun sequence reaches the ending.
- Restart resets Stardust, heat shield, route, and battle state.

## Public Demo Link

Not available. The project is currently a runnable local demo; use the testing instructions above.

## Public Repository Link

https://github.com/bathrobe/solar-shred

## Demo Video

Optional. Suggested 45-second outline:

1. Show the solar-system opening and explain the goal: skate toward the Sun-core treasure.
2. Show one tactical turn, including the opponent response and combo feedback.
3. Show the Stardust reward and heat-shield unlock.
4. Show the Sun Core arena and treasure ending.
5. Mention the local React reducer architecture and use of Codex plus generated battle art.

Video URL: TODO (optional)

## Screenshot Shot List

Use these three screenshots in the final form:

- `src/assets/screenshots/battle.png`: tactical trick battle with player and opponent state.
- `src/assets/screenshots/reward.png`: Stardust reward and heat-shield economy.
- `src/assets/screenshots/unlocked-route.png`: sunward route and locked Sun Core progression.

Other available assets:

- `src/assets/screenshots/intro.png`: animated opening/title treatment.
- `src/assets/neptune-arena.png`: generated Neptune battle-scene art.
- `src/assets/sun-core-arena.png`: generated Sun-core battle-scene art.

## Submission Readiness Notes

The runnable local app, source files, README, and screenshots exist. The current story is aligned to the event's clarity, usefulness, and completeness criteria: a player can run through a complete tactical progression loop with a clear purpose and ending.

## Known Limitations

- Local-only demo; no deployed URL.
- The repository is public, but the game is currently run locally.
- No saved progress between browser refreshes.
- One tactical battle type, three tricks, and one upgrade path.
- Generated art is used for battle backgrounds; animation and game interaction are code-driven.

## TODO Official Form Fields

These are exact live event form requirements and need a truthful final value:

- **What is your Codex session ID?** (required): TODO - ask Codex for the session ID in this build chat.
- **Did you fill out the Feedback Questionnaire form?** (required): TODO - choose `Yes` only after completing it.
- **Working tool:** runnable local code exists; add the public source-code link above.
- **Problem description:** use the 2-3 sentence Problem and Solution copy above.
- **Screenshot or short demo clip:** optional but encouraged; attach one or more of the listed local screenshots.
