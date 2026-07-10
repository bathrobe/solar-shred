import { useReducer } from 'react';
import BattleScreen from './components/BattleScreen';
import RouteScreen from './components/RouteScreen';
import StarfieldCanvas from './components/StarfieldCanvas';
import { heatShieldCost } from './game/gameData';
import { initialState } from './game/initialState';
import { gameReducer } from './game/reducer';

function Intro({ dispatch }) {
  return <main className="screen intro"><StarfieldCanvas /><div className="sun-glow" /><div className="orbit orbit--one" /><div className="orbit orbit--two" /><div className="planet planet--intro" /><div className="intro__ship">SS-01</div><p className="eyebrow">A tactical skate opera</p><h1>SOLAR<br />SHRED</h1><p className="intro__copy">Burn tricks. Break gravity. Find what waits inside the Sun.</p><button type="button" className="primary-button" onClick={() => dispatch({ type: 'START_RUN' })}>Start run</button></main>;
}

function Reward({ state, dispatch }) {
  const finalBattle = state.battle.stageId === 'sun';
  return <main className="screen modal-screen"><p className="eyebrow">Contest cleared</p><h1>{finalBattle ? 'CORE BREACHED' : 'STARDUST SECURED'}</h1><p>You earned 10 Stardust. {finalBattle ? 'The Sun is opening.' : `A heat shield costs ${heatShieldCost} Stardust.`}</p><button type="button" className="primary-button" onClick={() => dispatch({ type: 'CLAIM_REWARD' })}>{finalBattle ? 'Claim the treasure' : 'Return to route'}</button></main>;
}

function Defeat({ dispatch }) {
  return <main className="screen modal-screen"><p className="eyebrow">Run interrupted</p><h1>WIPEOUT</h1><p>Your board took too much pressure. Reset the contest and choose a new line.</p><button type="button" className="primary-button" onClick={() => dispatch({ type: 'RETRY_BATTLE' })}>Retry contest</button></main>;
}

function Ending({ dispatch }) {
  return <main className="screen modal-screen ending"><p className="eyebrow">Sun core treasure</p><h1>THE GOLDEN<br />ORBIT</h1><p>You shredded a route through an invented solar system and found the prize at its center.</p><button type="button" className="primary-button" onClick={() => dispatch({ type: 'RESTART_RUN' })}>Start new run</button></main>;
}

export default function App() {
  const [state, dispatch] = useReducer(gameReducer, undefined, initialState);
  if (state.phase === 'intro') return <Intro dispatch={dispatch} />;
  if (state.phase === 'route') return <RouteScreen state={state} dispatch={dispatch} />;
  if (state.phase === 'battle') return <BattleScreen state={state} dispatch={dispatch} />;
  if (state.phase === 'reward') return <Reward state={state} dispatch={dispatch} />;
  if (state.phase === 'defeat') return <Defeat dispatch={dispatch} />;
  return <Ending dispatch={dispatch} />;
}
