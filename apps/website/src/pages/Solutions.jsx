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
import WhatsApp from "../components/WhatsApp.jsx";

export default function Solutions() {
  return (
    <section className="page solutions page-stack">

      {/* ── Hero ── */}
      <section className="solutions-hero split">
        <div className="pricing-hero reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">What Faako Does</p>
          <h1>Stop running your business in pieces. Connect everything.</h1>
          <p className="lead">
            Finance, Ops, People — all talking to each other, all in one place.
            No more chasing info between WhatsApp groups and Excel sheets. Just
            one dashboard that actually tells you what's going on.
          </p>
          <div className="cta-actions">
            <PrimaryButton to="/contact">Let's Build Yours</PrimaryButton>
            <Link className="button button-ghost" to="/pricing">
              See the Pricing
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
            src="/imgs/elements/17.svg"
            alt="Faako ERP dashboard preview"
          />
          <figcaption>Everything, in one place. Too clear.</figcaption>
        </figure>
      </section>

      {/* ── Core Pillars ── */}
      <section className="page solutions-section">
        <div className="section-header reveal">
          <p className="eyebrow">The Three Pillars</p>
          <h2>The three things every business needs running smoothly.</h2>
          <p className="lead">
            Money. Operations. People. When these three are synced up and talking
            to each other, that's when the magic happens.
          </p>
        </div>
        <div className="solutions-container">

          <article className="solution-pillar reveal">
            <div className="pillar-head">
              <div className="pillar-icon">01</div>
              <h3>Know Your Money</h3>
            </div>
            <ul className="solution-list">
              <li>
                <strong>Cash Flow — Too Clear</strong>
                See every invoice, every expense, every cedi moving in and out.
                In real time. No guessing.
              </li>
              <li>
                <strong>Dashboards That Make Sense</strong>
                Revenue, margins, GRA-ready reports — all in one screen. Your
                Monday morning meeting just got a lot shorter.
              </li>
              <li>
                <strong>Paper Trail on Everything</strong>
                Every approval, every change, logged automatically. If GRA comes
                knocking, you're ready.
              </li>
            </ul>
          </article>

          <article className="solution-pillar reveal" style={{ "--delay": "120ms" }}>
            <div className="pillar-head">
              <div className="pillar-icon">02</div>
              <h3>Run Ops Like a Machine</h3>
            </div>
            <ul className="solution-list">
              <li>
                <strong>Never Lose Stock Again</strong>
                Warehouse in, warehouse out, delivery confirmed. No more "it
                finish" surprises. Every item tracked from shelf to door.
              </li>
              <li>
                <strong>Approvals That Actually Move</strong>
                Set up routing and approvals that work while you sleep. Orders go
                out. Payments get signed off. No bottlenecks.
              </li>
              <li>
                <strong>See Your Deliveries Live</strong>
                Driver left? Package en route? Delivered? You'll know before the
                customer even asks.
              </li>
            </ul>
          </article>

          <article className="solution-pillar reveal" style={{ "--delay": "240ms" }}>
            <div className="pillar-head">
              <div className="pillar-icon">03</div>
              <h3>Keep Your Team Sharp</h3>
            </div>
            <ul className="solution-list">
              <li>
                <strong>One Place for Your People</strong>
                HR records, payroll, timesheets — done. No more juggling files.
                Everyone's info, clean and in one spot.
              </li>
              <li>
                <strong>See Who's Winning</strong>
                Role-based dashboards so every person knows their targets and how
                they're doing. No surprises at review time.
              </li>
              <li>
                <strong>Lock It Down</strong>
                Permissions set up so only the right people see the right stuff.
                Tight, clean, no drama.
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* ── Industry Verticals ── */}
      <section className="section industry-section">
        <div className="section-header reveal">
          <p className="eyebrow">Who's Already Using It</p>
          <h2>Built for the businesses that keep Ghana moving.</h2>
          <p className="lead">
            From the trucks on the road to the shops on the high street — Faako
            is already running operations like yours. Here's how.
          </p>
        </div>
        <div className="feature-grid">

          <article className="feature-card reveal industry-card">
            <FontAwesomeIcon icon={faRoute} />
            <h3>Logistics & Distribution</h3>
            <p className="muted">
              The guys moving goods from A to B across Ghana. Routes, dispatches,
              deliveries — all tracked, all visible, zero wahala.
            </p>
            <ul className="solution-list">
              <li>
                <strong>Dispatch sorted</strong>
                Know exactly where every delivery is at, every stage of the way.
              </li>
              <li>
                <strong>Hold suppliers to account</strong>
                Track how fast your partners deliver. No more guessing.
              </li>
            </ul>
          </article>

          <article className="feature-card reveal industry-card" style={{ "--delay": "120ms" }}>
            <FontAwesomeIcon icon={faCartShopping} />
            <h3>Retail & Trading</h3>
            <p className="muted">
              Whether it's one shop or five branches — stock stays full, prices
              stay right, and you always know what's selling.
            </p>
            <ul className="solution-list">
              <li>
                <strong>Restock before it's too late</strong>
                Automatic alerts when stock is running low. No more "it finish"
                on a busy day.
              </li>
              <li>
                <strong>Compare your branches</strong>
                See which location is crushing it — and which one needs a nudge.
              </li>
            </ul>
          </article>

          <article className="feature-card reveal industry-card" style={{ "--delay": "240ms" }}>
            <FontAwesomeIcon icon={faBoxesStacked} />
            <h3>Rentals & Equipment</h3>
            <p className="muted">
              Tents, chairs, generators, machinery — if you rent it out, Faako
              tracks it. Bookings, maintenance, the lot.
            </p>
            <ul className="solution-list">
              <li>
                <strong>Know what's where</strong>
                Idle? Booked? On site? In the workshop? One screen tells you everything.
              </li>
              <li>
                <strong>Maintenance on autopilot</strong>
                Get reminded before something breaks. Not after.
              </li>
            </ul>
          </article>

          <article className="feature-card reveal industry-card" style={{ "--delay": "360ms" }}>
            <FontAwesomeIcon icon={faUserTie} />
            <h3>Professional Services</h3>
            <p className="muted">
              Consultants, agencies, project teams — connect what you're selling
              to what you're actually delivering and billing.
            </p>
            <ul className="solution-list">
              <li>
                <strong>Know your margins</strong>
                See exactly how much each client and project is actually making you.
              </li>
              <li>
                <strong>Invoice on time, every time</strong>
                Set a rhythm. Invoices go out clean, approvals happen fast.
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* ── Implementation Timeline ── */}
      <section className="page split timeline-section">
        <div className="workflow-copy reveal">
          <p className="eyebrow">Getting Started</p>
          <h2>From first chat to go-live — in weeks, not months.</h2>
          <p className="lead">
            We do the heavy lifting. You keep running your business. By the time
            we hit go-live, your team is already comfortable. Too clear.
          </p>
        </div>
        <div className="workflow-steps">
          <div className="step reveal" style={{ "--delay": "80ms" }}>
            <span>01</span>
            <div>
              <h3>We Learn Your Business</h3>
              <p className="muted">
                We come to you. Map the workflows, understand the pain points,
                and figure out exactly what needs to change.
              </p>
            </div>
          </div>
          <div className="step reveal" style={{ "--delay": "160ms" }}>
            <span>02</span>
            <div>
              <h3>Build It Around You</h3>
              <p className="muted">
                Modules, integrations, dashboards — all set up to match how YOUR
                team actually works. WhatsApp, Mobile Money, the lot.
              </p>
            </div>
          </div>
          <div className="step reveal" style={{ "--delay": "240ms" }}>
            <span>03</span>
            <div>
              <h3>Train Your People, Live</h3>
              <p className="muted">
                Real sessions. Real transactions. Not slides — hands on the
                keyboard, running the stuff they'll do on day one.
              </p>
            </div>
          </div>
          <div className="step reveal" style={{ "--delay": "320ms" }}>
            <span>04</span>
            <div>
              <h3>Go Live & Keep Optimising</h3>
              <p className="muted">
                We roll it out in phases so nothing breaks. Then we keep tuning
                it — weekly check-ins at first, then monthly, forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA ── */}
      <section className="page cta cta-compact reveal">
        <div className="section-header">
          <p className="eyebrow">Ready?</p>
          <h2>Let's figure out which modules your business actually needs.</h2>
          <p className="lead">
            Not a sales call. A real conversation — we'll map it out together and
            show you exactly what it looks like for YOUR operation.
          </p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/configure">Configure Your ERP</PrimaryButton>
          <Link className="button button-ghost" to="/contact">
            Talk to the Team
          </Link>
        </div>
      </section>

      {/* ── Module Highlights ── */}
      <section className="section">
        <div className="section-header reveal">
          <p className="eyebrow">The Modules</p>
          <h2>Pick what you need. Add more as you grow.</h2>
          <p className="lead">
            Start small, scale big. Every module snaps in cleanly — no reinstalls,
            no headaches, no wahala.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card reveal">
            <FontAwesomeIcon icon={faHandshake} />
            <h3>CRM & Sales</h3>
            <p className="muted">
              Track your leads, close your deals, and never lose a client again.
              Pipelines, follow-ups, renewals — all in one place.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "120ms" }}>
            <FontAwesomeIcon icon={faBoxesStacked} />
            <h3>Inventory</h3>
            <p className="muted">
              Every item, every movement, every location. Stock levels that are
              actually accurate — not a guess from last Tuesday.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "240ms" }}>
            <FontAwesomeIcon icon={faChartLine} />
            <h3>Analytics</h3>
            <p className="muted">
              Dashboards that show you what's actually happening — not what you
              hope is happening. Built for the Ghanaian market.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "360ms" }}>
            <FontAwesomeIcon icon={faRoute} />
            <h3>Delivery</h3>
            <p className="muted">
              Routes planned. Dispatches tracked. Deliveries confirmed. Your
              drivers, your customers, your peace of mind — sorted.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "480ms" }}>
            <FontAwesomeIcon icon={faUserTie} />
            <h3>HR & Payroll</h3>
            <p className="muted">
              Payroll that runs on time. Records that don't get lost. A team
              section that actually feels organised. Finally.
            </p>
          </article>
          <article className="feature-card reveal" style={{ "--delay": "600ms" }}>
            <FontAwesomeIcon icon={faShield} />
            <h3>Compliance</h3>
            <p className="muted">
              GRA-ready. Audit-ready. Every approval logged, every workflow
              locked down. Sleep easy when the auditors come.
            </p>
          </article>
        </div>
      </section>

      {/* ── Security & Compliance ── */}
      <section className="page compliance-section">
        <div className="section-header reveal">
          <p className="eyebrow">Lock It Tight</p>
          <h2>Your data is sacred. We treat it that way.</h2>
          <p className="lead">
            Bank-level security, automatic backups, and permissions so tight that
            only the right person sees the right thing. No exceptions.
          </p>
        </div>
        <div className="compliance-grid">
          <article className="compliance-card reveal">
            <h3>Who Sees What</h3>
            <p>Set exactly who can view, approve, or change anything in the system. Clean, simple, done.</p>
          </article>
          <article className="compliance-card reveal" style={{ "--delay": "120ms" }}>
            <h3>Every Change Logged</h3>
            <p>Someone edited something? We know who, when, and what. A full trail, always.</p>
          </article>
          <article className="compliance-card reveal" style={{ "--delay": "240ms" }}>
            <h3>Backups Every Day</h3>
            <p>Encrypted. Automatic. If something goes wrong — which it won't — your data is safe.</p>
          </article>
          <article className="compliance-card reveal" style={{ "--delay": "360ms" }}>
            <h3>Data Stays in Region</h3>
            <p>Your business data stays where it should. Governed, secure, compliant. No questions asked.</p>
          </article>
        </div>
      </section>

      {/* ── Integrations ── */}
      <section className="section integrations-section">
        <div className="section-header reveal">
          <p className="eyebrow">Plays Nice With Everything</p>
          <h2>Already using these? Great. We connect them.</h2>
          <p className="lead">
            Mobile Money, WhatsApp, Google, Microsoft — if your team is already
            using it, Faako plugs right in. No switching, no learning new tools.
          </p>
        </div>
        <div className="ribbon reveal">
          <div>
            <h3>Hooked up and running</h3>
            <p className="muted">Payments, messaging, productivity — all synced up.</p>
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

      {/* ── Outcomes ── */}
      <section className="section outcomes-section">
        <div className="section-header reveal">
          <p className="eyebrow">What Actually Happens</p>
          <h2>Real numbers. From real businesses. After they switched.</h2>
          <p className="lead">
            These aren't projections. These are what our clients told us — after
            running Faako for a few months.
          </p>
        </div>
        <div className="stats-grid">
          <article className="stats-card reveal">
            <span>₵120K</span>
            <p>Cash freed up just from faster invoice collections. That's real working capital, back in your hands.</p>
          </article>
          <article className="stats-card reveal" style={{ "--delay": "120ms" }}>
            <span>-30%</span>
            <p>Fewer stockouts. Reorder alerts kicked in and the "it finish" days stopped.</p>
          </article>
          <article className="stats-card reveal" style={{ "--delay": "240ms" }}>
            <span>2.6x</span>
            <p>Faster month-end closes. Finance team actually gets their weekends back now.</p>
          </article>
          <article className="stats-card reveal" style={{ "--delay": "360ms" }}>
            <span>95%</span>
            <p>On-time deliveries. Dispatch got sorted and customers stopped complaining.</p>
          </article>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="page cta cta-compact reveal">
        <div className="section-header">
          <p className="eyebrow">Your Move</p>
          <h2>You've seen what Faako does.</h2>
          <p className="lead">
            30 minutes. That's all it takes for us to show you what this looks
            like running YOUR business. No pressure. No commitment. Just clarity.
          </p>
        </div>
        <div className="cta-actions">
          <PrimaryButton to="/configure">Configure Your ERP</PrimaryButton>
          <Link className="button button-ghost" to="/case-studies">
            See the Stories
          </Link>
        </div>
      </section>
    <WhatsApp />
    </section>
  );
}