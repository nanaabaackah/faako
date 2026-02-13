import { Link } from "react-router-dom";
import FooterLanguagePicker from "./FooterLanguagePicker.jsx";
import { moduleShowcaseItems } from "../data/modules.js";

export default function Footer({ footerLogo }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      
      <div className="footer-brand">
        <div className="logo footer-logo">
          <img src={footerLogo} alt="Faako logo" loading="lazy" />
        </div>
        <p>Faako: The Power of One.</p>
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
      <div className="footer-links footer-links--modules">
        <span className="footer-title">Modules</span>
        {moduleShowcaseItems.map((module) => (
          <Link key={module.id} to={`/modules/${module.id}`}>
            {module.title}
          </Link>
        ))}
        <Link className="footer-more-link" to="/solutions#modules">
          All Modules
        </Link>
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
      <div className="footer-links footer-language">
        <span className="footer-title">Language</span>
        <FooterLanguagePicker />
      </div>
      <div className="footer-bottom">
        <span>&copy; {year} Faako Systems & Consulting. Made to matter. Made by Nana</span>
      </div>
    </footer>
  );
}
