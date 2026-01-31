import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton.jsx";
import TrustedBy from "../components/TrustedBy.jsx";

export default function About() {
  return (
    <section className="page about">
      <div className="pricing-hero reveal" style={{ "--delay": "0ms" }}>
        <p className="eyebrow">About Faako</p>
        <h1>We build ERP systems that feel local and scale global.</h1>
        <p className="lead">
          Faako was founded to help African enterprises move faster with a
          unified data backbone. We blend ERP software with advisory expertise
          so every rollout delivers real operational change.
        </p>
        <div className="cta-actions">
          <PrimaryButton to="/contact">Meet the team</PrimaryButton>
          <Link className="button button-ghost" to="/case-studies">
            View case studies
          </Link>
        </div>
      </div>

      <section className="section">
        <div className="section-header reveal">
          <p className="eyebrow">Our Mission</p>
          <h2>Single Source of Truth for every African business.</h2>
          <p className="lead">
            We help teams simplify decision-making, automate operations, and
            retain institutional knowledge inside one connected system.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card reveal">
            <h3>Local-first delivery</h3>
            <p className="muted">
              We design for West African business realities, from currency to
              compliance.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "120ms" }}>
            <h3>Built for operators</h3>
            <p className="muted">
              From finance leads to warehouse teams, everyone gets a clear,
              usable workflow.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "240ms" }}>
            <h3>Advisory + software</h3>
            <p className="muted">
              We stay with you after launch to keep systems aligned and teams
              trained.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-header reveal">
          <p className="eyebrow">What We Value</p>
          <h2>Operations that are honest, transparent, and measurable.</h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card reveal">
            <h3>Accountability</h3>
            <p className="muted">
              Everyone sees the same numbers, timelines, and ownership.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "120ms" }}>
            <h3>Resilience</h3>
            <p className="muted">
              We build stacks that keep running through growth and change.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "240ms" }}>
            <h3>Clarity</h3>
            <p className="muted">
              Clear workflows replace ambiguity and reduce operating risk.
            </p>
          </article>
        </div>
      </section>

      <TrustedBy
        className="page trust-strip"
        eyebrow="Our Partners"
        title="Trusted by operators across Africa"
        lead="From growth-stage teams to large enterprises, Faako powers daily execution."
        logos={[
          "Reebs",
          "Atlas Rentals",
          "Northbridge",
          "Summit Events",
          "Clearline Logistics",
          "VentureWorks",
        ]}
      />
    </section>
  );
}
