import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faBoxesStacked,
  faUserTie,
  faShield,
  faRoute,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../components/PrimaryButton.jsx";

export default function Solutions() {
  return (
    <section className="page solutions">
      <div className="pricing-hero reveal" style={{ "--delay": "0ms" }}>
        <p className="eyebrow">Solutions</p>
        <h1>Every workflow, connected to one source of truth.</h1>
        <p className="lead">
          Faako aligns Finance, Operations, and Talent in a single ERP backbone
          so teams can plan, execute, and scale without silos.
        </p>
        <div className="cta-actions">
          <PrimaryButton to="/contact">Book a Consultation</PrimaryButton>
          <Link className="button button-ghost" to="/pricing">
            View Pricing
          </Link>
        </div>
      </div>

      <section className="page solutions-section">
        <div className="section-header reveal">
          <p className="eyebrow">Core Pillars</p>
          <h2>Unified execution across the business.</h2>
          <p className="lead">
            These solution pillars keep every department synced to the same
            metrics and timelines.
          </p>
        </div>
        <div className="solutions-container">
          <article className="solution-pillar reveal">
            <div className="pillar-head">
              <div className="pillar-icon">01</div>
              <h3>Finance Intelligence</h3>
            </div>
            <ul className="solution-list">
              <li>
                <strong>Cash Flow Clarity</strong>
                Track invoices, expenses, and balances in real time.
              </li>
              <li>
                <strong>Executive Reporting</strong>
                GHS dashboards with revenue and margin visibility.
              </li>
              <li>
                <strong>Audit Trails</strong>
                Built-in compliance logs and approval history.
              </li>
            </ul>
          </article>
          <article className="solution-pillar reveal" style={{ "--delay": "120ms" }}>
            <div className="pillar-head">
              <div className="pillar-icon">02</div>
              <h3>Operational Excellence</h3>
            </div>
            <ul className="solution-list">
              <li>
                <strong>Inventory Control</strong>
                Warehouse movements, procurement, and fulfillment.
              </li>
              <li>
                <strong>Workflow Automation</strong>
                Approvals, routing, and service delivery timelines.
              </li>
              <li>
                <strong>Logistics Visibility</strong>
                Track routes, vendors, and delivery SLAs.
              </li>
            </ul>
          </article>
          <article className="solution-pillar reveal" style={{ "--delay": "240ms" }}>
            <div className="pillar-head">
              <div className="pillar-icon">03</div>
              <h3>Talent Alignment</h3>
            </div>
            <ul className="solution-list">
              <li>
                <strong>People Ops</strong>
                HR records, payroll, and time tracking in one view.
              </li>
              <li>
                <strong>Team Performance</strong>
                Role-based dashboards and coaching insights.
              </li>
              <li>
                <strong>Secure Access</strong>
                Permissions and governance for every team.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-header reveal">
          <p className="eyebrow">Module Highlights</p>
          <h2>Build the ERP stack your teams actually need.</h2>
          <p className="lead">
            Mix and match modules to match your industry, then scale with
            add-ons as you grow.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card reveal">
            <FontAwesomeIcon icon={faHandshake} />
            <h3>CRM & Sales</h3>
            <p className="muted">
              Manage pipelines, renewals, and customer success follow-ups.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "120ms" }}>
            <FontAwesomeIcon icon={faBoxesStacked} />
            <h3>Inventory</h3>
            <p className="muted">
              Centralize stock movements, reorder points, and supplier data.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "240ms" }}>
            <FontAwesomeIcon icon={faChartLine} />
            <h3>Analytics</h3>
            <p className="muted">
              Executive dashboards and forecasting tailored to Ghanaian markets.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "360ms" }}>
            <FontAwesomeIcon icon={faRoute} />
            <h3>Delivery</h3>
            <p className="muted">
              Route planning, dispatch, and fulfillment confirmations.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "480ms" }}>
            <FontAwesomeIcon icon={faUserTie} />
            <h3>HR & Payroll</h3>
            <p className="muted">
              Team records, payroll cycles, and performance tracking.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "600ms" }}>
            <FontAwesomeIcon icon={faShield} />
            <h3>Compliance</h3>
            <p className="muted">
              Audit-ready workflows, approvals, and security policies.
            </p>
          </article>
        </div>
      </section>

      <section className="page cta cta-compact reveal">
        <div className="section-header">
          <p className="eyebrow">Next Step</p>
          <h2>Map your modules and start configuring.</h2>
          <p className="lead">
            We will translate your priorities into a rollout plan and pricing
            mix for your team.
          </p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/configure">Configure your ERP</PrimaryButton>
          <Link className="button button-ghost" to="/case-studies">
            View Case Studies
          </Link>
        </div>
      </section>
    </section>
  );
}
