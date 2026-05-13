import "./Signup.css";

export default function SignUpForm({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  emailError,
  passwordError,
  confirmPasswordError,
  emailFocused,
  setEmailFocused,
  passwordFocused,
  setPasswordFocused,
  confirmPasswordFocused,
  setConfirmPasswordFocused,
  onSubmit,
  onSwitchToLogin
}) {
  return (
    <>
      <h2 className="login-title">Create account</h2>
      <p className="login-subtitle">Shop in the marketplace while traveling</p>

      <form onSubmit={onSubmit}>
        <div className={`input-floating-group ${emailError ? "error-label" : ""}`}>
          <input
            type="email"
            className={`input-floating-field ${emailFocused || email ? "filled" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            required
          />
          <label className={`input-floating-label ${emailFocused || email ? "active" : ""}`}>
            Email
          </label>
          {emailError && <div className="error-message">{emailError}</div>}
        </div>

        <div className={`input-floating-group ${passwordError ? "error-label" : ""}`}>
          <input
            type="password"
            className={`input-floating-field ${passwordFocused || password ? "filled" : ""}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            required
          />
          <label className={`input-floating-label ${passwordFocused || password ? "active" : ""}`}>
            Password
          </label>
          {passwordError && <div className="error-message">{passwordError}</div>}
        </div>

        <div className={`input-floating-group ${confirmPasswordError ? "error-label" : ""}`}>
          <input
            type="password"
            className={`input-floating-field ${confirmPasswordFocused || confirmPassword ? "filled" : ""}`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onFocus={() => setConfirmPasswordFocused(true)}
            onBlur={() => setConfirmPasswordFocused(false)}
            required
          />
          <label className={`input-floating-label ${confirmPasswordFocused || confirmPassword ? "active" : ""}`}>
            Confirm Password
          </label>
          {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
        </div>

        <button type="submit" className="login-button">Continue</button>
      </form>

      <div className="signup-link">
        Already have an account?{" "}
        <button onClick={onSwitchToLogin} className="signup-button">
          Log in
        </button>
      </div>

      <div className="terms-text">
        By clicking "Continue", you agree with{" "}
        <a href="/terms" className="terms-link" onClick={(e) => {
          e.preventDefault();
        }}>
          PERRY Terms and Conditions
        </a>
      </div>
    </>
  );
}