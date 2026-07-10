# Build Notes

## Checkpoint 1

- Starting autonomous build with checklist items 1 through 4: scaffold, state machine, route shell, and tactical battle.
- Implemented: Vite/React scaffold, static game data, reducer state machine, route/status shell, and tactical battle controls.
- Automated verification: production build passed with `pnpm build` using the bundled Node runtime.
- Manual verification pending: local dev server is running at http://127.0.0.1:5174/; verify the Start Run -> route -> Drop in -> trick loop.
- Participant verification passed: the core route and battle loop looked good in the local app.

## Checkpoint 2

- Proceeding with checklist items 5 through 8: rewards/upgrade, Sun ending, cinematic visuals, and responsive polish.
- Implemented: Stardust reward and heat-shield purchase path, final Sun treasure ending and restart, canvas starfield, animated solar-system opening, reduced-motion fallback, and disabled trick controls while turns resolve.
- Automated verification: production build passed with `pnpm build`; browser pass confirmed the local route UI remains rendered after the update.
- Manual verification pending: reload the local app, inspect the animated intro, then complete the reward -> heat shield -> Sun ending route.
- Participant verification passed: heat-shield purchase and route progression now work in the local app.

## Final QA

- Fixed a reward-to-upgrade state guard that prevented the heat-shield purchase from succeeding on the route screen.
- Automated verification passed: full Neptune -> Mercury -> Sun sequence reaches the ending, and Start New Run resets all run state.
- Production build passed after the fix.
- Saved intro, battle, reward, and unlocked-route screenshots under `src/assets/screenshots/`.
