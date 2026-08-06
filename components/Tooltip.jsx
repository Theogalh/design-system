export function Tooltip({ label, children }) {
  return <span className="tip" tabIndex={0}>{children}<span className="tip-body" role="tooltip">{label}</span></span>;
}
