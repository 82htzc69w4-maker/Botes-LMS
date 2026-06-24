import Icon from "../components/Icon";
import { users, activities } from "../data";

const cards = [
  { label: "Total users", value: "1,284", trend: "12.5%", detail: "vs. last month", icon: "users", color: "blue", chart: [28,38,32,52,48,66,72] },
  { label: "Active users", value: "1,109", trend: "8.2%", detail: "86.4% of total", icon: "checkCircle", color: "green", chart: [30,35,46,42,55,64,68] },
  { label: "Departments", value: "24", trend: "2 new", detail: "this quarter", icon: "departments", color: "violet", chart: [35,34,43,50,49,58,60] },
  { label: "System alerts", value: "7", trend: "3 urgent", detail: "require attention", icon: "alert", color: "orange", chart: [45,58,38,62,52,46,35] },
];

function Sparkline({ points }) {
  const p = points.map((y, i) => `${i * 19},${75-y}`).join(" ");
  return <svg viewBox="0 0 114 52" className="sparkline"><polyline points={p} fill="none" /></svg>;
}

export default function Dashboard({ openModal, goTo }) {
  return (
    <>
      <section className="page-heading">
        <div><p className="eyebrow">Wednesday, 24 June</p><h1>Good afternoon, Amina</h1><span>Here’s what’s happening across your organization today.</span></div>
        <button className="primary-btn" onClick={() => openModal("user")}><Icon name="userPlus" size={18} /> Add new user</button>
      </section>
      <section className="stats-grid">
        {cards.map(c => <article className="stat-card" key={c.label}>
          <div className="stat-top"><div className={`stat-icon ${c.color}`}><Icon name={c.icon} /></div><span className={`trend ${c.color}`}>↗ {c.trend}</span></div>
          <div className="stat-main"><div><p>{c.label}</p><strong>{c.value}</strong><small>{c.detail}</small></div><Sparkline points={c.chart} /></div>
        </article>)}
      </section>
      <section className="dashboard-grid">
        <article className="panel usage-panel">
          <div className="panel-heading"><div><h3>User activity</h3><p>Active users across the last 7 days</p></div><select><option>Last 7 days</option><option>Last 30 days</option></select></div>
          <div className="chart-metrics"><div><strong>8,492</strong><span>Total sessions</span></div><div><strong>4m 32s</strong><span>Avg. duration</span></div><div><strong>72.8%</strong><span>Engagement</span></div></div>
          <div className="line-chart">
            <div className="y-labels"><span>1.5k</span><span>1k</span><span>500</span><span>0</span></div>
            <svg viewBox="0 0 700 190" preserveAspectRatio="none">
              <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3066e8" stopOpacity=".22"/><stop offset="1" stopColor="#3066e8" stopOpacity="0"/></linearGradient></defs>
              <g className="gridlines"><line x1="0" y1="10" x2="700" y2="10"/><line x1="0" y1="67" x2="700" y2="67"/><line x1="0" y1="124" x2="700" y2="124"/><line x1="0" y1="180" x2="700" y2="180"/></g>
              <path className="area" d="M0 140 C70 128 90 94 150 104 S260 122 310 72 S400 52 450 76 S540 122 585 75 S650 42 700 28 L700 190 L0 190Z"/>
              <path className="line" d="M0 140 C70 128 90 94 150 104 S260 122 310 72 S400 52 450 76 S540 122 585 75 S650 42 700 28"/>
              {[["0","140"],["150","104"],["310","72"],["450","76"],["585","75"],["700","28"]].map(([x,y])=><circle key={x} cx={x} cy={y} r="4"/>)}
            </svg>
            <div className="x-labels"><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span><span>Mon</span><span>Tue</span></div>
          </div>
        </article>
        <article className="panel quick-panel">
          <div className="panel-heading"><div><h3>Quick actions</h3><p>Common administration tasks</p></div></div>
          <div className="quick-actions">
            <button onClick={() => openModal("user")}><i className="blue"><Icon name="userPlus" /></i><span><strong>Add new user</strong><small>Create an account</small></span><Icon name="arrow" size={17}/></button>
            <button onClick={() => openModal("role")}><i className="violet"><Icon name="shieldPlus" /></i><span><strong>Create a role</strong><small>Configure permissions</small></span><Icon name="arrow" size={17}/></button>
            <button onClick={() => openModal("department")}><i className="orange"><Icon name="building" /></i><span><strong>Add department</strong><small>Expand organization</small></span><Icon name="arrow" size={17}/></button>
            <button onClick={() => goTo("audit")}><i className="green"><Icon name="audit" /></i><span><strong>View audit logs</strong><small>Review system activity</small></span><Icon name="arrow" size={17}/></button>
          </div>
        </article>
      </section>
      <section className="dashboard-grid lower">
        <article className="panel recent-users">
          <div className="panel-heading"><div><h3>Recently active users</h3><p>Latest activity across your team</p></div><button className="text-btn" onClick={() => goTo("users")}>View all <Icon name="arrow" size={16}/></button></div>
          <div className="user-list">{users.slice(0,4).map(u => <div className="user-row" key={u.id}><div className={`avatar ${u.color}`}>{u.initials}</div><div className="user-info"><strong>{u.name}</strong><span>{u.email}</span></div><span className="role-pill">{u.role}</span><span className="last-active"><i className={u.status.toLowerCase()} />{u.lastActive}</span><button><Icon name="more" /></button></div>)}</div>
        </article>
        <article className="panel activity-panel">
          <div className="panel-heading"><div><h3>Recent activity</h3><p>Latest administrative changes</p></div><button><Icon name="more" /></button></div>
          <div className="activity-list">{activities.map((a,i) => <div className="activity-item" key={a.title}><div className={`activity-icon ${a.color}`}><Icon name={a.icon} size={17}/></div><div><strong>{a.title}</strong><span>{a.detail}</span><small>{a.time}</small></div>{i < 3 && <i className="activity-line"/>}</div>)}</div>
        </article>
      </section>
    </>
  );
}
