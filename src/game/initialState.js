export function createBattle(stageId) {
  return {
    stageId,
    playerHealth: 18,
    opponentHealth: 16,
    playerScore: 0,
    opponentScore: 0,
    combo: 0,
    turn: 0,
    log: ['Pick a trick to begin the contest.'],
  };
}

export function initialState() {
  return {
    phase: 'intro',
    currentStage: 0,
    stardust: 0,
    heatShield: false,
    battle: null,
  };
}
