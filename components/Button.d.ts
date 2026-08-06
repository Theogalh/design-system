interface ButtonProps { variant?: 'primary' | 'ghost' | 'danger'; size?: 'md' | 'sm'; disabled?: boolean; onClick?: () => void; children?: React.ReactNode }
export function Button(props: ButtonProps): JSX.Element;
