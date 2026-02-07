import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton.jsx";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="page auth">
      <div className="auth-panel reveal" style={{ "--delay": "0ms" }}>
        <p className="eyebrow">Welcome Back</p>
        <h1>Sign in to your Faako workspace.</h1>
        <p className="lead">
          Access your dashboards, project scope, and implementation updates in
          one place.
        </p>
        <div className="auth-meta">
          <span>Need an account?</span>
          <Link to="/signup" className="text-link">
            Start intake
          </Link>
        </div>
      </div>

      <form className="form card auth-card reveal" onSubmit={handleSubmit}>
        <label>
          Work email
          <input name="email" type="email" placeholder="you@company.com" required />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </label>
        <div className="auth-actions">
          <Link to="/forgot-password" className="text-link">
            Forgot password?
          </Link>
        </div>
        <PrimaryButton type="submit">Sign in</PrimaryButton>
        <p className="form-note">
          By signing in, you agree to the Faako Terms of Service.
        </p>
      </form>
    </section>
  );
}
