import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <section className="page legal">
      <div className="pricing-hero reveal" style={{ "--delay": "0ms" }}>
        <p className="eyebrow">Privacy Policy</p>
        <h1>How we handle your data at Faako.</h1>
        <p className="lead">
          We only collect what we need to deliver your ERP workspace and keep
          it secure.
        </p>
      </div>

      <div className="legal-card card reveal">
        <h2>Summary</h2>
        <p>
          We collect business contact information, usage data, and configuration
          details to provide the Faako platform. We never sell your data.
        </p>

        <h3>What we collect</h3>
        <ul>
          <li>Business and contact details submitted in forms.</li>
          <li>Configuration choices for modules and onboarding.</li>
          <li>Usage analytics to improve performance and support.</li>
        </ul>

        <h3>How we use data</h3>
        <ul>
          <li>Provision and maintain your ERP workspace.</li>
          <li>Provide onboarding, support, and advisory services.</li>
          <li>Meet compliance obligations and prevent fraud.</li>
        </ul>

        <h3>Your controls</h3>
        <ul>
          <li>Request access, updates, or deletion of your data.</li>
          <li>Opt out of marketing communications anytime.</li>
        </ul>

        <p className="muted">
          For questions, contact{" "}
          <a href="mailto:privacy@faako.nanaabaackah.com">
            privacy@faako.nanaabaackah.com
          </a>
          .
        </p>

        <Link to="/terms" className="text-link">
          View Terms of Service
        </Link>
      </div>
    </section>
  );
}
