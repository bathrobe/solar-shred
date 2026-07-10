# Build Checklist

## Build Preferences

- **Build mode:** Autonomous with verification pauses
- **Comprehension checks:** N/A
- **Git:** No required commits; preserve the option to commit after a working vertical slice
- **Verification:** Yes, at each playable milestone and before handoff
- **Check-in cadence:** Balanced: pause after core loop, visual integration, and final QA
- **Time budget:** 4 hours

## Checklist

- [x] **1. Scaffold the React game shell**
  Spec ref: `spec.md > Stack`, `File Structure`
  What to build: Create the Vite React JavaScript app, base stylesheet, app mount, and README starter with local run commands.
  Acceptance: The app starts locally and renders a named Solar Shred landing shell without console errors.
  Verify: Run `npm run dev`; load the local URL and inspect the browser console.

- [x] **2. Define static game data and the reducer state machine**
  Spec ref: `spec.md > Architecture > Application State Machine`, `Data Flow`
  What to build: Add static tricks, opponents, route stages, upgrade cost, initial state factory, and reducer actions for all game phases.
  Acceptance: A fresh state starts on intro; legal actions transition through intro, route, battle, reward, and ending; locked stages and invalid reward actions are rejected.
  Verify: Add focused reducer tests or a small development assertion harness, then exercise each transition manually.

- [x] **3. Build the route and status shell**
  Spec ref: `spec.md > Route Layer`, `Components And Responsibilities > RouteScreen`
  What to build: Render the Sunward route, current stage, Stardust total, heat-shield status, and locked/available stage states.
  Acceptance: First stage is available at run start; later stages visibly indicate why they are locked; choosing the available stage enters a battle.
  Verify: Start a run and confirm the route state before and after a mocked unlocked upgrade.

- [x] **4. Implement the tactical trick battle**
  Spec ref: `spec.md > Battle Layer`, `Components And Responsibilities > BattleScreen`
  What to build: Render player/opponent status, combo, turn log, and exactly three actions: Kickflip, Grind, Boost. Resolve deterministic opponent turns and disable controls during resolution.
  Acceptance: Every player action shows an opponent response and updates visible score or health plus combo; only one turn resolves per selection; victory and defeat are distinct.
  Verify: Play through at least one win and one loss; rapidly click a trick and confirm it produces one turn.

- [x] **5. Implement victory, retry, and the heat-shield upgrade**
  Spec ref: `spec.md > Reward and Upgrade Layer`, `prd.md > Epic 3`, `Epic 4`
  What to build: Add reward screen, Stardust award, heat-shield purchase, route unlock, and defeat retry behavior.
  Acceptance: Victory grants Stardust; the upgrade deducts the correct cost and unlocks the next route stage; retry resets only the current battle and grants no reward.
  Verify: Complete victory -> reward -> upgrade -> unlocked route and loss -> retry paths in one browser session.

- [x] **6. Add the final Sun route and treasure ending**
  Spec ref: `spec.md > Ending Layer`, `prd.md > Epic 5`
  What to build: Add final-stage progression, Sun-core treasure reveal, and Start New Run action.
  Acceptance: Completing the required route reaches an unmistakable ending; Start New Run resets route, rewards, upgrade, battle, and combo state.
  Verify: Complete a full run, activate restart, and confirm the initial route state returns.

- [x] **7. Add the cinematic visual system**
  Spec ref: `spec.md > Visual Layer`, `prd.md > Epic 1`
  What to build: Create the animated intro, canvas starfield, layered solar-system scene, skateboard-space-shuttle, route transitions, and a reduced-motion fallback.
  Acceptance: The opening immediately communicates the invented solar system and ship, includes visible motion, and retains a clear Start Run control; the game remains usable if animation is reduced.
  Verify: Inspect the opening at desktop and mobile widths; enable reduced motion if available and confirm controls remain usable.

- [x] **8. Polish responsive battle and route UI**
  Spec ref: `spec.md > Risks And Verification > Rendering risk`
  What to build: Apply responsive CSS, clear focus/disabled states, readable battle feedback, and stable button/layout sizing for narrow screens.
  Acceptance: Trick controls, status panels, route controls, and ending action remain readable and usable without overlap at desktop and mobile widths.
  Verify: Test the full battle loop at desktop and mobile browser viewports.

- [x] **9. Run end-to-end QA and prepare screenshots**
  Spec ref: `spec.md > Risks And Verification`, `Demo And Submission Flow`
  What to build: Test the complete run, document local setup in README, and capture screenshots of intro, battle, upgrade/unlocked route, and treasure ending.
  Acceptance: A new participant can run the app locally from README instructions and complete intro -> battle -> reward -> upgrade -> ending with no console errors.
  Verify: Refresh the browser, follow README exactly, complete the run, and inspect the console; save the required screenshots.

- [ ] **10. Complete the Devpost handoff**
  Spec ref: `spec.md > Demo And Submission Flow`
  What to build: Gather the repository link, local-run instructions, screenshots, a 2-3 sentence problem statement, Codex session ID, and feedback questionnaire confirmation for the submission draft.
  Acceptance: Every known Devpost submission field and evidence item is ready before `$prepare-submission`.
  Verify: Compare materials against the event requirements and run `$prepare-submission`.

## Submission Plan

- **Wow moment:** The skateboard-space-shuttle enters an invented solar system, then the player immediately turns a skate trick into a tactical battle choice.
- **Story:** A compact playable loop turns stylish trick selection into meaningful progress toward a Sun-core treasure.
- **Screenshots:** Cinematic opening, active tactical battle, heat-shield upgrade with unlocked route, treasure ending.
- **Repository:** Local project repository link.
- **Handoff:** README, screenshots, session ID, feedback questionnaire confirmation, then `$prepare-submission`.
