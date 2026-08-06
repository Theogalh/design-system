export function Switch({ checked, disabled, label, onChange }) {
  return <label className="switch">
    <input type="checkbox" checked={!!checked} disabled={disabled} onChange={e => onChange && onChange(e.target.checked)} />
    <span className="track"></span>
    {label ? <span>{label}</span> : null}
  </label>;
}
