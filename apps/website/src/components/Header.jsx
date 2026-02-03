import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faMoon,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Header({
  headerLogo,
  currentTheme,
  nextThemeLabel,
  onToggleTheme,
}) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsUserMenuOpen(false);
        setIsMobileNavOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setIsMobileNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  const handleUserMenuClose = () => {
    setIsUserMenuOpen(false);
  };

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  const handleMobileNavClose = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <header className={`site-header ${isMobileNavOpen ? "nav-open" : ""}`}>
      <div className="brand-block">
        <Link className="logo" to="/">
          <img src={headerLogo} alt="Faako logo" loading="lazy" />
        </Link>
      </div>
      <nav className="site-nav" aria-label="Primary" id="primary-navigation">
        <Link to="/about" onClick={handleMobileNavClose}>
          About
        </Link>
        <Link to="/solutions" onClick={handleMobileNavClose}>
          Solutions
        </Link>
        <Link to="/case-studies" onClick={handleMobileNavClose}>
          Case Studies
        </Link>
        <Link to="/pricing" onClick={handleMobileNavClose}>
          Pricing
        </Link>
      </nav>
      <div className="nav-actions">
        <button
          type="button"
          className="button button-ghost nav-toggle"
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={isMobileNavOpen}
          onClick={handleMobileNavToggle}
        >
          <FontAwesomeIcon icon={isMobileNavOpen ? faXmark : faBars} />
        </button>
        <button
          className="theme-toggle icon-only"
          type="button"
          onClick={onToggleTheme}
          aria-label={nextThemeLabel}
        >
          <FontAwesomeIcon
            icon={currentTheme === "dark" ? faSun : faMoon}
          />
        </button>
        <div className="user-menu" ref={userMenuRef}>
          <button
            type="button"
            className="button button-ghost user-button"
            aria-label="Open user menu"
            aria-haspopup="menu"
            aria-expanded={isUserMenuOpen}
            aria-controls="user-menu-panel"
            onClick={handleUserMenuToggle}
          >
            <FontAwesomeIcon icon={faCircleUser} />
          </button>
          {isUserMenuOpen ? (
            <div
              className="user-menu-panel"
              role="menu"
              id="user-menu-panel"
              aria-label="User menu"
            >
              <Link
                to="/dashboard"
                role="menuitem"
                className="user-menu-item"
                onClick={handleUserMenuClose}
              >
                Dashboard
              </Link>
              <Link
                to="/configure"
                role="menuitem"
                className="user-menu-item"
                onClick={handleUserMenuClose}
              >
                Configure modules
              </Link>
              <Link
                to="/contact"
                role="menuitem"
                className="user-menu-item"
                onClick={handleUserMenuClose}
              >
                Account support
              </Link>
            </div>
          ) : null}
        </div>
        <Link to="/contact" className="button button-primary nav-cta">
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}
