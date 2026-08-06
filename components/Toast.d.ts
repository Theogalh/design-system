interface ToastProps { tone?: 'neutral' | 'ok' | 'bad'; onClose?: () => void; children?: React.ReactNode }
export function Toast(props: ToastProps): JSX.Element;
