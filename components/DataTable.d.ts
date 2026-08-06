interface DataColumn { key: string; label: string; sortable?: boolean; render?: (row: any) => any }
interface BulkAction { label: string; danger?: boolean; onClick?: (selectedKeys: string[]) => void }
interface DataTableProps { columns?: DataColumn[]; rows?: any[]; selectable?: boolean; pageSize?: number; bulkActions?: BulkAction[]; onSelect?: (selectedKeys: string[]) => void; rowKey?: string }
export function DataTable(props: DataTableProps): JSX.Element;
