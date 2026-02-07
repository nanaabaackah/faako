import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <section className="page legal">
      <div className="pricing-hero reveal" style={{ "--delay": "0ms" }}>
        <p className="eyebrow">Terms of Service</p>
        <h1>Clear expectations for using Faako.</h1>
        <p className="lead">
          These terms outline your rights and responsibilities when using the
          Faako platform.
        </p>
      </div>

      <div className="legal-card card reveal">
        <h2>Usage</h2>
        <p>
          By accessing Faako, you agree to use the platform lawfully and keep
          your account information secure.
        </p>

        <h3>Engagements</h3>
        <ul>
          <li>Project scopes are confirmed before kickoff.</li>
          <li>Support retainers are billed on the cadence selected in your agreement.</li>
        </ul>

        <h3>Service delivery</h3>
        <ul>
          <li>Implementation timelines depend on data quality and scope.</li>
          <li>Support is delivered based on your selected engagement.</li>
        </ul>

        <h3>Liability</h3>
        <ul>
          <li>Faako provides the platform and services as-is with continuous improvements.</li>
          <li>We are not liable for indirect losses related to third-party tools.</li>
        </ul>

        <p className="muted">
          Questions? Reach us at{" "}
          <a href="mailto:legal@faako.nanaabaackah.com">
            legal@faako.nanaabaackah.com
          </a>
          .
        </p>

        <Link to="/privacy" className="text-link">
          View Privacy Policy
        </Link>
      </div>
    </section>
  );
}
