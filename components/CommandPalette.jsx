export function CommandPalette({ items = [], hotkey = 'k', placeholder = 'Search or run a command…', open: openProp, onClose }) {
  const controlled = openProp !== undefined;
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState('');
  const [idx, setIdx] = React.useState(0);
  const isOpen = controlled ? openProp : open;
  const close = () => { controlled ? (onClose && onClose()) : setOpen(false); setQ(''); setIdx(0); };
  React.useEffect(() => {
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === hotkey) { e.preventDefault(); controlled ? null : setOpen(o => !o); }
      else if (e.key === 'Escape' && isOpen) close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, controlled, hotkey]);
  if (!isOpen) return null;
  const filtered = items.filter(it => it.label.toLowerCase().includes(q.toLowerCase()));
  const run = it => { close(); it.onSelect && it.onSelect(); };
  const groups = [];
  filtered.forEach(it => {
    let g = groups.find(x => x.name === (it.group || ''));
    if (!g) { g = { name: it.group || '', items: [] }; groups.push(g); }
    g.items.push(it);
  });
  let flat = -1;
  return <div className="palette-overlay" onClick={e => { if (e.target === e.currentTarget) close(); }}>
    <div className="palette" role="dialog" aria-label="Command palette">
      <div className="pal-input">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><circle cx="7" cy="7" r="4" /><line x1="10" y1="10" x2="13.5" y2="13.5" /></svg>
        <input autoFocus placeholder={placeholder} value={q}
          onChange={e => { setQ(e.target.value); setIdx(0); }}
          onKeyDown={e => {
            if (e.key === 'ArrowDown') { e.preventDefault(); setIdx(i => Math.min(i + 1, filtered.length - 1)); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); setIdx(i => Math.max(i - 1, 0)); }
            else if (e.key === 'Enter' && filtered[idx]) run(filtered[idx]);
          }} />
      </div>
      <div className="palette-list">
        {filtered.length === 0 ? <div className="pal-group">No results</div> : groups.map(g => <React.Fragment key={g.name}>
          {g.name ? <div className="pal-group">{g.name}</div> : null}
          {g.items.map(it => { flat++; const active = flat === idx; return <button key={it.label} className={'pal-item' + (active ? ' active' : '')} onClick={() => run(it)}>{it.label}{it.hint ? <span className="hint">{it.hint}</span> : null}</button>; })}
        </React.Fragment>)}
      </div>
      <div className="pal-foot"><span>↑↓ navigate</span><span>↵ run</span><span>esc close</span></div>
    </div>
  </div>;
}
