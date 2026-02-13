import { Link } from "react-router-dom";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="page not-found-page">
      <div className="not-found-shell reveal" style={{ "--delay": "0ms" }}>
        <p className="not-found-code">404</p>
        <h1>That page could not be found.</h1>
        <p className="lead">
          The link may be outdated or the page may have moved. Use one of the
          actions below to continue.
        </p>

        <div className="not-found-actions">
          <Link className="button button-primary" to="/">
            Go to home
          </Link>
          <Link className="button button-ghost" to="/contact">
            Contact support
          </Link>
        </div>

        <div className="not-found-links card">
          <h2>Popular pages</h2>
          <nav className="not-found-grid">
            {quickLinks.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
