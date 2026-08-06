export function Button({ variant = 'primary', size = 'md', disabled, onClick, children }) {
  return <button className={'btn btn-' + variant + (size === 'sm' ? ' btn-sm' : '')} disabled={disabled} onClick={onClick}>{children}</button>;
}
