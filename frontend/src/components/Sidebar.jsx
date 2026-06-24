import Icon from "./Icon";

const items = [
  ["dashboard", "Dashboard", "dashboard"],
  ["users", "User Management", "users"],
  ["roles", "Role Management", "roles"],
  ["departments", "Departments", "departments"],
  ["sites", "Site Management", "sites"],
  ["positions", "Positions", "positions"],
  ["organization", "Organization", "organization"],
  ["workflows", "Workflows", "workflows"],
  ["audit", "Audit Logs", "audit"],
  ["settings", "System Settings", "settings"],
];

export default function Sidebar({ page, setPage, open, setOpen }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="brand">
        <div className="brand-mark"><span>W</span></div>
        <div><strong>WCMS</strong><small>Administration</small></div>
        <button className="mobile-close" onClick={() => setOpen(false)}><Icon name="close" /></button>
      </div>
      <div className="nav-label">Workspace</div>
      <nav>
        {items.slice(0, 8).map(([icon, label, id]) => (
          <button key={id} className={page === id ? "active" : ""} onClick={() => { setPage(id); setOpen(false); }}>
            <Icon name={icon} size={19} /><span>{label}</span>
            {id === "workflows" && <em>3</em>}
          </button>
        ))}
      </nav>
      <div className="nav-label second">Governance</div>
      <nav>
        {items.slice(8).map(([icon, label, id]) => (
          <button key={id} className={page === id ? "active" : ""} onClick={() => { setPage(id); setOpen(false); }}>
            <Icon name={icon} size={19} /><span>{label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="support-icon"><Icon name="globe" size={19} /></div>
        <div><strong>WCMS Support</strong><small>v2.4.0 · All systems operational</small></div>
      </div>
    </aside>
  );
}
