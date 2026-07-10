# Product Requirements Document

## Product Summary

Solar Shred is a short, cinematic tactical RPG prototype. The player pilots a skateboard-space-shuttle inward through an invented solar system, choosing skate tricks in turn-based battles to earn Stardust, upgrade their craft, and ultimately reach a treasure in the Sun.

The experience should establish its world in seconds, then move directly into a readable tactical loop. It is designed to be completed as a small vertical slice in four hours.

## Target User

Players who enjoy tactical RPG decision-making but want a short, stylish web-game experience. They should be able to understand the goal and make their first meaningful choice without reading instructions.

## Core User Journey

1. The player opens the game and sees an animated, partly 3D-feeling reveal of an invented solar system and skateboard-space-shuttle.
2. The player starts a run and sees a short route inward.
3. The shuttle lands on the first planet and the player enters a tactical skate battle immediately.
4. On each turn, the player selects Kickflip, Grind, or Boost.
5. The game reveals the opponent's response and updates score, health, and combo feedback.
6. After winning, the player receives Stardust, buys a heat-shield upgrade, and advances toward the Sun.
7. The player reaches the Sun, reveals the treasure ending, and can start another run.

## Epics And User Stories

### Epic 1: Enter the Run

- As a player, I want an animated opening view of the invented solar system so that the game immediately feels like a cosmic skate adventure.

Acceptance criteria:

- On first load, the title, skateboard-space-shuttle, and at least one solar-system visual are visible.
- The opening includes motion that suggests the world is dawning or coming into view.
- A clear Start Run control appears without requiring the player to dismiss instructions.
- Selecting Start Run transitions to a short inward route and then the first battle.

### Epic 2: Choose Tactical Tricks

- As a player, I want three distinct trick choices so that I can make a tactical decision each turn.

Acceptance criteria:

- The battle screen always presents exactly three selectable actions: Kickflip, Grind, and Boost.
- The player can choose one action per turn.
- After a choice, the game visibly reveals an opponent response.
- Each completed turn visibly changes at least a score or health value and updates combo feedback.
- The player cannot select a second action until the previous turn resolves.

### Epic 3: Win a Skate Battle

- As a player, I want a clear way to win or lose a contest so that I understand whether my trick choices worked.

Acceptance criteria:

- Both the player and opponent have a visible progress indicator, such as health or score.
- The battle ends in a clear victory or defeat state.
- On victory, the game explicitly awards Stardust.
- On defeat, the game clearly offers a retry without requiring a browser refresh.

### Epic 4: Upgrade and Travel Sunward

- As a player, I want my victory reward to unlock progress so that the journey toward the Sun feels earned.

Acceptance criteria:

- After a victory, the player sees their Stardust total and one available heat-shield upgrade.
- The player can spend the required Stardust to buy the upgrade.
- Buying the upgrade changes the displayed ship status and unlocks the next route stage.
- The route clearly communicates that the player is travelling closer to the Sun.

### Epic 5: Complete the Run

- As a player, I want a satisfying final reveal so that the run has a complete ending.

Acceptance criteria:

- Reaching the final Sun stage triggers a distinct ending state.
- The ending visibly reveals the Sun-core treasure.
- The ending includes a clear option to start a new run.

## Edge Cases

- First run: the player starts with zero Stardust and sees only the first route stage unlocked.
- Invalid order: later route stages cannot be selected until the upgrade requirement is met.
- Defeat: a retry resets the current battle state but preserves no unearned rewards.
- Repeated input: action controls are temporarily unavailable while a turn result is resolving.
- Completion: selecting a new run from the ending resets route, Stardust, upgrade, battle, and combo state.

## What We Are Building

- A cinematic opening with a small amount of 3D visual depth or movement.
- A short route that leads directly to a first-planet tactical battle.
- Three tactical trick actions: Kickflip, Grind, and Boost.
- Turn feedback covering opponent response, score, health, and combo progress.
- Victory reward, one heat-shield upgrade, gated route progression, and a Sun-treasure ending.

## What We Would Add With More Time

- More planets, encounters, rivals, and obstacle types.
- More tricks, status effects, combos, and upgrade paths.
- Full 3D traversal, real-time skating controls, or trick animation systems.
- Sound, music, save progress, player profiles, and online challenges.
- A larger story about the treasure and the invented solar system.

## Submission Proof Points

- A judge can start a run, make multiple tactical choices, and see the opponent response and turn feedback.
- A judge can win a battle, collect Stardust, buy a heat-shield upgrade, and see the route advance.
- A judge can reach the Sun ending and see the treasure reveal.
- The visual opening establishes the game's distinctive cosmic skateboard-RPG identity.
