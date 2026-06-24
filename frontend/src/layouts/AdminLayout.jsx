import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function AdminLayout({ children, page, title, sidebarOpen, setSidebarOpen, setPage }) {
  return (
    <div className="app-shell">
      <Sidebar page={page} setPage={setPage} open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="app-main">
        <Header title={title} setSidebarOpen={setSidebarOpen} />
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
