import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../components/PrimaryButton.jsx";
import AnimatedGeometricSVG from "../components/AnimatedGeometricSVG.jsx";
import { caseStudies } from "../data/caseStudies.js";

export default function CaseStudies() {
  const orderedCaseStudies = caseStudies.length
    ? [caseStudies[caseStudies.length - 1], ...caseStudies.slice(0, -1)]
    : [];

  return (
    <section className="page case-studies-page page-stack">
      <section className="case-hero split">
        <div className="pricing-hero reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">Case Studies</p>
          <h1>Proof of impact across Ghanaian businesses.</h1>
          <p className="lead">
            See how teams use Faako to build websites, dashboards, and systems
            that keep work moving.
          </p>
          <div className="cta-actions">
            <PrimaryButton to="/contact">Request a walkthrough</PrimaryButton>
            <Link className="button button-ghost" to="/solutions">
              Explore Solutions
            </Link>
          </div>
        </div>
        <figure className="stats-figure case-hero-figure reveal" style={{ "--delay": "120ms" }}>
          <AnimatedGeometricSVG className="case-hero-art" />
        </figure>
      </section>

      <section className="page case-studies">
        <div className="section-header reveal">
          <p className="eyebrow">Success Blueprints</p>
          <h2>Projects with measurable results.</h2>
          <p className="lead">
            These teams aligned their website, data, and operations in a
            single system.
          </p>
        </div>

        <div className="case-grid case-grid--bento">
          {orderedCaseStudies.map((item, index) => {
            const cardClasses = ["case-card", "reveal"];
            if (index === 0) cardClasses.push("case-card--spotlight");
            if (index === 1) cardClasses.push("case-card--tall");
            if (index === 2) cardClasses.push("case-card--wide");

            return (
              <article
                key={item.title}
                className={cardClasses.join(" ")}
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
            );
          })}
        </div>
      </section>
    </section>
  );
}
