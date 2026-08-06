export function Sparkline({ data = [], width = 120, height = 36 }) {
  const max = Math.max(...data, 1), min = Math.min(...data, 0);
  const pts = data.map((v, i) => (i / Math.max(data.length - 1, 1) * width).toFixed(1) + ',' + (height - 3 - (v - min) / Math.max(max - min, 1) * (height - 6)).toFixed(1)).join(' ');
  return <svg className="spark" width={width} height={height} viewBox={'0 0 ' + width + ' ' + height} aria-hidden="true"><polyline points={pts} /></svg>;
}
