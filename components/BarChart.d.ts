interface BarDatum { label: string; value: number }
interface BarChartProps { data?: BarDatum[]; unit?: string }
export function BarChart(props: BarChartProps): JSX.Element;
