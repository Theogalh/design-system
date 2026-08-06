export function ThemeSwitcher({ target, storageKey = 'tg-theme' }) {
  const [theme, setTheme] = React.useState(() => { try { return localStorage.getItem(storageKey) || 'dark'; } catch (e) { return 'dark'; } });
  React.useEffect(() => {
    const el = target ? document.querySelector(target) : document.documentElement;
    if (el) { if (theme === 'light') el.setAttribute('data-theme', 'light'); else el.removeAttribute('data-theme'); }
    try { localStorage.setItem(storageKey, theme); } catch (e) {}
  }, [theme, target]);
  return <span className="seg" role="group" aria-label="Theme">
    <button className={theme === 'dark' ? 'active' : ''} onClick={() => setTheme('dark')}>Dark</button>
    <button className={theme === 'light' ? 'active' : ''} onClick={() => setTheme('light')}>Light</button>
  </span>;
}
