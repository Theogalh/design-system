export function Dot({ tone = 'peri', pulse }) {
  return <span className={'dot' + (tone !== 'peri' ? ' ' + tone : '') + (pulse ? ' pulse' : '')}></span>;
}
