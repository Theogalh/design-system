export function StatCard({ label, value, delta, trend = 'flat' }) {
  return <div className="stat-card">
    <span className="stat-label">{label}</span>
    <span className="stat-value">{value}</span>
    {delta ? <span className={'stat-delta' + (trend === 'up' ? ' up' : trend === 'down' ? ' down' : '')}>{trend === 'up' ? '▲' : trend === 'down' ? '▼' : '—'} {delta}</span> : null}
  </div>;
}
