export function Dropdown({ label = 'Actions', items = [] }) {
  const [open, setOpen] = React.useState(false);
  return <span className="menu-wrap">
    <button className="btn btn-ghost btn-sm" onClick={() => setOpen(o => !o)}>{label} <span style={{fontSize:'10px'}}>▾</span></button>
    {open ? <span className="menu">
      {items.map((it, i) => it.sep
        ? <span key={i} className="sep"></span>
        : <button key={i} className={it.danger ? 'danger' : ''} onClick={() => { setOpen(false); it.onSelect && it.onSelect(); }}>{it.label}</button>)}
    </span> : null}
  </span>;
}
