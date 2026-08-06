export function LogViewer({ lines = [], title = 'logs', autoscroll = true, maxHeight = 260 }) {
  const [filter, setFilter] = React.useState('all');
  const bodyRef = React.useRef(null);
  React.useEffect(() => {
    if (autoscroll && bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, autoscroll]);
  const shown = filter === 'all' ? lines : lines.filter(l => l.level === filter);
  return <div className="logview">
    <div className="log-head">
      <span className="dot pulse"></span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>{title}</span>
      <span style={{ flex: 1 }}></span>
      <span className="seg" style={{ padding: 2 }}>
        {['all', 'info', 'warn', 'err'].map(f => <button key={f} className={filter === f ? 'active' : ''} style={{ padding: '3px 10px', fontSize: 11 }} onClick={() => setFilter(f)}>{f}</button>)}
      </span>
    </div>
    <div className="log-body" ref={bodyRef} style={{ maxHeight }}>
      {shown.map((l, i) => <div className="log-line" key={i}>
        <span className="lt">{l.time}</span>
        <span className={'lv ' + (l.level || 'info')}>{(l.level || 'info').toUpperCase()}</span>
        <span className="lm">{l.message}</span>
      </div>)}
    </div>
  </div>;
}
