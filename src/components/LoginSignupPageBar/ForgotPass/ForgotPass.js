import { useState, useEffect } from "react";
import ForgotPasswordEmail from "./ForgotPassEmail";
import ForgotPasswordNewPassword from "./ForgotPassNewPass";
import SendCodeForm from "../SendCode/SendCode";
import "./ForgotPass.css";

export default function ForgotPassForm({ isOpen, onClose, onBackToLogin, imageSrc }) {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [countdown, setCountdown] = useState(0);
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [message, setMessage] = useState("");
  
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const DEMO_CODE = "123456";

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  useEffect(() => {
    if (isOpen) {
      setStep("email");
      setEmail("");
      setTempEmail("");
      setPassword("");
      setConfirmPassword("");
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
      setMessage("");
      setCountdown(0);
      setEmailFocused(false);
      setPasswordFocused(false);
      setConfirmPasswordFocused(false);
    }
  }, [isOpen]);

  const checkUserExists = (email) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    return users.find((user) => user.email === email);
  };

  const updateUserPassword = (email, newPassword) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      localStorage.setItem("users", JSON.stringify(users));
      console.log("Password updated for:", email);
      return true;
    }
    return false;
  };

  const validateEmail = (email) => {
    if (!email) return "Email is required";
    if (!email.includes("@") || !email.includes(".")) return "Enter a valid email";
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (password.length < 4) return "Password must be at least 4 characters";
    return "";
  };

  const validateConfirmPassword = (confirmPwd, pwd) => {
    if (!confirmPwd) return "Please confirm your password";
    if (confirmPwd !== pwd) return "Passwords must match";
    return "";
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const emailErr = validateEmail(email);
    setEmailError(emailErr);
    
    if (!emailErr) {
      const user = checkUserExists(email);
      if (user) {
        setTempEmail(email);
        setMessage(`Code sent to ${email}. Use code: ${DEMO_CODE}`);
        setStep("sendCode");
        setCountdown(60);
      } else {
        setEmailError("Email not found. Please sign up first.");
      }
    }
  };

  const handleResendCode = () => {
    if (countdown === 0 && tempEmail) {
      setMessage(`New code sent to ${tempEmail}. Use code: ${DEMO_CODE}`);
      setCountdown(60);
    }
  };

  const handleVerifyCode = () => {
    setStep("newPassword");
    setMessage("");
  };

  const handleNewPasswordSubmit = (e) => {
    e.preventDefault();
    const passwordErr = validatePassword(password);
    const confirmErr = validateConfirmPassword(confirmPassword, password);
    
    setPasswordError(passwordErr);
    setConfirmPasswordError(confirmErr);
    
    if (!passwordErr && !confirmErr) {
      updateUserPassword(tempEmail, password);
      setMessage("Password changed successfully!");
      
      setTimeout(() => {
        onClose();
        if (onBackToLogin) onBackToLogin();
      }, 1500);
    }
  };

  const backToEmail = () => {
    setStep("email");
    setMessage("");
    setEmailError("");
  };

  if (!isOpen) return null;

  const renderComponent = () => {
    switch (step) {
      case "email":
        return (
          <ForgotPasswordEmail
            email={email}
            setEmail={setEmail}
            emailError={emailError}
            emailFocused={emailFocused}
            setEmailFocused={setEmailFocused}
            onSubmit={handleEmailSubmit}
            onBack={onClose}
          />
        );
      case "sendCode":
        return (
          <SendCodeForm
            email={tempEmail}
            message={message}
            countdown={countdown}
            onBack={backToEmail}
            onResendCode={handleResendCode}
            onVerifyCode={handleVerifyCode}
          />
        );
      case "newPassword":
        return (
          <ForgotPasswordNewPassword
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            passwordError={passwordError}
            confirmPasswordError={confirmPasswordError}
            passwordFocused={passwordFocused}
            setPasswordFocused={setPasswordFocused}
            confirmPasswordFocused={confirmPasswordFocused}
            setConfirmPasswordFocused={setConfirmPasswordFocused}
            onSubmit={handleNewPasswordSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={`login-overlay ${isOpen ? "visible" : ""}`} onClick={onClose} />
      <div className={`login-modal ${isOpen ? "open" : ""}`}>
        <div className="login-form-container">
          <div className="login-form">
            {renderComponent()}
          </div>
        </div>
        <div className="login-image-container">
          {imageSrc ? (
            <img src={imageSrc} alt="Login" className="login-image" />
          ) : (
            <div className="login-image-placeholder"></div>
          )}
        </div>
      </div>
    </>
  );
}