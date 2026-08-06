interface LogLine { time: string; level?: 'info' | 'ok' | 'warn' | 'err'; message: string }
interface LogViewerProps { lines?: LogLine[]; title?: string; autoscroll?: boolean; maxHeight?: number }
export function LogViewer(props: LogViewerProps): JSX.Element;
