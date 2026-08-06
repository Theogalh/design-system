export function Chip({ accent, href = '#', children }) {
  return <a className={'chip' + (accent ? ' accent' : '')} href={href}>{children}</a>;
}
