import { useState } from "react";

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
    <section className="page signup">
      <div className="signup-copy reveal" style={{ "--delay": "0ms" }}>
        <p className="eyebrow">Single Source Signup</p>
        <h1>Build your unified Faako headquarters.</h1>
        <p className="lead">
          Tell us about your operations and we will weave finance, inventory,
          and people into one global workspace with a single source of truth.
        </p>
        <div className="signup-list">
          <div>
            <h4>Onboarding sprint</h4>
            <p>We map your modules and workflows in the first week.</p>
          </div>
          <div>
            <h4>Data migration</h4>
            <p>Import existing sheets, tools, and inventory lists.</p>
          </div>
          <div>
            <h4>Team training</h4>
            <p>Hands-on sessions for managers and operators.</p>
          </div>
        </div>
      </div>
      <form
        className="form card reveal"
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
          className="button button-primary"
          type="submit"
          disabled={status.state === "loading"}
        >
          {status.state === "loading" ? "Sending..." : "Request access"}
        </button>
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
    </section>
  );
}
