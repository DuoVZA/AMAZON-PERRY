import "./ForgotPass.css";

export default function ForgotPasswordNewPassword({ 
  password, 
  setPassword, 
  confirmPassword, 
  setConfirmPassword,
  passwordError,
  confirmPasswordError,
  passwordFocused,
  setPasswordFocused,
  confirmPasswordFocused,
  setConfirmPasswordFocused,
  onSubmit 
}) {
  return (
    <>
      <h2 className="login-title">Reset password</h2>
      <p className="login-subtitle">Set a new password for your account</p>

      <form onSubmit={onSubmit}>
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
            New password
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
            Repeat password
          </label>
          {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
        </div>

        <button type="submit" className="login-button">Continue</button>
      </form>
    </>
  );
}