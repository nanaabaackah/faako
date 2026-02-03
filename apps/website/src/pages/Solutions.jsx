import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faBoxesStacked,
  faUserTie,
  faShield,
  faRoute,
  faHandshake,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../components/PrimaryButton.jsx";

export default function Solutions() {
  return (
    <section className="page solutions page-stack">
      <section className="solutions-hero split">
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
        <figure className="stats-figure solutions-hero-figure reveal" style={{ "--delay": "120ms" }}>
          <div className="solutions-hero-orbits" aria-hidden="true">
            <span className="solutions-hero-orbit orbit-one" />
            <span className="solutions-hero-orbit orbit-two" />
            <span className="solutions-hero-dot dot-one" />
            <span className="solutions-hero-dot dot-two" />
            <span className="solutions-hero-chip chip-one">CRM</span>
            <span className="solutions-hero-chip chip-two">Inventory</span>
            <span className="solutions-hero-chip chip-three">Finance</span>
          </div>
          <img
            className="solutions-hero-art"
            src="/imgs/elements/18.svg"
            alt="Faako ERP dashboard preview"
          />
          <figcaption>Unified dashboards for Finance, Ops, and Talent.</figcaption>
        </figure>
      </section>

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

      <section className="section industry-section">
        <div className="section-header reveal">
          <p className="eyebrow">Who It’s For</p>
          <h2>Built for teams that run on tight operations.</h2>
          <p className="lead">
            Faako is designed for Ghanaian operators who need clarity across
            inventory, finance, and service delivery.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card reveal industry-card">
            <FontAwesomeIcon icon={faRoute} />
            <h3>Logistics & Distribution</h3>
            <p className="muted">
              Route planning, dispatch updates, and vendor SLAs in one view.
            </p>
            <ul className="solution-list">
              <li>
                <strong>Dispatch control</strong>
                Track delivery stages and proof of fulfillment.
              </li>
              <li>
                <strong>Vendor SLAs</strong>
                Monitor partner performance and turnaround time.
              </li>
            </ul>
          </article>
          <article className="feature-card reveal industry-card" style={{ "--delay": "120ms" }}>
            <FontAwesomeIcon icon={faCartShopping} />
            <h3>Retail & Trade</h3>
            <p className="muted">
              Keep branches stocked, prices aligned, and sell-through visible.
            </p>
            <ul className="solution-list">
              <li>
                <strong>Reorder triggers</strong>
                Automate replenishment before stockouts hit.
              </li>
              <li>
                <strong>Branch visibility</strong>
                Compare performance across locations.
              </li>
            </ul>
          </article>
          <article className="feature-card reveal industry-card" style={{ "--delay": "240ms" }}>
            <FontAwesomeIcon icon={faBoxesStacked} />
            <h3>Rentals & Asset Teams</h3>
            <p className="muted">
              Manage bookings, utilization, and maintenance cycles together.
            </p>
            <ul className="solution-list">
              <li>
                <strong>Asset utilization</strong>
                See what is idle, reserved, or in transit.
              </li>
              <li>
                <strong>Service schedules</strong>
                Prevent downtime with automated maintenance.
              </li>
            </ul>
          </article>
          <article className="feature-card reveal industry-card" style={{ "--delay": "360ms" }}>
            <FontAwesomeIcon icon={faUserTie} />
            <h3>Professional Services</h3>
            <p className="muted">
              Connect CRM, billing, and time tracking to client outcomes.
            </p>
            <ul className="solution-list">
              <li>
                <strong>Project profitability</strong>
                Understand margin by client and team.
              </li>
              <li>
                <strong>Billing cadence</strong>
                Standardize invoicing and approvals.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="page split timeline-section">
        <div className="workflow-copy reveal">
          <p className="eyebrow">Implementation Timeline</p>
          <h2>From audit to go-live in weeks.</h2>
          <p className="lead">
            We align stakeholders, configure your modules, and train teams
            before launch—so adoption sticks from day one.
          </p>
        </div>
        <div className="workflow-steps">
          <div className="step reveal" style={{ "--delay": "80ms" }}>
            <span>01</span>
            <div>
              <h3>Discovery Audit</h3>
              <p className="muted">Workflows, data, and approvals mapped.</p>
            </div>
          </div>
          <div className="step reveal" style={{ "--delay": "160ms" }}>
            <span>02</span>
            <div>
              <h3>Configuration Sprint</h3>
              <p className="muted">Modules, integrations, and dashboards tailored.</p>
            </div>
          </div>
          <div className="step reveal" style={{ "--delay": "240ms" }}>
            <span>03</span>
            <div>
              <h3>Team Enablement</h3>
              <p className="muted">Training, access roles, and process playbooks.</p>
            </div>
          </div>
          <div className="step reveal" style={{ "--delay": "320ms" }}>
            <span>04</span>
            <div>
              <h3>Go-live + Optimization</h3>
              <p className="muted">Phased rollout with KPI reviews and tuning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page cta cta-compact reveal">
        <div className="section-header">
          <p className="eyebrow">Build Your Backbone</p>
          <h2>Ready to map your modules?</h2>
          <p className="lead">
            We will translate your goals into a rollout plan that your teams
            can adopt with confidence.
          </p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/configure">Configure your ERP</PrimaryButton>
          <Link className="button button-ghost" to="/contact">
            Book a consultation
          </Link>
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

      <section className="page compliance-section">
        <div className="section-header reveal">
          <p className="eyebrow">Security & Compliance</p>
          <h2>Controls that keep every team accountable.</h2>
          <p className="lead">
            Enterprise-grade permissions, audit trails, and backups keep your
            data secure and your operations compliant.
          </p>
        </div>
        <div className="compliance-grid">
          <article className="compliance-card reveal">
            <h3>Role-based access</h3>
            <p>Define who can view, approve, or edit each workflow.</p>
          </article>
          <article className="compliance-card reveal" style={{ "--delay": "120ms" }}>
            <h3>Audit logs</h3>
            <p>Track every change with timestamps and user history.</p>
          </article>
          <article className="compliance-card reveal" style={{ "--delay": "240ms" }}>
            <h3>Encrypted backups</h3>
            <p>Daily snapshots with secure storage and recovery protocols.</p>
          </article>
          <article className="compliance-card reveal" style={{ "--delay": "360ms" }}>
            <h3>Data residency</h3>
            <p>Clear data governance aligned with regional requirements.</p>
          </article>
        </div>
      </section>

      <section className="section integrations-section">
        <div className="section-header reveal">
          <p className="eyebrow">Integrations</p>
          <h2>Connect the tools you already run.</h2>
          <p className="lead">
            Sync payments, communications, and productivity apps to keep every
            team aligned.
          </p>
        </div>
        <div className="ribbon reveal">
          <div>
            <h3>Popular connections</h3>
            <p className="muted">Payments, messaging, and productivity in one flow.</p>
          </div>
          <div className="ribbon-tags">
            <span>MTN MoMo</span>
            <span>Vodafone Cash</span>
            <span>Hubtel</span>
            <span>Paystack</span>
            <span>Flutterwave</span>
            <span>WhatsApp Business</span>
            <span>Google Workspace</span>
            <span>Microsoft 365</span>
          </div>
        </div>
      </section>

      <section className="section outcomes-section">
        <div className="section-header reveal">
          <p className="eyebrow">Outcomes</p>
          <h2>What teams see after go-live.</h2>
          <p className="lead">
            Clear data, faster decisions, and fewer operational surprises.
          </p>
        </div>
        <div className="stats-grid">
          <article className="stats-card reveal">
            <span>GHS 120k</span>
            <p>Working capital unlocked through faster collections.</p>
          </article>
          <article className="stats-card reveal" style={{ "--delay": "120ms" }}>
            <span>-30%</span>
            <p>Stockouts after inventory rules and reorder alerts.</p>
          </article>
          <article className="stats-card reveal" style={{ "--delay": "240ms" }}>
            <span>2.6x</span>
            <p>Faster month-end closes with unified finance data.</p>
          </article>
          <article className="stats-card reveal" style={{ "--delay": "360ms" }}>
            <span>95%</span>
            <p>On-time delivery rate after dispatch optimization.</p>
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
