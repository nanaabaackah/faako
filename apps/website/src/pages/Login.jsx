import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faFacebookF,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="page auth login-page">
      <form
        className="form card auth-card login-card reveal"
        style={{ "--delay": "0ms" }}
        onSubmit={handleSubmit}
      >
        <div className="login-card-badge" aria-hidden="true">
          <FontAwesomeIcon icon={faRightToBracket} />
        </div>

        <div className="login-copy">
          <h1>Sign in with email</h1>
          <p className="lead">
            Access dashboards, deployment updates, and implementation milestones
            in one place.
          </p>
        </div>

        <label className="login-field">
          <span className="login-field-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <input
            name="email"
            type="email"
            placeholder="you@company.com"
            required
          />
        </label>

        <label className="login-field login-field--password">
          <span className="login-field-icon">
            <FontAwesomeIcon icon={faLock} />
          </span>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            className="login-field-toggle"
            onClick={() => setShowPassword((current) => !current)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </label>

        <div className="auth-actions login-actions-row">
          <Link to="/forgot-password" className="text-link">
            Forgot password?
          </Link>
        </div>

        <button className="button button-primary login-submit" type="submit">
          Get Started
        </button>

        <div className="login-divider">
          <span>Or sign in with</span>
        </div>

        <div className="login-social-grid">
          <button className="login-social-button" type="button" aria-label="Sign in with Google">
            <FontAwesomeIcon icon={faGoogle} />
          </button>
          <button className="login-social-button" type="button" aria-label="Sign in with Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button className="login-social-button" type="button" aria-label="Sign in with Apple">
            <FontAwesomeIcon icon={faApple} />
          </button>
        </div>

        <div className="auth-meta login-meta">
          <span>Need an account?</span>
          <Link to="/signup" className="text-link">
            Signup Today
          </Link>
        </div>
      </form>
    </section>
  );
}
