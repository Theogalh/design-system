function fmt(s) { s = Math.max(0, Math.round(s)); const m = Math.floor(s / 60); return m + ':' + String(s % 60).padStart(2, '0'); }
export function PlayerBar({ duration = 240, position = 0, playing: playingProp, rate = 1, onPlayPause, onSeek, onRate }) {
  const [playing, setPlaying] = React.useState(!!playingProp);
  const [pos, setPos] = React.useState(position);
  const scrubRef = React.useRef(null);
  const pct = duration ? pos / duration * 100 : 0;
  const seek = e => {
    const r = scrubRef.current.getBoundingClientRect();
    const p = Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1) * duration;
    setPos(p); onSeek && onSeek(p);
  };
  return <div className="player">
    <button className="p-btn" aria-label={playing ? 'Pause' : 'Play'} onClick={() => { setPlaying(p => !p); onPlayPause && onPlayPause(!playing); }}>
      {playing
        ? <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor"><rect x="1" y="1" width="3.5" height="12" rx="1" /><rect x="7.5" y="1" width="3.5" height="12" rx="1" /></svg>
        : <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor"><path d="M2 1.5v11a1 1 0 0 0 1.5.87l9-5.5a1 1 0 0 0 0-1.74l-9-5.5A1 1 0 0 0 2 1.5z" /></svg>}
    </button>
    <span className="p-time">{fmt(pos)}</span>
    <div className="p-scrub" ref={scrubRef} onClick={seek}>
      <div className="p-prog" style={{ width: pct + '%' }}></div>
      <div className="p-handle" style={{ left: pct + '%' }}></div>
    </div>
    <span className="p-time">{fmt(duration)}</span>
    <button className="p-rate" onClick={() => onRate && onRate(rate)}>{rate}×</button>
  </div>;
}
