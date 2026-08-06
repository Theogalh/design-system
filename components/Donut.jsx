const DONUT_COLORS = ['var(--peri)', 'var(--ok)', 'var(--warn)', 'var(--faint)', 'var(--bad)'];
export function Donut({ data = [], size = 120, thickness = 14 }) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const r = (size - thickness) / 2, c = 2 * Math.PI * r;
  let acc = 0;
  return <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
    <svg width={size} height={size} viewBox={'0 0 ' + size + ' ' + size} style={{ transform: 'rotate(-90deg)', flex: 'none' }} aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--panel-2)" strokeWidth={thickness} />
      {data.map((d, i) => {
        const frac = d.value / total, off = acc; acc += frac;
        return <circle key={d.label} cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={d.color || DONUT_COLORS[i % DONUT_COLORS.length]} strokeWidth={thickness}
          strokeDasharray={(frac * c - 2) + ' ' + (c - frac * c + 2)} strokeDashoffset={-off * c} strokeLinecap="butt" />;
      })}
    </svg>
    <div className="viz-legend">
      {data.map((d, i) => <div className="lg-row" key={d.label}>
        <span className="swatch" style={{ background: d.color || DONUT_COLORS[i % DONUT_COLORS.length] }}></span>
        <span>{d.label}</span>
        <span className="lg-val">{Math.round(d.value / total * 100)}%</span>
      </div>)}
    </div>
  </div>;
}
