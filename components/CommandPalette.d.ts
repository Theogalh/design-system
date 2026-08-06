interface PaletteItem { label: string; group?: string; hint?: string; onSelect?: () => void }
interface CommandPaletteProps { items?: PaletteItem[]; hotkey?: string; placeholder?: string; open?: boolean; onClose?: () => void }
export function CommandPalette(props: CommandPaletteProps): JSX.Element;
