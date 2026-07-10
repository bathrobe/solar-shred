import { heatShieldCost, stages } from '../game/gameData';

export default function RouteScreen({ state, dispatch }) {
  return (
    <main className="screen route-screen">
      <header className="topbar"><span className="eyebrow">Sunward route</span><strong>Solar Shred</strong><span>{state.stardust} Stardust</span></header>
      <section className="route-screen__intro"><p>Ride inward. Earn enough force to reach the core.</p><div className="ship">SKATE//SHUTTLE</div></section>
      <ol className="route-list">
        {stages.map((stage, index) => {
          const locked = index > state.currentStage || (stage.requiredUpgrade && !state.heatShield);
          return <li key={stage.id} className={locked ? 'route-stop route-stop--locked' : 'route-stop'}>
            <div><span>0{index + 1}</span><h2>{stage.name}</h2><p>{stage.enemy}</p></div>
            <button type="button" disabled={locked} onClick={() => dispatch({ type: 'ENTER_BATTLE', stageIndex: index })}>{locked ? 'Shield required' : 'Drop in'}</button>
          </li>;
        })}
      </ol>
      {!state.heatShield && state.stardust >= heatShieldCost && <button className="upgrade-button" type="button" onClick={() => dispatch({ type: 'BUY_HEAT_SHIELD' })}>Install heat shield - {heatShieldCost} Stardust</button>}
    </main>
  );
}
