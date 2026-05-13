import { useState } from "react";
import "./SendCode.css";

export default function SendCodeForm({
  email,
  message,
  countdown,
  onBack,
  onResendCode,
  onVerifyCode,
}) {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [codeError, setCodeError] = useState("");
  
  const DEMO_CODE = "123456";

  const handleOtpChange = (index, value) => {
    if (value && !/^\d*$/.test(value)) return;
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value.slice(0, 1);
    setOtpValues(newOtpValues);
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
    setCodeError("");
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredCode = otpValues.join("");
    
    console.log("Entered code:", enteredCode);
    console.log("Demo code:", DEMO_CODE);
    
    if (enteredCode === DEMO_CODE) {
      console.log("Code correct, calling onVerifyCode");
      console.log("onVerifyCode is:", typeof onVerifyCode);
      if (onVerifyCode) {
        onVerifyCode();
      } else {
        console.error("onVerifyCode is undefined!");
      }
    } else {
      setCodeError(`Incorrect code. Demo code: ${DEMO_CODE}`);
    }
  };

  return (
    <>
      <button onClick={onBack} className="back-button">← Back</button>

      <h2 className="login-title">Send code</h2>
      <p className="login-subtitle">Enter the code to confirm your email</p>

      {message && <div className="success-message">{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="otp-container">
          {otpValues.map((value, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              className={`otp-input ${codeError ? "error" : ""}`}
              value={value}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleOtpKeyDown(index, e)}
              maxLength={1}
              autoFocus={index === 0 && otpValues[0] === ""}
            />
          ))}
        </div>
        {codeError && <div className="error-message otp-error">{codeError}</div>}

        <div className="signup-link">
          <button
            onClick={onResendCode}
            className={`signup-button ${countdown > 0 ? "disabled" : ""}`}
            disabled={countdown > 0}
          >
            Send code {countdown > 0 ? `(${countdown}s)` : ""}
          </button>
        </div>

        <button type="submit" className="login-button">Continue</button>
      </form>
    </>
  );
}