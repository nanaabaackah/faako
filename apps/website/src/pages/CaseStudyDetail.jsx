import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../components/PrimaryButton.jsx";
import TrustedBy from "../components/TrustedBy.jsx";
import FaqSection from "../components/FaqSection.jsx";
import NotFound from "./NotFound.jsx";
import { caseStudies } from "../data/caseStudies.js";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    return <NotFound />;
  }

  const relatedCaseStudies = caseStudies.filter(
    (item) => item.slug !== caseStudy.slug
  );

  return (
    <section className="page case-study-page page-stack">
      <section className="case-study-hero split">
        <div className="case-study-hero-content reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">{caseStudy.hero.eyebrow}</p>
          <h1>{caseStudy.hero.headline}</h1>
          <p className="lead">{caseStudy.hero.lead}</p>
          <div className="case-study-badges">
            {caseStudy.hero.badges.map((badge) => (
              <span className="case-study-badge" key={badge}>
                {badge}
              </span>
            ))}
          </div>
          <div className="case-study-hero-actions">
            <PrimaryButton to={caseStudy.hero.primaryCta.to}>
              {caseStudy.hero.primaryCta.label}
            </PrimaryButton>
            <Link className="button button-ghost" to={caseStudy.hero.secondaryCta.to}>
              {caseStudy.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="case-study-hero-media reveal" style={{ "--delay": "120ms" }}>
          <figure className="case-study-device primary">
            <img src={caseStudy.hero.image} alt={caseStudy.hero.imageAlt} />
          </figure>
        </div>
      </section>

      <section className="case-study-metrics reveal">
        <p className="eyebrow">Impact in numbers</p>
        <div className="stats-grid">
          {caseStudy.stats.map((stat) => (
            <div className="stats-card" key={stat.label}>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="case-study-overview split">
        <div className="case-study-overview-copy reveal">
          <p className="eyebrow">Overview</p>
          <h2>{caseStudy.snapshot.title}</h2>
          <p className="lead">{caseStudy.snapshot.lead}</p>
        </div>
        <aside className="case-study-overview-card reveal" style={{ "--delay": "120ms" }}>
          <p className="eyebrow">Snapshot</p>
          <ul className="case-study-overview-list">
            {caseStudy.snapshot.items.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="case-study-panel-grid">
        <article className="case-study-panel reveal">
          <p className="eyebrow">The challenge</p>
          <h2>{caseStudy.challenge.title}</h2>
          <p className="lead">{caseStudy.challenge.lead}</p>
          <div className="case-study-points">
            {caseStudy.challenge.points.map((point) => (
              <p className="stack-line" key={point.label}>
                <span>{point.label}</span> {point.text}
              </p>
            ))}
          </div>
        </article>
        <article className="case-study-panel reveal" style={{ "--delay": "120ms" }}>
          <p className="eyebrow">The solution</p>
          <h2>{caseStudy.solution.title}</h2>
          <p className="lead">{caseStudy.solution.lead}</p>
          <div className="case-study-points">
            {caseStudy.solution.points.map((point) => (
              <p className="stack-line" key={point.label}>
                <span>{point.label}</span> {point.text}
              </p>
            ))}
          </div>
        </article>
      </section>

      <section className="section case-study-tools">
        <div className="section-header reveal">
          <p className="eyebrow">Connected tools</p>
          <h2>{caseStudy.tools.title}</h2>
          <p className="lead">{caseStudy.tools.lead}</p>
        </div>
        <div className="case-study-chips reveal" style={{ "--delay": "120ms" }}>
          {caseStudy.tools.items.map((item) => (
            <span className="case-study-chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section case-study-features">
        <div className="section-header reveal">
          <p className="eyebrow">Built for daily ops</p>
          <h2>{caseStudy.features.title}</h2>
          <p className="lead">{caseStudy.features.lead}</p>
        </div>
        <div className="feature-grid">
          {caseStudy.features.items.map((feature, index) => (
            <article
              className="feature-card reveal"
              style={{ "--delay": `${index * 120}ms` }}
              key={feature.title}
            >
              <div className="feature-card-icon">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p className="muted">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section case-study-workflow split">
        <div className="workflow-copy reveal">
          <p className="eyebrow">How it works</p>
          <h2>{caseStudy.workflow.title}</h2>
          <p className="lead">{caseStudy.workflow.lead}</p>
          <Link to="/contact" className="text-link">
            See this flow live <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="workflow-steps reveal" style={{ "--delay": "120ms" }}>
          {caseStudy.workflow.steps.map((step) => (
            <div className="step" key={step.title}>
              <span>{step.step}</span>
              <div>
                <h3>{step.title}</h3>
                <p className="muted">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section case-study-outcomes">
        <div className="section-header reveal">
          <p className="eyebrow">Results</p>
          <h2>{caseStudy.outcomes.title}</h2>
          <p className="lead">{caseStudy.outcomes.lead}</p>
        </div>
        <div className="stats-grid">
          {caseStudy.outcomes.stats.map((stat, index) => (
            <div
              className="stats-card reveal"
              style={{ "--delay": `${index * 120}ms` }}
              key={stat.label}
            >
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="case-study-quote reveal">
        <blockquote>"{caseStudy.quote.text}"</blockquote>
        <span>
          {caseStudy.quote.name} - {caseStudy.quote.role}
        </span>
      </section>

      <FaqSection
        className="faq-section"
        eyebrow="FAQ"
        title="Questions we get on this rollout"
        items={caseStudy.faqs}
      />

      <section className="page cta reveal">
        <div>
          <p className="eyebrow">Ready for your story?</p>
          <h2>Let's map the workflow that keeps your team in sync.</h2>
          <p className="lead">
            We'll audit your current process and show you exactly where software
            can tighten the loop.
          </p>
          <div className="cta-actions">
            <PrimaryButton to="/contact">Start a project</PrimaryButton>
            <Link className="button button-ghost" to="/case-studies">
              Back to case studies
            </Link>
          </div>
        </div>
      </section>

      <section className="case-studies">
        <div className="section-header reveal">
          <p className="eyebrow">More Stories</p>
          <h2>Explore another case study.</h2>
        </div>
        <div className="case-grid">
          {relatedCaseStudies.map((item, index) => (
            <article
              key={item.slug}
              className="case-card reveal"
              style={{ "--delay": `${index * 120}ms` }}
            >
              <div className="case-image">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className="case-info">
                <span className="case-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Link to={`/case-studies/${item.slug}`} className="text-link">
                  View project <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
