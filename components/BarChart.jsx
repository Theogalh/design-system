export function BarChart({ data = [], unit = '' }) {
  const max = Math.max(...data.map(d => d.value), 1);
  return <div className="bars">
    {data.map(d => <div className="bar-row" key={d.label}>
      <span className="bar-label">{d.label}</span>
      <span className="bar-track"><span className="bar-fill" style={{ width: (d.value / max * 100) + '%' }}></span></span>
      <span className="bar-val">{d.value.toLocaleString()}{unit}</span>
    </div>)}
  </div>;
}
