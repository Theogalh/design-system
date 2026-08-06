interface UploadItem { name: string; progress?: number; status?: 'uploading' | 'done' | 'error'; size?: string; speed?: string; message?: string }
interface UploadProgressProps { items?: UploadItem[]; onCancel?: (item: UploadItem, index: number) => void }
export function UploadProgress(props: UploadProgressProps): JSX.Element;
