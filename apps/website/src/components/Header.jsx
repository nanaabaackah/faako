import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function Header({
  headerLogo,
  currentTheme,
  nextThemeLabel,
  onToggleTheme,
}) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
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
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  const handleUserMenuClose = () => {
    setIsUserMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="brand-block">
        <Link className="logo" to="/">
          <img src={headerLogo} alt="Faako logo" loading="lazy" />
        </Link>
      </div>
      <nav className="site-nav" aria-label="Primary">
        <Link to="/solutions">Solutions</Link>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="nav-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
        >
          {nextThemeLabel}
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
        <Link to="/contact" className="button button-primary">
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}
