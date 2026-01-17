export default function Pricing() {
  return (
    <section className="page pricing">
      <div className="pricing-hero reveal" style={{ "--delay": "0ms" }}>
        <p className="eyebrow">Pricing</p>
        <h1>Single Source plans for growing enterprises.</h1>
        <p className="lead">
          Every tier includes the same unified data backbone. Pick the
          investment that matches your scale and module mix—we will tailor the
          experience to keep your team aligned with one source of truth.
        </p>
      </div>
      <div className="pricing-grid">
        <article className="price-card reveal" style={{ "--delay": "120ms" }}>
          <div>
            <h3>Launch</h3>
            <p className="price">From $220/mo</p>
            <p className="muted">
              Pilot Faako with finance, inventory, and people dashboards.
            </p>
          </div>
          <ul>
            <li>Core Faako Finance, Ops, and Talent modules</li>
            <li>Realtime reporting for leadership</li>
            <li>Email support and weekly reviews</li>
          </ul>
        </article>
        <article className="price-card highlight reveal" style={{ "--delay": "200ms" }}>
          <div>
            <h3>Growth</h3>
            <p className="price">From $520/mo</p>
            <p className="muted">
              Advanced automation, CRM, and governance for expanding teams.
            </p>
          </div>
          <ul>
            <li>Everything in Launch, plus Faako CRM</li>
            <li>Custom workflow studio and approvals</li>
            <li>Priority onboarding and success partner</li>
          </ul>
        </article>
        <article className="price-card reveal" style={{ "--delay": "280ms" }}>
          <div>
            <h3>Enterprise</h3>
            <p className="price">Custom</p>
            <p className="muted">Dedicated infrastructure for global teams.</p>
          </div>
          <ul>
            <li>Unlimited modules and users</li>
            <li>Security, compliance, and integration reviews</li>
            <li>Dedicated Faako success and engineering pods</li>
          </ul>
        </article>
      </div>
      <div className="pricing-note reveal" style={{ "--delay": "360ms" }}>
        <p>
          Every plan launches with guided data migration, training, and
          playbooks so your African enterprise can operate with world-class
          precision.
        </p>
      </div>
    </section>
  );
}
