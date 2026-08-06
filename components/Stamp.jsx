export function Stamp({ tone = 'neutral', children }) {
  return <span className={'stamp' + (tone !== 'neutral' ? ' ' + tone : '')}>{children}</span>;
}
