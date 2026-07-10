import { useState } from 'react';
import { stages, tricks } from '../game/gameData';
import StatusPanel from './StatusPanel';
import neptuneArena from '../assets/neptune-arena.png';
import sunCoreArena from '../assets/sun-core-arena.png';

export default function BattleScreen({ state, dispatch }) {
  const stage = stages.find((item) => item.id === state.battle.stageId);
  const arenaArt = stage.final ? sunCoreArena : neptuneArena;
  const [resolving, setResolving] = useState(false);

  function playTrick(trickId) {
    if (resolving) return;
    setResolving(true);
    window.setTimeout(() => {
      dispatch({ type: 'PLAY_TRICK', trickId });
      setResolving(false);
    }, 420);
  }

  return (
    <main className="screen battle-screen">
      <header className="topbar"><span className="eyebrow">{stage.name}</span><strong>TRICK//TACTICS</strong><span>Combo {state.battle.combo}</span></header>
      <section className="battle-arena" style={{ '--arena-image': `url(${arenaArt})` }}><div className="battle-arena__shade" /><div className="rider rider--player">YOU</div><div className="rider rider--opponent">{stage.enemy}</div></section>
      <div className="status-grid"><StatusPanel label="Skate shuttle" health={state.battle.playerHealth} score={state.battle.playerScore} /><StatusPanel label={stage.enemy} health={state.battle.opponentHealth} score={state.battle.opponentScore} accent="coral" /></div>
      <p className="turn-log" aria-live="polite">{state.battle.log[0]}</p>
      <section className="trick-bar" aria-label="Choose a trick">
        {Object.entries(tricks).map(([id, trick]) => <button type="button" key={id} disabled={resolving} onClick={() => playTrick(id)}><strong>{resolving ? 'Resolving...' : trick.name}</strong><span>{trick.detail}</span></button>)}
      </section>
    </main>
  );
}
