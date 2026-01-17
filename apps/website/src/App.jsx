import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import Signup from "./pages/Signup.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./styles/components/button.css";

const themeStorageKey = "faako-theme";

const getStoredTheme = () => {
  if (typeof window === "undefined") {
    return null;
  }
  const stored = window.localStorage.getItem(themeStorageKey);
  return stored === "light" || stored === "dark" ? stored : null;
};

export default function App() {
  const [theme, setTheme] = useState(getStoredTheme);
  const [systemTheme, setSystemTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    if (media.addEventListener) {
      media.addEventListener("change", handleChange);
    } else {
      media.addListener(handleChange);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", handleChange);
      } else {
        media.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    if (!theme) {
      document.documentElement.removeAttribute("data-theme");
      return;
    }

    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const currentTheme = theme || systemTheme;
  const nextThemeLabel = currentTheme === "dark" ? "Light mode" : "Dark mode";
  const headerLogo =
    currentTheme === "dark"
      ? "/assets/logos/logo-white.png"
      : "/assets/logos/logo-colour.png";
  const footerLogo =
    currentTheme === "dark"
      ? "/assets/logos/logo-white-long.png"
      : "/assets/logos/logo-colour-long.png";
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const handleThemeToggle = () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    }
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand-block">
          <Link className="logo" to="/">
            <img src={headerLogo} alt="Faako logo" loading="lazy" />
          </Link>
        </div>
        <nav className="site-nav">
          <a href="/#platform">Why Faako</a>
          <a href="/#workflow">Single Source</a>
          <a href="/#modules">Modules</a>
          <Link to="/pricing">Pricing</Link>
        </nav>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={handleThemeToggle}
            aria-pressed={currentTheme === "dark"}
            aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
          >
            {nextThemeLabel}
          </button>
          <Link to="/signup" className="button button-primary">
            Get started
          </Link>
        </div>
      </header>
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="footer-brand">
          <div className="logo footer-logo">
            <img src={footerLogo} alt="Faako logo" loading="lazy" />
          </div>
          <p>Faako: The Power of One.</p>
          <small>The operating system for your business.</small>
        </div>
        <div className="footer-links">
          <span className="footer-title">Product</span>
          <a href="/#platform">Platform</a>
          <a href="/#modules">Modules</a>
          <Link to="/pricing">Pricing</Link>
        </div>
        <div className="footer-links">
          <span className="footer-title">Company</span>
          <Link to="/signup">Request a demo</Link>
          <a href="mailto:hello@faako.nanaabaackah.com">Contact</a>
        </div>
        <div className="footer-links">
          <span className="footer-title">Based in</span>
          <span>Accra, Ghana</span>
          <span>Serving global teams</span>
        </div>
      </footer>
    </div>
  );
}
