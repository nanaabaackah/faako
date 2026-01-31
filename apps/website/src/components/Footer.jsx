import { Link } from "react-router-dom";

export default function Footer({ footerLogo }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <div className="logo footer-logo">
          <img src={footerLogo} alt="Faako logo" loading="lazy" />
        </div>
        <p>Faako: The Power of One.</p>
        <small>© 2026 Faako ERP Systems.</small>
      </div>
      <div className="footer-links">
        <span className="footer-title">Services</span>
        <Link to="/solutions">Solutions</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/contact">Support</Link>
      </div>
      <div className="footer-links">
        <span className="footer-title">Company</span>
        <Link to="/about">About</Link>
        <Link to="/login">Client Login</Link>
        <Link to="/contact">Book a Demo</Link>
      </div>
      <div className="footer-links">
        <span className="footer-title">Legal</span>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </div>
      <div className="footer-links">
        <span className="footer-title">Location</span>
        <span>Accra, Ghana</span>
        <span>Global Availability</span>
      </div>
    </footer>
  );
}
