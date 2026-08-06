export function Modal({ open, title, children, confirmLabel = 'Confirm', cancelLabel = 'Cancel', danger, onConfirm, onClose }) {
  if (!open) return null;
  return <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget && onClose) onClose(); }}>
    <div className="modal" role="dialog" aria-modal="true">
      <h3>{title}</h3>
      <p>{children}</p>
      <div className="modal-actions">
        <button className="btn btn-ghost" onClick={onClose}>{cancelLabel}</button>
        <button className={'btn ' + (danger ? 'btn-danger' : 'btn-primary')} onClick={onConfirm}>{confirmLabel}</button>
      </div>
    </div>
  </div>;
}
