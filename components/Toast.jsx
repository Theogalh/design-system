export function Toast({ tone = 'neutral', onClose, children }) {
  return <div className={'toast' + (tone !== 'neutral' ? ' ' + tone : '')} role="status">
    <span className={'dot' + (tone === 'ok' ? ' ok' : tone === 'bad' ? ' bad' : '')}></span>
    <span>{children}</span>
    {onClose ? <button className="toast-close" aria-label="Dismiss" onClick={onClose}>×</button> : null}
  </div>;
}
