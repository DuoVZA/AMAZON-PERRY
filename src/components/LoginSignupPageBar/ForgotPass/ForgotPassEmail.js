import "./ForgotPass.css";

export default function ForgotPasswordEmail({ 
  email, 
  setEmail, 
  emailError, 
  emailFocused, 
  setEmailFocused, 
  onSubmit,
  onBack 
}) {
  return (
    <>
      <button onClick={onBack} className="back-button">← Back</button>

      <h2 className="login-title">Forgotten password</h2>
      <p className="login-subtitle">Enter your email to reset your password</p>

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

        <button type="submit" className="login-button">Continue</button>
      </form>
    </>
  );
}