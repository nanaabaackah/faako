import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faCircleCheck,
  faBuilding,
  faUsers,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const apiBase = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!apiBase) {
      setStatus({
        state: "error",
        message: "Missing API URL. Please try again shortly."
      });
      return;
    }

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    setStatus({ state: "loading", message: "Sending request..." });

    try {
      const response = await fetch(`${apiBase}/signup`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      event.currentTarget.reset();
      setStatus({
        state: "success",
        message: "Thanks! We will reach out within one business day."
      });
    } catch (error) {
      setStatus({
        state: "error",
        message: "Something went wrong. Please try again."
      });
    }
  };

  return (
    <section className="page signup signup-page auth-suite auth-suite--signup">
      <div className="auth-suite-shell">
        <aside className="auth-suite-panel reveal" data-scroll style={{ "--delay": "0ms" }}>
          <span className="auth-suite-kicker">
            <FontAwesomeIcon icon={faRocket} />
            New Workspace
          </span>
          <h1>Create your Faako workspace.</h1>
          <p className="lead">
            Set up your team profile once, then configure modules and rollout plans from one dashboard.
          </p>
          <ul className="auth-suite-points">
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Guided setup in under 10 minutes
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Built-in blueprint and pricing estimator
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Launch support from discovery to go-live
            </li>
          </ul>
          <div className="auth-suite-tags">
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              Business profile
            </span>
            <span>
              <FontAwesomeIcon icon={faUsers} />
              Team access
            </span>
            <span>
              <FontAwesomeIcon icon={faBolt} />
              Fast setup
            </span>
          </div>
        </aside>

        <div className="signup-shell auth-suite-form reveal" data-scroll style={{ "--delay": "120ms" }}>
          <div className="signup-form-side">
            <div className="signup-icon-badge">
              <img
                className="signup-icon-logo"
                src="/assets/logos/logo-white.png"
                alt="Faako logo"
                loading="lazy"
              />
            </div>
            <h2>Get Started</h2>
            <p className="muted">
              Fill in your details and we will prepare your workspace.
            </p>

            <form
              className="form signup-form"
              style={{ "--delay": "140ms" }}
              onSubmit={handleSubmit}
            >
              <label>
                Business name
                <input name="companyName" placeholder="Faako Foods" required />
              </label>

              <label>
                Work email
                <input
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
              </label>

              <div className="signup-password-row">
                <label>
                  Password
                  <input
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    autoComplete="new-password"
                    required
                  />
                </label>
                <Link to="/forgot-password" className="text-link">
                  Forgot?
                </Link>
              </div>

              <label>
                Team size
                <select name="teamSize" defaultValue="1-10">
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201+">201+</option>
                </select>
              </label>

              <label>
                Primary currency
                <select name="currency" defaultValue="GHS">
                  <option value="GHS">GHS</option>
                  <option value="USD">USD</option>
                  <option value="NGN">NGN</option>
                </select>
              </label>

              <button
                className="button button-primary signup-submit"
                type="submit"
                disabled={status.state === "loading"}
              >
                {status.state === "loading" ? "Sending..." : "Sign up"}
              </button>

              <p className="signup-login-note">
                Already have an account?{" "}
                <Link to="/login" className="text-link">
                  Log in
                </Link>
              </p>

              {status.message ? (
                <p className={`form-note ${status.state}`} role="status">
                  {status.message}
                </p>
              ) : (
                <p className="form-note">
                  We respond within one business day with next steps.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
