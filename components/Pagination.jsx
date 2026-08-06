export function Pagination({ page = 1, pages = 1, onChange }) {
  const go = p => { if (p >= 1 && p <= pages && onChange) onChange(p); };
  const nums = [];
  for (let p = 1; p <= pages; p++) {
    if (pages > 7 && p > 2 && p < pages - 1 && Math.abs(p - page) > 1) {
      if (nums[nums.length - 1] !== '…') nums.push('…');
    } else nums.push(p);
  }
  return <nav className="pager" aria-label="Pagination">
    <button disabled={page <= 1} onClick={() => go(page - 1)}>‹</button>
    {nums.map((n, i) => n === '…'
      ? <span key={'e' + i} className="ellipsis">…</span>
      : <button key={n} className={n === page ? 'active' : ''} onClick={() => go(n)}>{n}</button>)}
    <button disabled={page >= pages} onClick={() => go(page + 1)}>›</button>
  </nav>;
}
