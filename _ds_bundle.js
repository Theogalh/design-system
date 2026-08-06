/* @ds-bundle: {"format":4,"namespace":"TheogalhDevDesignSystem_32f2b5","components":[{"name":"BarChart","sourcePath":"components/BarChart.jsx"},{"name":"Breadcrumb","sourcePath":"components/Breadcrumb.jsx"},{"name":"Button","sourcePath":"components/Button.jsx"},{"name":"Chip","sourcePath":"components/Chip.jsx"},{"name":"CommandPalette","sourcePath":"components/CommandPalette.jsx"},{"name":"DataTable","sourcePath":"components/DataTable.jsx"},{"name":"Donut","sourcePath":"components/Donut.jsx"},{"name":"Dot","sourcePath":"components/Dot.jsx"},{"name":"Dropdown","sourcePath":"components/Dropdown.jsx"},{"name":"Icon","sourcePath":"components/Icon.jsx"},{"name":"LogViewer","sourcePath":"components/LogViewer.jsx"},{"name":"Modal","sourcePath":"components/Modal.jsx"},{"name":"Pagination","sourcePath":"components/Pagination.jsx"},{"name":"PlayerBar","sourcePath":"components/PlayerBar.jsx"},{"name":"SearchInput","sourcePath":"components/SearchInput.jsx"},{"name":"Skeleton","sourcePath":"components/Skeleton.jsx"},{"name":"Sparkline","sourcePath":"components/Sparkline.jsx"},{"name":"Stamp","sourcePath":"components/Stamp.jsx"},{"name":"StatCard","sourcePath":"components/StatCard.jsx"},{"name":"Switch","sourcePath":"components/Switch.jsx"},{"name":"ThemeSwitcher","sourcePath":"components/ThemeSwitcher.jsx"},{"name":"Toast","sourcePath":"components/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/Tooltip.jsx"},{"name":"UploadProgress","sourcePath":"components/UploadProgress.jsx"}],"sourceHashes":{"components/BarChart.jsx":"e58c342c81f6","components/Breadcrumb.jsx":"2a8a818dde3d","components/Button.jsx":"56667768200f","components/Chip.jsx":"0a8b666229fb","components/CommandPalette.jsx":"e3bb202508a2","components/DataTable.jsx":"eb89530a8ce6","components/Donut.jsx":"12d14401c9a8","components/Dot.jsx":"89e4eef27de9","components/Dropdown.jsx":"ce903074f028","components/Icon.jsx":"ee345c72261f","components/LogViewer.jsx":"7824dca1a68e","components/Modal.jsx":"a41715d2a1c2","components/Pagination.jsx":"207e88cf9d33","components/PlayerBar.jsx":"2b4bf7c1d47b","components/SearchInput.jsx":"14aada86a001","components/Skeleton.jsx":"5882a252423a","components/Sparkline.jsx":"c2d06f8f1301","components/Stamp.jsx":"5a3919bc2627","components/StatCard.jsx":"f6fa1e7396f3","components/Switch.jsx":"9cb89eaf6a05","components/ThemeSwitcher.jsx":"7c97bd309633","components/Toast.jsx":"148cf0f5ab26","components/Tooltip.jsx":"5f29c59c251e","components/UploadProgress.jsx":"74b7715d6a0d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TheogalhDevDesignSystem_32f2b5 = window.TheogalhDevDesignSystem_32f2b5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/BarChart.jsx
try { (() => {
function BarChart({
  data = [],
  unit = ''
}) {
  const max = Math.max(...data.map(d => d.value), 1);
  return /*#__PURE__*/React.createElement("div", {
    className: "bars"
  }, data.map(d => /*#__PURE__*/React.createElement("div", {
    className: "bar-row",
    key: d.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "bar-label"
  }, d.label), /*#__PURE__*/React.createElement("span", {
    className: "bar-track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bar-fill",
    style: {
      width: d.value / max * 100 + '%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "bar-val"
  }, d.value.toLocaleString(), unit))));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = []
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "crumbs",
    "aria-label": "Breadcrumb"
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      className: "current"
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#'
    }, it.label), !last ? /*#__PURE__*/React.createElement("span", {
      className: "sep"
    }, "/") : null);
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  onClick,
  children
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: 'btn btn-' + variant + (size === 'sm' ? ' btn-sm' : ''),
    disabled: disabled,
    onClick: onClick
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button.jsx", error: String((e && e.message) || e) }); }

// components/Chip.jsx
try { (() => {
function Chip({
  accent,
  href = '#',
  children
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: 'chip' + (accent ? ' accent' : ''),
    href: href
  }, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Chip.jsx", error: String((e && e.message) || e) }); }

// components/CommandPalette.jsx
try { (() => {
function CommandPalette({
  items = [],
  hotkey = 'k',
  placeholder = 'Search or run a command…',
  open: openProp,
  onClose
}) {
  const controlled = openProp !== undefined;
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState('');
  const [idx, setIdx] = React.useState(0);
  const isOpen = controlled ? openProp : open;
  const close = () => {
    controlled ? onClose && onClose() : setOpen(false);
    setQ('');
    setIdx(0);
  };
  React.useEffect(() => {
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === hotkey) {
        e.preventDefault();
        controlled ? null : setOpen(o => !o);
      } else if (e.key === 'Escape' && isOpen) close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, controlled, hotkey]);
  if (!isOpen) return null;
  const filtered = items.filter(it => it.label.toLowerCase().includes(q.toLowerCase()));
  const run = it => {
    close();
    it.onSelect && it.onSelect();
  };
  const groups = [];
  filtered.forEach(it => {
    let g = groups.find(x => x.name === (it.group || ''));
    if (!g) {
      g = {
        name: it.group || '',
        items: []
      };
      groups.push(g);
    }
    g.items.push(it);
  });
  let flat = -1;
  return /*#__PURE__*/React.createElement("div", {
    className: "palette-overlay",
    onClick: e => {
      if (e.target === e.currentTarget) close();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "palette",
    role: "dialog",
    "aria-label": "Command palette"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pal-input"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "10",
    x2: "13.5",
    y2: "13.5"
  })), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    placeholder: placeholder,
    value: q,
    onChange: e => {
      setQ(e.target.value);
      setIdx(0);
    },
    onKeyDown: e => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setIdx(i => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setIdx(i => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && filtered[idx]) run(filtered[idx]);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "palette-list"
  }, filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "pal-group"
  }, "No results") : groups.map(g => /*#__PURE__*/React.createElement(React.Fragment, {
    key: g.name
  }, g.name ? /*#__PURE__*/React.createElement("div", {
    className: "pal-group"
  }, g.name) : null, g.items.map(it => {
    flat++;
    const active = flat === idx;
    return /*#__PURE__*/React.createElement("button", {
      key: it.label,
      className: 'pal-item' + (active ? ' active' : ''),
      onClick: () => run(it)
    }, it.label, it.hint ? /*#__PURE__*/React.createElement("span", {
      className: "hint"
    }, it.hint) : null);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pal-foot"
  }, /*#__PURE__*/React.createElement("span", null, "\u2191\u2193 navigate"), /*#__PURE__*/React.createElement("span", null, "\u21B5 run"), /*#__PURE__*/React.createElement("span", null, "esc close"))));
}
Object.assign(__ds_scope, { CommandPalette });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/CommandPalette.jsx", error: String((e && e.message) || e) }); }

// components/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  selectable,
  pageSize,
  bulkActions,
  onSelect,
  rowKey
}) {
  const [sortKey, setSortKey] = React.useState(null);
  const [sortDir, setSortDir] = React.useState(1);
  const [page, setPage] = React.useState(1);
  const [sel, setSel] = React.useState({});
  const key = (r, i) => rowKey ? r[rowKey] : i;
  let data = rows.slice();
  if (sortKey) data.sort((a, b) => {
    const x = a[sortKey],
      y = b[sortKey];
    return (typeof x === 'number' && typeof y === 'number' ? x - y : String(x).localeCompare(String(y))) * sortDir;
  });
  const pages = pageSize ? Math.max(1, Math.ceil(data.length / pageSize)) : 1;
  const shown = pageSize ? data.slice((page - 1) * pageSize, page * pageSize) : data;
  const selKeys = Object.keys(sel).filter(k => sel[k]);
  const allShown = shown.length > 0 && shown.every((r, i) => sel[key(r, i)]);
  const setAll = v => {
    const next = Object.assign({}, sel);
    shown.forEach((r, i) => {
      next[key(r, i)] = v;
    });
    setSel(next);
    onSelect && onSelect(Object.keys(next).filter(k => next[k]));
  };
  const toggle = k => {
    const next = Object.assign({}, sel, {
      [k]: !sel[k]
    });
    setSel(next);
    onSelect && onSelect(Object.keys(next).filter(x => next[x]));
  };
  const sortBy = c => {
    if (!c.sortable) return;
    if (sortKey === c.key) setSortDir(d => -d);else {
      setSortKey(c.key);
      setSortDir(1);
    }
  };
  const nums = [];
  for (let p = 1; p <= pages; p++) nums.push(p);
  return /*#__PURE__*/React.createElement("div", null, selectable && selKeys.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "bulk-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, selKeys.length, " selected"), /*#__PURE__*/React.createElement("span", {
    className: "spacer"
  }), (bulkActions || []).map(a => /*#__PURE__*/React.createElement("button", {
    key: a.label,
    className: 'btn btn-sm ' + (a.danger ? 'btn-danger' : 'btn-ghost'),
    onClick: () => a.onClick && a.onClick(selKeys)
  }, a.label))) : null, /*#__PURE__*/React.createElement("div", {
    className: "ledger-scroll"
  }, /*#__PURE__*/React.createElement("table", {
    className: "ledger"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable ? /*#__PURE__*/React.createElement("th", {
    className: "cb"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: allShown,
    onChange: e => setAll(e.target.checked)
  })) : null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: (c.sortable ? 'sortable' : '') + (sortKey === c.key ? ' sorted' : ''),
    onClick: () => sortBy(c)
  }, c.label, sortKey === c.key ? /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, sortDir === 1 ? '▲' : '▼') : null)))), /*#__PURE__*/React.createElement("tbody", null, shown.map((r, i) => {
    const k = key(r, i);
    return /*#__PURE__*/React.createElement("tr", {
      key: k,
      className: sel[k] ? 'selected' : ''
    }, selectable ? /*#__PURE__*/React.createElement("td", {
      className: "cb"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: !!sel[k],
      onChange: () => toggle(k)
    })) : null, columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      className: c.mono === false ? '' : undefined
    }, c.render ? c.render(r) : r[c.key])));
  })))), pageSize && pages > 1 ? /*#__PURE__*/React.createElement("nav", {
    className: "pager",
    style: {
      marginTop: 12
    },
    "aria-label": "Pagination"
  }, /*#__PURE__*/React.createElement("button", {
    disabled: page <= 1,
    onClick: () => setPage(p => p - 1)
  }, "\u2039"), nums.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    className: n === page ? 'active' : '',
    onClick: () => setPage(n)
  }, n)), /*#__PURE__*/React.createElement("button", {
    disabled: page >= pages,
    onClick: () => setPage(p => p + 1)
  }, "\u203A")) : null);
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/Donut.jsx
try { (() => {
const DONUT_COLORS = ['var(--peri)', 'var(--ok)', 'var(--warn)', 'var(--faint)', 'var(--bad)'];
function Donut({
  data = [],
  size = 120,
  thickness = 14
}) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const r = (size - thickness) / 2,
    c = 2 * Math.PI * r;
  let acc = 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: '0 0 ' + size + ' ' + size,
    style: {
      transform: 'rotate(-90deg)',
      flex: 'none'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--panel-2)",
    strokeWidth: thickness
  }), data.map((d, i) => {
    const frac = d.value / total,
      off = acc;
    acc += frac;
    return /*#__PURE__*/React.createElement("circle", {
      key: d.label,
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: d.color || DONUT_COLORS[i % DONUT_COLORS.length],
      strokeWidth: thickness,
      strokeDasharray: frac * c - 2 + ' ' + (c - frac * c + 2),
      strokeDashoffset: -off * c,
      strokeLinecap: "butt"
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "viz-legend"
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    className: "lg-row",
    key: d.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "swatch",
    style: {
      background: d.color || DONUT_COLORS[i % DONUT_COLORS.length]
    }
  }), /*#__PURE__*/React.createElement("span", null, d.label), /*#__PURE__*/React.createElement("span", {
    className: "lg-val"
  }, Math.round(d.value / total * 100), "%")))));
}
Object.assign(__ds_scope, { Donut });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Donut.jsx", error: String((e && e.message) || e) }); }

// components/Dot.jsx
try { (() => {
function Dot({
  tone = 'peri',
  pulse
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'dot' + (tone !== 'peri' ? ' ' + tone : '') + (pulse ? ' pulse' : '')
  });
}
Object.assign(__ds_scope, { Dot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Dot.jsx", error: String((e && e.message) || e) }); }

// components/Dropdown.jsx
try { (() => {
function Dropdown({
  label = 'Actions',
  items = []
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    className: "menu-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => setOpen(o => !o)
  }, label, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px'
    }
  }, "\u25BE")), open ? /*#__PURE__*/React.createElement("span", {
    className: "menu"
  }, items.map((it, i) => it.sep ? /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "sep"
  }) : /*#__PURE__*/React.createElement("button", {
    key: i,
    className: it.danger ? 'danger' : '',
    onClick: () => {
      setOpen(false);
      it.onSelect && it.onSelect();
    }
  }, it.label))) : null);
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/Icon.jsx
try { (() => {
const ICON_PATHS = {
  'chevron-down': /*#__PURE__*/React.createElement("polyline", {
    points: "4 6.5 8 10.5 12 6.5"
  }),
  'chevron-right': /*#__PURE__*/React.createElement("polyline", {
    points: "6.5 4 10.5 8 6.5 12"
  }),
  'chevron-left': /*#__PURE__*/React.createElement("polyline", {
    points: "9.5 4 5.5 8 9.5 12"
  }),
  'arrow-left': /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "13",
    y1: "8",
    x2: "3",
    y2: "8"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 4 3 8 7 12"
  })),
  'arrow-right': /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "8",
    x2: "13",
    y2: "8"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 4 13 8 9 12"
  })),
  x: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "4",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "4",
    x2: "4",
    y2: "12"
  })),
  plus: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "3",
    x2: "8",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "8",
    x2: "13",
    y2: "8"
  })),
  check: /*#__PURE__*/React.createElement("polyline", {
    points: "3.5 8.5 6.5 11.5 12.5 4.5"
  }),
  search: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "10",
    x2: "13.5",
    y2: "13.5"
  })),
  copy: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "5.5",
    y: "5.5",
    width: "8",
    height: "8",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 5.5V4a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5"
  })),
  external: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polyline", {
    points: "9 3 13 3 13 7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "13",
    y1: "3",
    x2: "7.5",
    y2: "8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 9.5V12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.5"
  })),
  trash: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "5",
    x2: "13",
    y2: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 5v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 5V3.5h3V5"
  })),
  warn: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "5",
    x2: "8",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "11.5",
    x2: "8",
    y2: "11.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "6"
  })),
  info: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "7.5",
    x2: "8",
    y2: "11"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "4.5",
    x2: "8",
    y2: "4.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "6"
  }))
};
function Icon({
  name,
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    className: "icon",
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, ICON_PATHS[name] || null);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Icon.jsx", error: String((e && e.message) || e) }); }

// components/LogViewer.jsx
try { (() => {
function LogViewer({
  lines = [],
  title = 'logs',
  autoscroll = true,
  maxHeight = 260
}) {
  const [filter, setFilter] = React.useState('all');
  const bodyRef = React.useRef(null);
  React.useEffect(() => {
    if (autoscroll && bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, autoscroll]);
  const shown = filter === 'all' ? lines : lines.filter(l => l.level === filter);
  return /*#__PURE__*/React.createElement("div", {
    className: "logview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "log-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot pulse"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--faint)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "seg",
    style: {
      padding: 2
    }
  }, ['all', 'info', 'warn', 'err'].map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: filter === f ? 'active' : '',
    style: {
      padding: '3px 10px',
      fontSize: 11
    },
    onClick: () => setFilter(f)
  }, f)))), /*#__PURE__*/React.createElement("div", {
    className: "log-body",
    ref: bodyRef,
    style: {
      maxHeight
    }
  }, shown.map((l, i) => /*#__PURE__*/React.createElement("div", {
    className: "log-line",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "lt"
  }, l.time), /*#__PURE__*/React.createElement("span", {
    className: 'lv ' + (l.level || 'info')
  }, (l.level || 'info').toUpperCase()), /*#__PURE__*/React.createElement("span", {
    className: "lm"
  }, l.message)))));
}
Object.assign(__ds_scope, { LogViewer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/LogViewer.jsx", error: String((e && e.message) || e) }); }

// components/Modal.jsx
try { (() => {
function Modal({
  open,
  title,
  children,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  danger,
  onConfirm,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, children), /*#__PURE__*/React.createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: onClose
  }, cancelLabel), /*#__PURE__*/React.createElement("button", {
    className: 'btn ' + (danger ? 'btn-danger' : 'btn-primary'),
    onClick: onConfirm
  }, confirmLabel))));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Modal.jsx", error: String((e && e.message) || e) }); }

// components/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  pages = 1,
  onChange
}) {
  const go = p => {
    if (p >= 1 && p <= pages && onChange) onChange(p);
  };
  const nums = [];
  for (let p = 1; p <= pages; p++) {
    if (pages > 7 && p > 2 && p < pages - 1 && Math.abs(p - page) > 1) {
      if (nums[nums.length - 1] !== '…') nums.push('…');
    } else nums.push(p);
  }
  return /*#__PURE__*/React.createElement("nav", {
    className: "pager",
    "aria-label": "Pagination"
  }, /*#__PURE__*/React.createElement("button", {
    disabled: page <= 1,
    onClick: () => go(page - 1)
  }, "\u2039"), nums.map((n, i) => n === '…' ? /*#__PURE__*/React.createElement("span", {
    key: 'e' + i,
    className: "ellipsis"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: n,
    className: n === page ? 'active' : '',
    onClick: () => go(n)
  }, n)), /*#__PURE__*/React.createElement("button", {
    disabled: page >= pages,
    onClick: () => go(page + 1)
  }, "\u203A"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/PlayerBar.jsx
try { (() => {
function fmt(s) {
  s = Math.max(0, Math.round(s));
  const m = Math.floor(s / 60);
  return m + ':' + String(s % 60).padStart(2, '0');
}
function PlayerBar({
  duration = 240,
  position = 0,
  playing: playingProp,
  rate = 1,
  onPlayPause,
  onSeek,
  onRate
}) {
  const [playing, setPlaying] = React.useState(!!playingProp);
  const [pos, setPos] = React.useState(position);
  const scrubRef = React.useRef(null);
  const pct = duration ? pos / duration * 100 : 0;
  const seek = e => {
    const r = scrubRef.current.getBoundingClientRect();
    const p = Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1) * duration;
    setPos(p);
    onSeek && onSeek(p);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "player"
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-btn",
    "aria-label": playing ? 'Pause' : 'Play',
    onClick: () => {
      setPlaying(p => !p);
      onPlayPause && onPlayPause(!playing);
    }
  }, playing ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "14",
    viewBox: "0 0 12 14",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "3.5",
    height: "12",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "7.5",
    y: "1",
    width: "3.5",
    height: "12",
    rx: "1"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "14",
    viewBox: "0 0 12 14",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 1.5v11a1 1 0 0 0 1.5.87l9-5.5a1 1 0 0 0 0-1.74l-9-5.5A1 1 0 0 0 2 1.5z"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "p-time"
  }, fmt(pos)), /*#__PURE__*/React.createElement("div", {
    className: "p-scrub",
    ref: scrubRef,
    onClick: seek
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-prog",
    style: {
      width: pct + '%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "p-handle",
    style: {
      left: pct + '%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "p-time"
  }, fmt(duration)), /*#__PURE__*/React.createElement("button", {
    className: "p-rate",
    onClick: () => onRate && onRate(rate)
  }, rate, "\xD7"));
}
Object.assign(__ds_scope, { PlayerBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/PlayerBar.jsx", error: String((e && e.message) || e) }); }

// components/SearchInput.jsx
try { (() => {
function SearchInput({
  placeholder = 'Search…',
  value,
  shortcut,
  onChange
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "search"
  }, /*#__PURE__*/React.createElement("span", {
    className: "search-ico"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "10",
    x2: "13.5",
    y2: "13.5"
  }))), /*#__PURE__*/React.createElement("input", {
    type: "search",
    placeholder: placeholder,
    value: value,
    onChange: e => onChange && onChange(e.target.value)
  }), shortcut ? /*#__PURE__*/React.createElement("kbd", null, shortcut) : null);
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/Skeleton.jsx
try { (() => {
function Skeleton({
  variant = 'line',
  width = '100%',
  height
}) {
  const h = height != null ? height : variant === 'line' ? 12 : variant === 'circle' ? 36 : 80;
  const w = variant === 'circle' ? h : width;
  return /*#__PURE__*/React.createElement("span", {
    className: 'skel' + (variant === 'circle' ? ' circle' : ''),
    style: {
      display: 'block',
      width: w,
      height: h
    }
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/Sparkline.jsx
try { (() => {
function Sparkline({
  data = [],
  width = 120,
  height = 36
}) {
  const max = Math.max(...data, 1),
    min = Math.min(...data, 0);
  const pts = data.map((v, i) => (i / Math.max(data.length - 1, 1) * width).toFixed(1) + ',' + (height - 3 - (v - min) / Math.max(max - min, 1) * (height - 6)).toFixed(1)).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    className: "spark",
    width: width,
    height: height,
    viewBox: '0 0 ' + width + ' ' + height,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: pts
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/Stamp.jsx
try { (() => {
function Stamp({
  tone = 'neutral',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'stamp' + (tone !== 'neutral' ? ' ' + tone : '')
  }, children);
}
Object.assign(__ds_scope, { Stamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Stamp.jsx", error: String((e && e.message) || e) }); }

// components/StatCard.jsx
try { (() => {
function StatCard({
  label,
  value,
  delta,
  trend = 'flat'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stat-label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "stat-value"
  }, value), delta ? /*#__PURE__*/React.createElement("span", {
    className: 'stat-delta' + (trend === 'up' ? ' up' : trend === 'down' ? ' down' : '')
  }, trend === 'up' ? '▲' : trend === 'down' ? '▼' : '—', " ", delta) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/Switch.jsx
try { (() => {
function Switch({
  checked,
  disabled,
  label,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "switch"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    className: "track"
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Switch.jsx", error: String((e && e.message) || e) }); }

// components/ThemeSwitcher.jsx
try { (() => {
function ThemeSwitcher({
  target,
  storageKey = 'tg-theme'
}) {
  const [theme, setTheme] = React.useState(() => {
    try {
      return localStorage.getItem(storageKey) || 'dark';
    } catch (e) {
      return 'dark';
    }
  });
  React.useEffect(() => {
    const el = target ? document.querySelector(target) : document.documentElement;
    if (el) {
      if (theme === 'light') el.setAttribute('data-theme', 'light');else el.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {}
  }, [theme, target]);
  return /*#__PURE__*/React.createElement("span", {
    className: "seg",
    role: "group",
    "aria-label": "Theme"
  }, /*#__PURE__*/React.createElement("button", {
    className: theme === 'dark' ? 'active' : '',
    onClick: () => setTheme('dark')
  }, "Dark"), /*#__PURE__*/React.createElement("button", {
    className: theme === 'light' ? 'active' : '',
    onClick: () => setTheme('light')
  }, "Light"));
}
Object.assign(__ds_scope, { ThemeSwitcher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ThemeSwitcher.jsx", error: String((e && e.message) || e) }); }

// components/Toast.jsx
try { (() => {
function Toast({
  tone = 'neutral',
  onClose,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'toast' + (tone !== 'neutral' ? ' ' + tone : ''),
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'dot' + (tone === 'ok' ? ' ok' : tone === 'bad' ? ' bad' : '')
  }), /*#__PURE__*/React.createElement("span", null, children), onClose ? /*#__PURE__*/React.createElement("button", {
    className: "toast-close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Toast.jsx", error: String((e && e.message) || e) }); }

// components/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "tip",
    tabIndex: 0
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "tip-body",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/UploadProgress.jsx
try { (() => {
function UploadProgress({
  items = [],
  onCancel
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "up-list"
  }, items.map((it, i) => {
    const st = it.status || 'uploading';
    const pct = st === 'done' ? 100 : Math.min(it.progress || 0, 100);
    return /*#__PURE__*/React.createElement("div", {
      className: 'up-item' + (st === 'done' ? ' done' : st === 'error' ? ' error' : ''),
      key: it.name
    }, /*#__PURE__*/React.createElement("div", {
      className: "up-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: 'dot' + (st === 'done' ? ' ok' : st === 'error' ? ' bad' : ' pulse')
    }), /*#__PURE__*/React.createElement("span", {
      className: "up-name"
    }, it.name), /*#__PURE__*/React.createElement("span", {
      className: "up-meta"
    }, st === 'error' ? it.message || 'failed' : st === 'done' ? it.size : pct + '% · ' + (it.speed || '') + (it.size ? ' · ' + it.size : '')), st === 'uploading' && onCancel ? /*#__PURE__*/React.createElement("button", {
      className: "up-cancel",
      "aria-label": "Cancel",
      onClick: () => onCancel(it, i)
    }, "\xD7") : null), /*#__PURE__*/React.createElement("div", {
      className: "up-track"
    }, /*#__PURE__*/React.createElement("div", {
      className: "up-fill",
      style: {
        width: pct + '%'
      }
    })));
  }));
}
Object.assign(__ds_scope, { UploadProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/UploadProgress.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.CommandPalette = __ds_scope.CommandPalette;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Donut = __ds_scope.Donut;

__ds_ns.Dot = __ds_scope.Dot;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.LogViewer = __ds_scope.LogViewer;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.PlayerBar = __ds_scope.PlayerBar;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.Stamp = __ds_scope.Stamp;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.ThemeSwitcher = __ds_scope.ThemeSwitcher;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.UploadProgress = __ds_scope.UploadProgress;

})();
