export default function StatusPanel({ label, health, score, accent = 'cyan' }) {
  return (
    <section className={`status-panel status-panel--${accent}`} aria-label={`${label} status`}>
      <div className="status-panel__label">{label}</div>
      <div className="status-panel__numbers"><strong>{health}</strong><span>HULL</span><strong>{score}</strong><span>PTS</span></div>
      <div className="health-track"><span style={{ width: `${(health / 18) * 100}%` }} /></div>
    </section>
  );
}
