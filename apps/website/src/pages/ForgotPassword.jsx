import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton.jsx";

export default function ForgotPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="page auth">
      <div className="auth-panel reveal" style={{ "--delay": "0ms" }}>
        <p className="eyebrow">Reset Access</p>
        <h1>Recover your Faako login.</h1>
        <p className="lead">
          We will send a secure reset link to your work email.
        </p>
        <div className="auth-meta">
          <span>Remembered your password?</span>
          <Link to="/login" className="text-link">
            Back to login
          </Link>
        </div>
      </div>

      <form className="form card auth-card reveal" onSubmit={handleSubmit}>
        <label>
          Work email
          <input name="email" type="email" placeholder="you@company.com" required />
        </label>
        <PrimaryButton type="submit">Send reset link</PrimaryButton>
        <p className="form-note">
          If you do not receive an email, contact support for help.
        </p>
      </form>
    </section>
  );
}
