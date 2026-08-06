export function DataTable({ columns = [], rows = [], selectable, pageSize, bulkActions, onSelect, rowKey }) {
  const [sortKey, setSortKey] = React.useState(null);
  const [sortDir, setSortDir] = React.useState(1);
  const [page, setPage] = React.useState(1);
  const [sel, setSel] = React.useState({});
  const key = (r, i) => rowKey ? r[rowKey] : i;
  let data = rows.slice();
  if (sortKey) data.sort((a, b) => {
    const x = a[sortKey], y = b[sortKey];
    return (typeof x === 'number' && typeof y === 'number' ? x - y : String(x).localeCompare(String(y))) * sortDir;
  });
  const pages = pageSize ? Math.max(1, Math.ceil(data.length / pageSize)) : 1;
  const shown = pageSize ? data.slice((page - 1) * pageSize, page * pageSize) : data;
  const selKeys = Object.keys(sel).filter(k => sel[k]);
  const allShown = shown.length > 0 && shown.every((r, i) => sel[key(r, i)]);
  const setAll = v => {
    const next = Object.assign({}, sel);
    shown.forEach((r, i) => { next[key(r, i)] = v; });
    setSel(next); onSelect && onSelect(Object.keys(next).filter(k => next[k]));
  };
  const toggle = k => {
    const next = Object.assign({}, sel, { [k]: !sel[k] });
    setSel(next); onSelect && onSelect(Object.keys(next).filter(x => next[x]));
  };
  const sortBy = c => {
    if (!c.sortable) return;
    if (sortKey === c.key) setSortDir(d => -d); else { setSortKey(c.key); setSortDir(1); }
  };
  const nums = [];
  for (let p = 1; p <= pages; p++) nums.push(p);
  return <div>
    {selectable && selKeys.length > 0 ? <div className="bulk-bar">
      <span className="count">{selKeys.length} selected</span>
      <span className="spacer"></span>
      {(bulkActions || []).map(a => <button key={a.label} className={'btn btn-sm ' + (a.danger ? 'btn-danger' : 'btn-ghost')} onClick={() => a.onClick && a.onClick(selKeys)}>{a.label}</button>)}
    </div> : null}
    <div className="ledger-scroll">
      <table className="ledger">
        <thead><tr>
          {selectable ? <th className="cb"><input type="checkbox" checked={allShown} onChange={e => setAll(e.target.checked)} /></th> : null}
          {columns.map(c => <th key={c.key} className={(c.sortable ? 'sortable' : '') + (sortKey === c.key ? ' sorted' : '')} onClick={() => sortBy(c)}>
            {c.label}{sortKey === c.key ? <span className="arrow">{sortDir === 1 ? '▲' : '▼'}</span> : null}
          </th>)}
        </tr></thead>
        <tbody>
          {shown.map((r, i) => { const k = key(r, i); return <tr key={k} className={sel[k] ? 'selected' : ''}>
            {selectable ? <td className="cb"><input type="checkbox" checked={!!sel[k]} onChange={() => toggle(k)} /></td> : null}
            {columns.map(c => <td key={c.key} className={c.mono === false ? '' : undefined}>{c.render ? c.render(r) : r[c.key]}</td>)}
          </tr>; })}
        </tbody>
      </table>
    </div>
    {pageSize && pages > 1 ? <nav className="pager" style={{ marginTop: 12 }} aria-label="Pagination">
      <button disabled={page <= 1} onClick={() => setPage(p => p - 1)}>‹</button>
      {nums.map(n => <button key={n} className={n === page ? 'active' : ''} onClick={() => setPage(n)}>{n}</button>)}
      <button disabled={page >= pages} onClick={() => setPage(p => p + 1)}>›</button>
    </nav> : null}
  </div>;
}
