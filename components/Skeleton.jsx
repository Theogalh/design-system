export function Skeleton({ variant = 'line', width = '100%', height }) {
  const h = height != null ? height : (variant === 'line' ? 12 : variant === 'circle' ? 36 : 80);
  const w = variant === 'circle' ? h : width;
  return <span className={'skel' + (variant === 'circle' ? ' circle' : '')} style={{ display: 'block', width: w, height: h }}></span>;
}
