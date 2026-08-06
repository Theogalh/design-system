interface ModalProps { open?: boolean; title?: string; children?: React.ReactNode; confirmLabel?: string; cancelLabel?: string; danger?: boolean; onConfirm?: () => void; onClose?: () => void }
export function Modal(props: ModalProps): JSX.Element;
