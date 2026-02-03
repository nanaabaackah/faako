import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../components/PrimaryButton.jsx";
import AnimatedGeometricSVG from "../components/AnimatedGeometricSVG.jsx";

const caseStudies = [
  {
    title: "Party Rental ERP System",
    tag: "ERP Implementation",
    summary:
      "Unified inventory, finance, and logistics for a multi-location rentals team.",
    image: "/imgs/case-studies/erp-case.png",
  },
  {
    title: "Developer Command Center",
    tag: "Productivity Suite",
    summary:
      "Real-time visibility into deployments, tasks, and system health in one dashboard.",
    image: "/imgs/case-studies/dashboard-case.png",
  },
];

export default function CaseStudies() {
  return (
    <section className="page case-studies-page page-stack">
      <section className="case-hero split">
        <div className="pricing-hero reveal" style={{ "--delay": "0ms" }}>
          <p className="eyebrow">Case Studies</p>
          <h1>Proof of impact across Ghanaian businesses.</h1>
          <p className="lead">
            See how operators use Faako to connect their data, teams, and daily
            execution.
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
          <h2>ERP deployments with measurable results.</h2>
          <p className="lead">
            These teams aligned their finance, operations, and talent in a
            single system.
          </p>
        </div>

        <div className="case-grid">
          {caseStudies.map((item, index) => (
            <article
              key={item.title}
              className="case-card reveal"
              style={{ "--delay": `${index * 120}ms` }}
            >
              <div className="case-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="case-info">
                <span className="case-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Link to="/contact" className="text-link">
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