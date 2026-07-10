import { heatShieldCost, opponentMoves, stages, tricks } from './gameData.js';
import { createBattle, initialState } from './initialState.js';

export function gameReducer(state, action) {
  switch (action.type) {
    case 'START_RUN':
      return { ...state, phase: 'route' };
    case 'ENTER_BATTLE': {
      const stage = stages[action.stageIndex];
      if (!stage || action.stageIndex > state.currentStage || (stage.requiredUpgrade && !state.heatShield)) return state;
      return { ...state, phase: 'battle', battle: createBattle(stage.id) };
    }
    case 'PLAY_TRICK': {
      if (state.phase !== 'battle' || !state.battle) return state;
      const trick = tricks[action.trickId];
      if (!trick) return state;
      const opponent = opponentMoves[state.battle.turn % opponentMoves.length];
      const comboBonus = action.trickId === 'grind' ? state.battle.combo : 0;
      const playerDamage = trick.damage + comboBonus;
      const opponentHealth = Math.max(0, state.battle.opponentHealth - playerDamage);
      const playerHealth = Math.min(18, Math.max(0, state.battle.playerHealth - opponent.damage + (trick.heal ?? 0)));
      const battle = {
        ...state.battle,
        opponentHealth,
        playerHealth,
        playerScore: state.battle.playerScore + playerDamage,
        opponentScore: state.battle.opponentScore + opponent.damage,
        combo: state.battle.combo + trick.combo,
        turn: state.battle.turn + 1,
        log: [`${trick.name}: ${playerDamage} impact. ${opponent.name}: ${opponent.damage} pressure.`],
      };
      if (opponentHealth === 0) return { ...state, phase: 'reward', battle };
      if (playerHealth === 0) return { ...state, phase: 'defeat', battle };
      return { ...state, battle };
    }
    case 'BUY_HEAT_SHIELD':
      if (state.phase !== 'route' || state.heatShield || state.stardust < heatShieldCost) return state;
      return { ...state, heatShield: true, stardust: state.stardust - heatShieldCost, currentStage: 1, phase: 'route', battle: null };
    case 'CLAIM_REWARD': {
      if (state.phase !== 'reward') return state;
      const wonFinal = stages.find((stage) => stage.id === state.battle?.stageId)?.final;
      if (wonFinal) return { ...state, phase: 'ending' };
      const nextStage = Math.min(state.currentStage + 1, stages.length - 1);
      return { ...state, stardust: state.stardust + 10, currentStage: nextStage, phase: 'route', battle: null };
    }
    case 'RETRY_BATTLE':
      return state.battle ? { ...state, phase: 'battle', battle: createBattle(state.battle.stageId) } : state;
    case 'RESTART_RUN':
      return initialState();
    default:
      return state;
  }
}
