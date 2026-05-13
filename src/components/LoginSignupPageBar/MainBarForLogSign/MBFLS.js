import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Login/Login";
import SignUpForm from "../Signup/Signup";
import SendCodeForm from "../SendCode/SendCode";
import ForgotPassForm from "../ForgotPass/ForgotPass";
import "./MBFLS.css";

export default function AuthModal({
  isOpen,
  onClose,
  imageSrc,
  initialMode = "login",
  onLoginSuccess,
}) {
  const navigate = useNavigate();

  const [mode, setMode] = useState(initialMode);
  const [staySignedIn, setStaySignedIn] = useState(false);
  const [tempEmail, setTempEmail] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  const [countdown, setCountdown] = useState(0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [message, setMessage] = useState("");

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTempEmail("");
      setTempPassword("");
      setStaySignedIn(false);
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
      setMessage("");
      setCountdown(0);
      setEmailFocused(false);
      setPasswordFocused(false);
      setConfirmPasswordFocused(false);
    }
  }, [isOpen, initialMode]);

  const validateEmail = (email) => {
    if (!email) return "Email is required";
    if (!email.includes("@") || !email.includes("."))
      return "Enter a valid email";
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

  const checkUserExists = (email) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    return users.find((user) => user.email === email);
  };

  const saveUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const newUser = { email, password, createdAt: new Date().toISOString() };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("User saved:", newUser);
  };

  const setCurrentUser = (email) => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ email, isLoggedIn: true }),
    );
    if (onLoginSuccess) {
      onLoginSuccess({ email });
    }
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setMessage("");
    setEmailError("");
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setMessage("");
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    setConfirmPasswordError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const emailErr = validateEmail(email);
    setEmailError(emailErr);

    if (!emailErr) {
      const user = checkUserExists(email);
      if (user) {
        console.log("Login successful:", { email });
        setCurrentUser(email);
        onClose();
      } else {
        setEmailError("Email not found. Please sign up first.");
      }
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    const confirmErr = validateConfirmPassword(confirmPassword, password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);
    setConfirmPasswordError(confirmErr);

    if (!emailErr && !passwordErr && !confirmErr) {
      const existingUser = checkUserExists(email);
      if (existingUser) {
        setEmailError("Email already registered. Please log in.");
      } else {
        setTempEmail(email);
        setTempPassword(password);
        setMessage(`Code sent to ${email}. Use code: 123456`);
        setMode("sendCode");
        setCountdown(60);
      }
    }
  };

  const handleVerifyCode = () => {
    console.log("Verification successful!");
    saveUser(tempEmail, tempPassword);
    setCurrentUser(tempEmail);
    onClose();
  };

  const handleResendCode = () => {
    if (countdown === 0 && tempEmail) {
      setMessage(`New code sent to ${tempEmail}. Use code: 123456`);
      setCountdown(60);
    }
  };

  const handleOpenForgotPassword = () => {
    setMode("forgotPassword");
  };

  const handleCloseForgotPassword = () => {
    setMode("login");
  };

  const switchToSignUp = () => {
    setMode("signup");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  const switchToLogin = () => {
    setMode("login");
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };

  const backToLogin = () => {
    setMode("login");
    setMessage("");
  };

  if (!isOpen) return null;

  const renderLeftComponent = () => {
    switch (mode) {
      case "login":
        return (
          <LoginForm
            email={email}
            setEmail={handleEmailChange}
            password={password}
            setPassword={handlePasswordChange}
            staySignedIn={staySignedIn}
            setStaySignedIn={setStaySignedIn}
            emailError={emailError}
            passwordError={passwordError}
            emailFocused={emailFocused}
            setEmailFocused={setEmailFocused}
            passwordFocused={passwordFocused}
            setPasswordFocused={setPasswordFocused}
            onSubmit={handleLogin}
            onSwitchToSignUp={switchToSignUp}
            onForgotPasswordClick={handleOpenForgotPassword}
          />
        );
      case "signup":
        return (
          <SignUpForm
            email={email}
            setEmail={handleEmailChange}
            password={password}
            setPassword={handlePasswordChange}
            confirmPassword={confirmPassword}
            setConfirmPassword={handleConfirmPasswordChange}
            emailError={emailError}
            passwordError={passwordError}
            confirmPasswordError={confirmPasswordError}
            emailFocused={emailFocused}
            setEmailFocused={setEmailFocused}
            passwordFocused={passwordFocused}
            setPasswordFocused={setPasswordFocused}
            confirmPasswordFocused={confirmPasswordFocused}
            setConfirmPasswordFocused={setConfirmPasswordFocused}
            onSubmit={handleSignUp}
            onSwitchToLogin={switchToLogin}
          />
        );
      case "sendCode":
        return (
          <SendCodeForm
            email={tempEmail}
            message={message}
            countdown={countdown}
            onBack={backToLogin}
            onResendCode={handleResendCode}
            onVerifyCode={handleVerifyCode}
          />
        );
      case "forgotPassword":
        return (
          <ForgotPassForm
            isOpen={true}
            onClose={handleCloseForgotPassword}
            onBackToLogin={() => {
              setMode("login");
            }}
            imageSrc={imageSrc}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className={`login-overlay ${isOpen ? "visible" : ""}`}
        onClick={onClose}
      />
      <div className={`login-modal ${isOpen ? "open" : ""}`}>
        <div className="login-form-container">
          <div className="login-form">{renderLeftComponent()}</div>
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