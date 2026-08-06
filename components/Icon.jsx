const ICON_PATHS = {
  'chevron-down': <polyline points="4 6.5 8 10.5 12 6.5" />,
  'chevron-right': <polyline points="6.5 4 10.5 8 6.5 12" />,
  'chevron-left': <polyline points="9.5 4 5.5 8 9.5 12" />,
  'arrow-left': <g><line x1="13" y1="8" x2="3" y2="8" /><polyline points="7 4 3 8 7 12" /></g>,
  'arrow-right': <g><line x1="3" y1="8" x2="13" y2="8" /><polyline points="9 4 13 8 9 12" /></g>,
  x: <g><line x1="4" y1="4" x2="12" y2="12" /><line x1="12" y1="4" x2="4" y2="12" /></g>,
  plus: <g><line x1="8" y1="3" x2="8" y2="13" /><line x1="3" y1="8" x2="13" y2="8" /></g>,
  check: <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />,
  search: <g><circle cx="7" cy="7" r="4" /><line x1="10" y1="10" x2="13.5" y2="13.5" /></g>,
  copy: <g><rect x="5.5" y="5.5" width="8" height="8" rx="1.5" /><path d="M10.5 5.5V4a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5" /></g>,
  external: <g><polyline points="9 3 13 3 13 7" /><line x1="13" y1="3" x2="7.5" y2="8.5" /><path d="M11 9.5V12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.5" /></g>,
  trash: <g><line x1="3" y1="5" x2="13" y2="5" /><path d="M5 5v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5" /><path d="M6.5 5V3.5h3V5" /></g>,
  warn: <g><line x1="8" y1="5" x2="8" y2="9" /><line x1="8" y1="11.5" x2="8" y2="11.6" /><circle cx="8" cy="8" r="6" /></g>,
  info: <g><line x1="8" y1="7.5" x2="8" y2="11" /><line x1="8" y1="4.5" x2="8" y2="4.6" /><circle cx="8" cy="8" r="6" /></g>,
};
export function Icon({ name, size = 16 }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICON_PATHS[name] || null}</svg>;
}
