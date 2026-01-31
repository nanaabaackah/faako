export default function TrustedBy({
  eyebrow = "Trusted By",
  title = "Teams who run on Faako",
  lead,
  logos = [],
  className = "trust-strip",
  headerScroll = false,
  ariaLabel = "Trusted by",
}) {
  const headerProps = headerScroll ? { "data-scroll": true } : {};

  return (
    <section className={className}>
      <div className="section-header reveal" {...headerProps}>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {lead ? <p className="lead">{lead}</p> : null}
      </div>
      <div className="trust-logos" aria-label={ariaLabel}>
        {logos.map((logo) => (
          <span key={logo}>{logo}</span>
        ))}
      </div>
    </section>
  );
}
