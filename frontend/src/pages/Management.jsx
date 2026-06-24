import { useState } from "react";
import Icon from "../components/Icon";
import { users, departments } from "../data";

const configs = {
  users: { title: "User management", subtitle: "Manage user accounts, access and organizational assignments.", action: "Add new user", modal: "user" },
  roles: { title: "Role management", subtitle: "Configure roles and their system permissions.", action: "Create role", modal: "role" },
  departments: { title: "Department management", subtitle: "Manage departments and their reporting structure.", action: "Add department", modal: "department" },
  sites: { title: "Site management", subtitle: "Configure organization sites, regions and locations.", action: "Add site", modal: "department" },
  positions: { title: "Position management", subtitle: "Define positions, grades and reporting relationships.", action: "Add position", modal: "role" },
  organization: { title: "Organization structure", subtitle: "Explore how teams and departments connect.", action: "Edit structure", modal: "department" },
  workflows: { title: "Workflow management", subtitle: "Design and manage business approval workflows.", action: "New workflow", modal: "role" },
  audit: { title: "Audit logs", subtitle: "Review security events and administrative activity.", action: "Export logs", modal: null },
  settings: { title: "System settings", subtitle: "Configure global preferences, security and integrations.", action: "Save changes", modal: null },
};

const roles = [
  { name: "Super Administrator", users: 4, permissions: 48, color: "blue", desc: "Complete access to all WCMS functions" },
  { name: "Department Admin", users: 18, permissions: 32, color: "violet", desc: "Manage users and content within a department" },
  { name: "Content Manager", users: 46, permissions: 18, color: "green", desc: "Create, review and publish site content" },
  { name: "Auditor", users: 8, permissions: 9, color: "orange", desc: "Read-only access to logs and reports" },
];

export default function Management({ type, openModal, notify }) {
  const [query, setQuery] = useState("");
  const c = configs[type];
  const action = () => c.modal ? openModal(c.modal) : notify(type === "audit" ? "Audit log export has started" : "Settings saved successfully");

  return <>
    <section className="page-heading management-heading">
      <div><p className="eyebrow">Administration workspace</p><h1>{c.title}</h1><span>{c.subtitle}</span></div>
      <button className="primary-btn" onClick={action}><Icon name={type === "audit" ? "download" : type === "settings" ? "check" : "plus"} size={18}/>{c.action}</button>
    </section>
    {type === "roles" ? <RoleCards /> : type === "settings" ? <Settings /> : type === "organization" ? <Organization /> : type === "audit" ? <AuditLogs query={query} setQuery={setQuery} /> : <DataTable type={type} query={query} setQuery={setQuery} />}
  </>;
}

function Toolbar({ query, setQuery, label = "Search records..." }) {
  return <div className="table-toolbar"><label><Icon name="search" size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={label}/></label><div><button className="secondary-btn"><Icon name="filter" size={17}/> Filter</button><button className="secondary-btn"><Icon name="download" size={17}/> Export</button></div></div>;
}

function DataTable({ type, query, setQuery }) {
  const isUsers = type === "users";
  const source = isUsers ? users : departments.map((d,i)=>({...d,id:i+1}));
  const filtered = source.filter(x => JSON.stringify(x).toLowerCase().includes(query.toLowerCase()));
  return <article className="panel table-panel">
    <Toolbar query={query} setQuery={setQuery} label={`Search ${type}...`} />
    <div className="table-wrap"><table><thead><tr>{isUsers ? <><th><input type="checkbox"/></th><th>User</th><th>Role</th><th>Department</th><th>Status</th><th>Last active</th></> : <><th>Name</th><th>Code</th><th>Manager</th><th>Members</th><th>Status</th></>}<th></th></tr></thead>
      <tbody>{filtered.map(row=>isUsers ? <tr key={row.id}><td><input type="checkbox"/></td><td><div className="table-user"><div className={`avatar ${row.color}`}>{row.initials}</div><div><strong>{row.name}</strong><span>{row.email}</span></div></div></td><td><span className="role-pill">{row.role}</span></td><td>{row.department}</td><td><span className={`status ${row.status.toLowerCase()}`}><i/>{row.status}</span></td><td className="muted">{row.lastActive}</td><td><button className="row-menu"><Icon name="more"/></button></td></tr> :
      <tr key={row.id}><td><strong>{row.name}</strong></td><td><span className="code-pill">{row.code}</span></td><td>{row.manager}</td><td>{row.members}</td><td><span className={`status ${row.status.toLowerCase()}`}><i/>{row.status}</span></td><td><button className="row-menu"><Icon name="more"/></button></td></tr>)}</tbody>
    </table></div><div className="pagination"><span>Showing 1–{filtered.length} of {filtered.length} records</span><div><button disabled>Previous</button><button className="current">1</button><button>2</button><button>Next</button></div></div>
  </article>;
}

function RoleCards() {
  return <div className="roles-grid">{roles.map(r=><article className="panel role-card" key={r.name}><div className={`role-card-icon ${r.color}`}><Icon name="shield"/></div><button className="row-menu"><Icon name="more"/></button><h3>{r.name}</h3><p>{r.desc}</p><div className="role-meta"><span><Icon name="users" size={16}/><strong>{r.users}</strong> users</span><span><Icon name="key" size={16}/><strong>{r.permissions}</strong> permissions</span></div><button className="role-edit"><Icon name="edit" size={16}/> Edit role</button></article>)}</div>;
}

function AuditLogs({query,setQuery}) {
  const events = [
    ["Amina Patel","Updated user permissions","User: Liam Botha","Success","Today, 14:42"],
    ["System","Automated database backup","Backup ID: BK-240624","Success","Today, 14:00"],
    ["Ethan Williams","Exported audit report","Date range: 01–24 Jun","Success","Today, 12:18"],
    ["Unknown IP","Failed authentication attempt","IP: 196.25.14.8","Blocked","Today, 11:54"],
    ["Nandi Mokoena","Published site content","Page: Community Updates","Success","Today, 10:31"],
  ].filter(x=>x.join(" ").toLowerCase().includes(query.toLowerCase()));
  return <article className="panel table-panel"><Toolbar query={query} setQuery={setQuery} label="Search audit events..."/><div className="table-wrap"><table><thead><tr><th>Actor</th><th>Event</th><th>Resource</th><th>Outcome</th><th>Timestamp</th><th></th></tr></thead><tbody>{events.map((e,i)=><tr key={i}><td><strong>{e[0]}</strong></td><td>{e[1]}</td><td className="muted">{e[2]}</td><td><span className={`status ${e[3].toLowerCase()}`}><i/>{e[3]}</span></td><td className="muted">{e[4]}</td><td><button className="row-menu"><Icon name="eye" size={18}/></button></td></tr>)}</tbody></table></div></article>;
}

function Settings() {
  return <div className="settings-grid"><article className="panel settings-nav"><button className="active"><Icon name="settings"/> General</button><button><Icon name="lock"/> Security</button><button><Icon name="bell"/> Notifications</button><button><Icon name="database"/> Data & backups</button></article><article className="panel settings-form"><h3>General settings</h3><p>Manage basic information and regional preferences.</p><div className="form-grid"><div><label className="field-label">Organization name</label><input className="form-input" defaultValue="Western Cape Management System"/></div><div><label className="field-label">System abbreviation</label><input className="form-input" defaultValue="WCMS"/></div><div><label className="field-label">Default language</label><select className="form-input"><option>English (South Africa)</option></select></div><div><label className="field-label">Time zone</label><select className="form-input"><option>Africa/Johannesburg (GMT+2)</option></select></div></div><hr/><h3>Session controls</h3><div className="toggle-row"><div><strong>Maintenance mode</strong><span>Temporarily prevent non-administrators from signing in.</span></div><button className="toggle"><i/></button></div><div className="toggle-row"><div><strong>Automatic session timeout</strong><span>Sign out inactive users after 30 minutes.</span></div><button className="toggle on"><i/></button></div></article></div>;
}

function Organization() {
  return <article className="panel org-panel"><div className="org-node root"><div className="avatar indigo">EO</div><div><strong>Executive Office</strong><span>Office of the Director-General</span></div></div><div className="org-line"/><div className="org-branches"><div className="org-branch"><div className="org-node"><div className="avatar cyan">CS</div><div><strong>Corporate Services</strong><span>5 departments · 182 staff</span></div></div></div><div className="org-branch"><div className="org-node"><div className="avatar violet">PD</div><div><strong>Programme Delivery</strong><span>8 departments · 694 staff</span></div></div></div><div className="org-branch"><div className="org-node"><div className="avatar orange">GO</div><div><strong>Governance & Oversight</strong><span>4 departments · 96 staff</span></div></div></div></div></article>;
}
