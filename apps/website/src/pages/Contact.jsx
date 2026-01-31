import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="page contact">
      <div className="contact-copy reveal" style={{ "--delay": "0ms" }}>
        <p className="eyebrow">Contact</p>
        <h1>Let’s talk about your single source of truth.</h1>
        <p className="lead">
          Reach the Faako team for demos, partnership conversations, or support
          on unifying your finance, inventory, and people operations.
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
          Share your goals and we will tailor a rollout plan for your team.
        </p>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:hello@faako.nanaabaackah.com">
            Email the team
          </a>
          <Link className="button button-ghost" to="/signup">
            Request a demo
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
