interface PlayerBarProps { duration?: number; position?: number; playing?: boolean; rate?: number; onPlayPause?: (playing: boolean) => void; onSeek?: (seconds: number) => void; onRate?: (current: number) => void }
export function PlayerBar(props: PlayerBarProps): JSX.Element;
