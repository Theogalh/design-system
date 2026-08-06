export function SearchInput({ placeholder = 'Search…', value, shortcut, onChange }) {
  return <span className="search">
    <span className="search-ico"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><circle cx="7" cy="7" r="4" /><line x1="10" y1="10" x2="13.5" y2="13.5" /></svg></span>
    <input type="search" placeholder={placeholder} value={value} onChange={e => onChange && onChange(e.target.value)} />
    {shortcut ? <kbd>{shortcut}</kbd> : null}
  </span>;
}
