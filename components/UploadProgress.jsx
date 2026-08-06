export function UploadProgress({ items = [], onCancel }) {
  return <div className="up-list">
    {items.map((it, i) => {
      const st = it.status || 'uploading';
      const pct = st === 'done' ? 100 : Math.min(it.progress || 0, 100);
      return <div className={'up-item' + (st === 'done' ? ' done' : st === 'error' ? ' error' : '')} key={it.name}>
        <div className="up-head">
          <span className={'dot' + (st === 'done' ? ' ok' : st === 'error' ? ' bad' : ' pulse')}></span>
          <span className="up-name">{it.name}</span>
          <span className="up-meta">{st === 'error' ? (it.message || 'failed') : st === 'done' ? it.size : (pct + '% · ' + (it.speed || '') + (it.size ? ' · ' + it.size : ''))}</span>
          {st === 'uploading' && onCancel ? <button className="up-cancel" aria-label="Cancel" onClick={() => onCancel(it, i)}>×</button> : null}
        </div>
        <div className="up-track"><div className="up-fill" style={{ width: pct + '%' }}></div></div>
      </div>;
    })}
  </div>;
}
