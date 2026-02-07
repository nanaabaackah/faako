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
  const [isScrolled, setIsScrolled] = useState(false);
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

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 6);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
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
    <header
      className={`site-header ${isMobileNavOpen ? "nav-open" : ""} ${
        isScrolled ? "is-scrolled" : ""
      }`}
    >
      <div className="brand-block">
        <Link className="logo" to="/">
          <img src={headerLogo} alt="Faako logo" loading="lazy" />
        </Link>
      </div>
      <nav className="site-nav" aria-label="Primary" id="primary-navigation">
        <div className="nav-group">
          <button type="button" className="nav-trigger" aria-haspopup="true">
            Services <span className="nav-caret">▾</span>
          </button>
          <div className="nav-dropdown">
            <div className="nav-column">
              <span className="nav-column-title">Business systems</span>
              <Link to="/case-studies/party-rental-erp" onClick={handleMobileNavClose}>
                ERP Systems
              </Link>
              <Link to="/case-studies/booking-portal" onClick={handleMobileNavClose}>
                Booking Portals
              </Link>
              <Link to="/case-studies/developer-command-center" onClick={handleMobileNavClose}>
                Operations Dashboards
              </Link>
            </div>
            <div className="nav-column">
              <span className="nav-column-title">Online presence</span>
              <Link to="/case-studies/portfolio-website" onClick={handleMobileNavClose}>
                Business Websites
              </Link>
              <Link to="/case-studies" onClick={handleMobileNavClose}>
                All Case Studies
              </Link>
            </div>
          </div>
        </div>

        <div className="nav-group">
          <button type="button" className="nav-trigger" aria-haspopup="true">
            Solutions <span className="nav-caret">▾</span>
          </button>
          <div className="nav-dropdown nav-dropdown-wide">
            <div className="nav-column">
              <span className="nav-column-title">Service Areas</span>
              <Link to="/solutions#finance" onClick={handleMobileNavClose}>
                Websites & Presence
              </Link>
              <Link to="/solutions#operations" onClick={handleMobileNavClose}>
                Operations Systems
              </Link>
              <Link to="/solutions#people" onClick={handleMobileNavClose}>
                Dashboards & Automation
              </Link>
              <Link to="/solutions" onClick={handleMobileNavClose}>
                Explore Services
              </Link>
            </div>
            <div className="nav-column">
              <span className="nav-column-title">Industries</span>
              <Link to="/solutions#industry-logistics" onClick={handleMobileNavClose}>
                Logistics & Distribution
              </Link>
              <Link to="/solutions#industry-retail" onClick={handleMobileNavClose}>
                Retail & Trading
              </Link>
              <Link to="/solutions#industry-rentals" onClick={handleMobileNavClose}>
                Rentals & Equipment
              </Link>
              <Link to="/solutions#industry-services" onClick={handleMobileNavClose}>
                Professional Services
              </Link>
            </div>
          </div>
        </div>

        <div className="nav-group">
          <button type="button" className="nav-trigger" aria-haspopup="true">
            Resources <span className="nav-caret">▾</span>
          </button>
          <div className="nav-dropdown">
            <div className="nav-column">
              <span className="nav-column-title">Company</span>
              <Link to="/about" onClick={handleMobileNavClose}>
                About
              </Link>
              <Link to="/case-studies" onClick={handleMobileNavClose}>
                Case Studies
              </Link>
              <Link to="/contact" onClick={handleMobileNavClose}>
                Contact
              </Link>
            </div>
            <div className="nav-column">
              <span className="nav-column-title">Support</span>
              <Link to="/configure" onClick={handleMobileNavClose}>
                Project Blueprint
              </Link>
              <Link to="/login" onClick={handleMobileNavClose}>
                Sign In
              </Link>
              <Link to="/forgot-password" onClick={handleMobileNavClose}>
                Forgot Password
              </Link>
            </div>
          </div>
        </div>

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
                Project blueprint
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
