interface DropdownItem { label: string; danger?: boolean; sep?: boolean; onSelect?: () => void }
interface DropdownProps { label?: string; items?: DropdownItem[] }
export function Dropdown(props: DropdownProps): JSX.Element;
