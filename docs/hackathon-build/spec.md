# Technical Spec

## Overview

Solar Shred will be a local-only React single-page app built as a compact game-state machine. The experience maps directly to the PRD journey: animated intro, short route, tactical battle, reward and upgrade, then a Sun-treasure ending.

The implementation prioritizes an unmistakable visual identity and a reliable playable loop over a full 3D simulation. CSS transforms, layered gradients, and a small canvas starfield provide depth; no 3D engine, backend, database, or external API is needed.

## Stack

- React with JavaScript, scaffolded by [Vite](https://vite.dev/guide/).
- React [useReducer](https://react.dev/reference/react/useReducer) for predictable game-state transitions.
- Plain CSS for responsive layout, animation, planetary layers, route transitions, and battle feedback.
- Browser [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) for a lightweight animated starfield.
- Static JavaScript data modules for tricks, opponents, route stages, and upgrade costs.
- Local development server plus screenshots and a README for the submission. No deployment target.

## Architecture

### Application State Machine

Implements: `prd.md > Core User Journey`, `Epic 1`, `Epic 2`, `Epic 3`, `Epic 4`, and `Epic 5`.

`App` owns a single reducer-backed game state with these phases:

```text
intro -> route -> battle -> reward -> route -> ending
                     |             |
                     v             v
                   retry          ending
```

The reducer is the only module that changes run state. Components render from state and dispatch named actions such as `START_RUN`, `ENTER_BATTLE`, `SELECT_TRICK`, `RESOLVE_TURN`, `BUY_UPGRADE`, `ADVANCE_ROUTE`, `RETRY_BATTLE`, and `RESTART_RUN`.

### Visual Layer

Implements: `prd.md > Epic 1: Enter the Run`.

`StarfieldCanvas` draws a small loop of stars. CSS layers render the solar glow, planets, route, and skateboard-space-shuttle. Intro animation is time-based CSS, not a game engine. Respect `prefers-reduced-motion` by reducing nonessential animation.

### Route Layer

Implements: `prd.md > Epic 1` and `Epic 4: Upgrade and Travel Sunward`.

`RouteScreen` renders static stage data. The first stage is available immediately; the inner stage is locked until a heat-shield upgrade is owned. The final Sun stage becomes available after the route's required upgrade condition is met. Selecting the available current stage dispatches `ENTER_BATTLE`.

### Battle Layer

Implements: `prd.md > Epic 2: Choose Tactical Tricks` and `Epic 3: Win a Skate Battle`.

`BattleScreen` displays the player and opponent score/health, combo meter, turn log, and exactly three actions: Kickflip, Grind, and Boost. Choosing a trick dispatches a turn-resolution action. During resolution, action buttons are disabled, then turn results animate into view.

Use a deliberately small, explainable rule set:

- Kickflip: reliable medium damage and combo gain.
- Grind: higher damage when the combo is active; lower base output.
- Boost: lower immediate damage but restores player health or increases combo.
- Opponent moves come from a small deterministic sequence, with optional bounded randomness only after the loop is reliable.
- A battle ends at zero opponent health or zero player health.

### Reward and Upgrade Layer

Implements: `prd.md > Epic 4`.

After victory, `RewardScreen` displays Stardust earned, current Stardust, and one heat-shield upgrade. Purchasing the upgrade deducts a static cost, marks `heatShield: true`, and unlocks the next stage. Defeat shows `Retry` and restores the selected battle's initial state without granting rewards.

### Ending Layer

Implements: `prd.md > Epic 5: Complete the Run`.

`EndingScreen` renders the Sun-core treasure reveal and a Start New Run action. A restart dispatches `RESTART_RUN`, restoring the initial game-state object.

## File Structure

```text
solar-shred/
  index.html                 # Vite entry document
  package.json               # Scripts and React/Vite dependencies
  README.md                  # Local-run, screenshot, and demo instructions
  src/
    main.jsx                 # React mount point
    App.jsx                  # Reducer owner and phase router
    styles.css               # Global tokens, responsive layout, animation
    game/
      initialState.js        # Factory for a fresh run state
      reducer.js             # State-machine actions and turn resolution
      gameData.js            # Tricks, opponents, stages, upgrade configuration
    components/
      StarfieldCanvas.jsx    # Animated canvas starfield
      IntroScreen.jsx        # PRD Epic 1 opening and Start Run
      RouteScreen.jsx        # PRD Epic 1 and 4 route and locked stages
      BattleScreen.jsx       # PRD Epic 2 and 3 choices and feedback
      RewardScreen.jsx       # PRD Epic 4 Stardust and heat-shield upgrade
      EndingScreen.jsx       # PRD Epic 5 treasure reveal and restart
      StatusPanel.jsx        # Reused health, score, and combo display
    assets/
      screenshots/           # Final submission screenshots
```

## Data Flow

1. `initialState()` creates a fresh local run with route stage 0, zero Stardust, no heat shield, and initialized player/opponent battle values.
2. `App` passes game state and `dispatch` to the component matching `state.phase`.
3. A player selects a trick in `BattleScreen`; the component dispatches the trick name.
4. `reducer.js` reads immutable trick and opponent data from `gameData.js`, resolves the player and opponent effects, and returns an updated state with turn log, score/health, combo, and battle outcome.
5. The updated state re-renders battle feedback. Victory moves to `reward`; defeat produces the retry state.
6. Buying the heat shield updates the state, then `RouteScreen` derives which stage is unlocked from `state.upgrades`.
7. Reaching the final Sun route moves the state to `ending`; restart creates a new state with `initialState()`.

No game data is persisted between page reloads. This is intentional for the prototype and keeps the data lifecycle visible and reliable during a local demo.

## Components And Responsibilities

### `App`

Implements: `prd.md > Core User Journey`.

Creates state with `useReducer`, maps phases to screens, and ensures only one screen is active at a time.

### `IntroScreen` and `StarfieldCanvas`

Implements: `prd.md > Epic 1: Enter the Run`.

Render the cinematic opening, animated solar-system depth, and Start Run action.

### `RouteScreen`

Implements: `prd.md > Epic 1` and `Epic 4: Upgrade and Travel Sunward`.

Renders the route, current location, locked/available stages, and the next encounter action.

### `BattleScreen` and `StatusPanel`

Implements: `prd.md > Epic 2: Choose Tactical Tricks` and `Epic 3: Win a Skate Battle`.

Render exact trick controls, disabled state while resolving, opponent response, turn log, player/opponent progress, and combo feedback.

### `RewardScreen`

Implements: `prd.md > Epic 4: Upgrade and Travel Sunward`.

Shows Stardust, heat-shield cost and benefit, and the continuation action after a purchase.

### `EndingScreen`

Implements: `prd.md > Epic 5: Complete the Run`.

Renders the Sun treasure and reliably resets a completed run.

## External APIs And Dependencies

- [React](https://react.dev/): component rendering and local reducer state.
- [Vite](https://vite.dev/guide/): development server and production build.
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API): browser-native starfield only.

There are no network requests, keys, user accounts, databases, or third-party game APIs.

## AI Usage

Codex is used for planning, implementation, debugging, and test support. The game itself has no runtime AI dependency. This keeps the demo offline-capable and makes its behavior straightforward to explain.

## Risks And Verification

### Scope risk: visual work crowds out game completion

Mitigation: build the reducer and battle loop first, then add the intro and visual polish. The game must remain playable without canvas animation.

Verification: refresh the app and complete the full run using only visible controls.

### State risk: invalid route or reward transitions

Mitigation: reducer guards reject stage entry when locked and only grant Stardust on victory.

Verification: test victory, defeat/retry, insufficient Stardust, upgrade purchase, locked route selection, final ending, and restart.

### UI risk: repeated clicks resolve multiple turns

Mitigation: use a `resolvingTurn` state flag to disable trick actions until the turn result completes.

Verification: rapidly click each trick during a turn and confirm only one result appears.

### Rendering risk: small screens obscure controls

Mitigation: use responsive CSS with the action controls stacked on narrow viewports.

Verification: inspect desktop and mobile widths, including a complete battle at each width.

## Demo And Submission Flow

1. Run `npm install` and `npm run dev` locally.
2. Start a run and capture the animated opening plus solar route.
3. Capture a battle with all three trick controls, opponent response, health/score, and combo visible.
4. Win, collect Stardust, buy the heat shield, and capture the newly unlocked route.
5. Reach the Sun ending and capture the treasure reveal.
6. Include local run instructions, project source link, and the best screenshots in submission materials.
