import Icon from "./Icon";

export default function Header({ title, setSidebarOpen }) {
  return (
    <header className="topbar">
      <button className="menu-button" onClick={() => setSidebarOpen(true)}><Icon name="menu" /></button>
      <div className="topbar-title">
        <span>Administration</span><b>/</b><strong>{title}</strong>
      </div>
      <div className="topbar-actions">
        <label className="global-search">
          <Icon name="search" size={18} />
          <input placeholder="Search anything..." />
          <kbd>⌘ K</kbd>
        </label>
        <button className="icon-button notification"><Icon name="bell" size={20} /><i /></button>
        <div className="profile">
          <div className="avatar indigo">AP</div>
          <div><strong>Amina Patel</strong><small>Super Administrator</small></div>
          <Icon name="down" size={16} />
        </div>
      </div>
    </header>
  );
}
