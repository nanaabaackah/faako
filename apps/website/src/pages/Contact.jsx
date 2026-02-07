import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="page contact">
      <div className="contact-copy reveal" style={{ "--delay": "0ms" }}>
        <p className="eyebrow">Contact</p>
        <h1>Let’s talk about the system your business needs.</h1>
        <p className="lead">
          Reach the Faako team for consultations, quotes, or support
          on websites, dashboards, and operations systems.
        </p>
        <div className="contact-list">
          <div>
            <h4>Email</h4>
            <p>
              <a href="mailto:hello@faako.nanaabaackah.com">
                hello@faako.nanaabaackah.com
              </a>
            </p>
          </div>
          <div>
            <h4>Headquarters</h4>
            <p>Accra, Ghana</p>
          </div>
          <div>
            <h4>Response time</h4>
            <p>Within one business day.</p>
          </div>
        </div>
      </div>

      <div className="form card contact-card reveal" style={{ "--delay": "140ms" }}>
        <h3>Start the conversation</h3>
        <p className="muted">
          Share your goals and we will tailor a scope, timeline, and budget.
        </p>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:hello@faako.nanaabaackah.com">
            Email the team
          </a>
          <Link className="button button-ghost" to="/case-studies">
            View case studies
          </Link>
        </div>
        <div className="contact-meta">
          <span>Monday–Friday</span>
          <span>9:00am–6:00pm GMT</span>
        </div>
      </div>
    </section>
  );
}
