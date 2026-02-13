import { useState } from "react";
import { Link } from "react-router-dom";

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
    <section className="page signup signup-page">
      <div className="signup-shell reveal" style={{ "--delay": "0ms" }}>
        <div className="signup-form-side">
          <div className="signup-icon-badge">
            <img
              className="signup-icon-logo"
              src="/assets/logos/logo-white.png"
              alt="Faako logo"
              loading="lazy"
            />
          </div>
          <h1>Get Started</h1>
          <p className="lead">
            Welcome to Faako. Create your account to configure your project and
            launch with confidence.
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
              <select name="currency" defaultValue="USD">
                <option value="USD">USD</option>
                <option value="GHS">GHS</option>
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
                We will respond within one business day with next steps.
              </p>
            )}
          </form>
        </div>

        <aside className="signup-showcase-side">
          <div className="signup-showcase-copy">
            <h2>
              Enter the <em>Future</em>
              <br />
              of digital operations.
            </h2>
          </div>

          <div className="signup-showcase-ui">
            <div className="signup-mini-stack">
              <div className="signup-mini-card" />
              <div className="signup-mini-rail">
                <span />
                <span />
                <span />
              </div>
            </div>
            <article className="signup-balance-card">
              <h4>$12,347.23</h4>
              <p>Combined project value</p>
              <div className="signup-balance-row">
                <span>Primary Module</span>
                <strong>$2,546.64</strong>
              </div>
              <div className="signup-balance-row">
                <span>Rollout Status</span>
                <strong>Active</strong>
              </div>
            </article>
          </div>
        </aside>
      </div>
    </section>
  );
}
