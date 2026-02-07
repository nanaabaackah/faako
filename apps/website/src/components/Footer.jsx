import { Link } from "react-router-dom";

export default function Footer({ footerLogo }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <div className="logo footer-logo">
          <img src={footerLogo} alt="Faako logo" loading="lazy" />
        </div>
        <p>Faako: Systems that fit.</p>
        <small>Accra, Ghana · Global Availability</small>
      </div>
      <div className="footer-links">
        <span className="footer-title">Services</span>
        <Link to="/solutions">Solutions</Link>
        <Link to="/configure">Project Blueprint</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div className="footer-links">
        <span className="footer-title">Use Cases</span>
        <Link to="/case-studies/party-rental-erp">ERP Systems</Link>
        <Link to="/case-studies/booking-portal">Booking Portal</Link>
        <Link to="/case-studies/developer-command-center">Operations Dashboard</Link>
        <Link to="/case-studies/portfolio-website">Business Website</Link>
        <Link to="/case-studies">All Case Studies</Link>
      </div>
      <div className="footer-links">
        <span className="footer-title">Resources</span>
        <Link to="/about">About</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Get Started</Link>
      </div>
      <div className="footer-links">
        <span className="footer-title">Company</span>
        <Link to="/about">About</Link>
        <Link to="/contact">Support</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </div>
      <div className="footer-bottom">
        <span>&copy; {year} Faako Systems & Consulting. Made to matter.</span>
      </div>
    </footer>
  );
}
