export function Breadcrumb({ items = [] }) {
  return <nav className="crumbs" aria-label="Breadcrumb">
    {items.map((it, i) => {
      const last = i === items.length - 1;
      return <React.Fragment key={i}>
        {last ? <span className="current">{it.label}</span> : <a href={it.href || '#'}>{it.label}</a>}
        {!last ? <span className="sep">/</span> : null}
      </React.Fragment>;
    })}
  </nav>;
}
