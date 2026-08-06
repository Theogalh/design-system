interface DonutDatum { label: string; value: number; color?: string }
interface DonutProps { data?: DonutDatum[]; size?: number; thickness?: number }
export function Donut(props: DonutProps): JSX.Element;
