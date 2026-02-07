import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import ModuleConfig from "./pages/ModuleConfig.jsx";
import Signup from "./pages/Signup.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Solutions from "./pages/Solutions.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import CaseStudyDetail from "./pages/CaseStudyDetail.jsx";
import About from "./pages/About.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
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
  const [showScrollTop, setShowScrollTop] = useState(false);
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

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll("[data-scroll]");

    if (prefersReducedMotion) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    nodes.forEach((node) => {
      node.classList.remove("is-visible");
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = document.querySelectorAll(".page");

    if (prefersReducedMotion) {
      sections.forEach((section) => section.style.setProperty("--section-progress", "1"));
      return undefined;
    }

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.style.setProperty(
            "--section-progress",
            entry.intersectionRatio.toFixed(3)
          );
        });
      },
      { threshold: thresholds }
    );

    sections.forEach((section) => {
      section.style.setProperty("--section-progress", "1");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleThemeToggle = () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    }
  };

  const handleScrollTop = () => {
    if (typeof window === "undefined") {
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header
        headerLogo={headerLogo}
        currentTheme={currentTheme}
        nextThemeLabel={nextThemeLabel}
        onToggleTheme={handleThemeToggle}
      />
      <main className="site-main" id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/configure" element={<ModuleConfig />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showScrollTop ? (
        <button
          className="scroll-top"
          type="button"
          onClick={handleScrollTop}
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      ) : null}
      <Footer footerLogo={footerLogo} />
    </div>
  );
}
