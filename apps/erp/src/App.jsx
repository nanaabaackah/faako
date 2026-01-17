import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Modules from "./pages/Modules.jsx";
import Settings from "./pages/Settings.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./styles/components/panel.css";

export default function App() {
  return (
    <div className="erp-shell">
      <aside className="erp-sidebar">
        <div className="brand">Faako ERP</div>
        <nav className="erp-nav">
          <Link to="/">Dashboard</Link>
          <Link to="/modules">Modules</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </aside>
      <div className="erp-main">
        <header className="erp-topbar">
          <span>Workspace overview</span>
        </header>
        <main className="erp-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
