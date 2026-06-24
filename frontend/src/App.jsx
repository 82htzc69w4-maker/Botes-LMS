import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Dashboard from "./pages/Dashboard";
import Management from "./pages/Management";

const titles = { dashboard: "Dashboard", users: "Users", roles: "Roles", departments: "Departments", sites: "Sites", positions: "Positions", organization: "Organization", workflows: "Workflows", audit: "Audit logs", settings: "Settings" };

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState("");
  const notify = message => { setToast(message); setTimeout(()=>setToast(""), 3200); };
  const save = name => { setModal(null); notify(`${name || "New record"} was created successfully`); };
  return <div className="app-shell">
    <Sidebar page={page} setPage={setPage} open={sidebarOpen} setOpen={setSidebarOpen}/>
    {sidebarOpen && <div className="sidebar-scrim" onClick={()=>setSidebarOpen(false)}/>}
    <div className="app-main">
      <Header title={titles[page]} setSidebarOpen={setSidebarOpen}/>
      <main className="content">{page === "dashboard" ? <Dashboard openModal={setModal} goTo={setPage}/> : <Management type={page} openModal={setModal} notify={notify}/>}</main>
    </div>
    {modal && <Modal type={modal} onClose={()=>setModal(null)} onSave={save}/>}
    {toast && <div className="toast"><span><b>✓</b>{toast}</span><button onClick={()=>setToast("")}>×</button></div>}
  </div>;
}
