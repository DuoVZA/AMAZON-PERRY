import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login({
  isOpen,
  onClose,
  imageSrc,
  initialMode = "login",
  onLoginSuccess,
}) {
  const navigate = useNavigate();
  const [isLoginMode, setIsLoginMode] = useState(initialMode === "login");
  const [staySignedIn, setStaySignedIn] = useState(false);
  const [step, setStep] = useState("form");
  const [verificationCode, setVerificationCode] = useState("");
  const [sentCode, setSentCode] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [countdown, setCountdown] = useState(0);

  // OTP states
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);

  // Поля формы
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Ошибки
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [codeError, setCodeError] = useState("");

  // Для floating labels
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  // Сообщение
  const [message, setMessage] = useState("");

  // Таймер для повторной отправки
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  // Сбрасываем форму при открытии модалки
  useEffect(() => {
    if (isOpen) {
      setIsLoginMode(initialMode === "login");
      setStep("form");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setVerificationCode("");
      setTempEmail("");
      setStaySignedIn(false);
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
      setCodeError("");
      setMessage("");
      setCountdown(0);
      setEmailFocused(false);
      setPasswordFocused(false);
      setConfirmPasswordFocused(false);
      setOtpValues(["", "", "", "", "", ""]);
    }
  }, [isOpen, initialMode]);

  // Сброс OTP при открытии экрана sendCode
  useEffect(() => {
    if (step === "sendCode") {
      setOtpValues(["", "", "", "", "", ""]);
      setVerificationCode("");
    }
  }, [step]);

  // Генерация случайного кода
  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Демо-отправка кода на почту
  const sendVerificationCode = (email) => {
    const code = generateCode();
    setSentCode(code);
    console.log(`📧 Код подтверждения отправлен на ${email}: ${code}`);
    console.log("🔑 В демо-режиме используйте этот код:", code);

    setMessage(`Code sent to ${email}`);
    setTimeout(() => setMessage(""), 3000);

    return code;
  };

  // Валидация email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Wrong or invalid email address";
    return "";
  };

  // Валидация пароля (для SignUp)
  const validatePassword = (password) => {
    if (!password) return "Password is required";
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasMinLength = password.length >= 8;

    if (!hasUpperCase || !hasLowerCase || !hasDigit || !hasMinLength) {
      return "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and be at least 8 characters long";
    }
    return "";
  };

  // Валидация подтверждения пароля
  const validateConfirmPassword = (confirmPwd, pwd) => {
    if (!confirmPwd) return "Please confirm your password";
    if (confirmPwd !== pwd) return "Passwords must match";
    return "";
  };

  // Проверка существования пользователя
  const checkUserExists = (email) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    return users.find((user) => user.email === email);
  };

  // Сохранение пользователя
  const saveUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const newUser = { email, password, createdAt: new Date().toISOString() };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  };

  // Установка текущего пользователя
  const setCurrentUser = (email) => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ email, isLoggedIn: true }),
    );
    if (onLoginSuccess) {
      onLoginSuccess({ email });
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setMessage("");
    if (!isLoginMode) {
      setEmailError(validateEmail(value));
    } else {
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setEmailError("Wrong or invalid email address");
      } else {
        setEmailError("");
      }
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setMessage("");

    if (!isLoginMode) {
      setPasswordError(validatePassword(value));
      if (confirmPassword) {
        setConfirmPasswordError(
          validateConfirmPassword(confirmPassword, value),
        );
      }
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordError(validateConfirmPassword(value, password));
  };

  // OTP handlers
  const handleOtpChange = (index, value) => {
    if (value && !/^\d*$/.test(value)) return;

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value.slice(0, 1);
    setOtpValues(newOtpValues);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }

    const fullCode = newOtpValues.join("");
    setVerificationCode(fullCode);
    setCodeError("");
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  // Отправка кода (первый шаг логина)
  const handleSendCode = (e) => {
    e.preventDefault();

    const emailErr = validateEmail(email);
    setEmailError(emailErr);

    if (!emailErr) {
      const user = checkUserExists(email);
      if (user && user.password === password) {
        setTempEmail(email);
        sendVerificationCode(email);
        setStep("sendCode");
        setCountdown(60);
      } else {
        setPasswordError("Incorrect password");
      }
    }
  };

  // Повторная отправка кода
  const handleResendCode = () => {
    if (countdown === 0) {
      sendVerificationCode(tempEmail);
      setCountdown(60);
      setCodeError("");
      setOtpValues(["", "", "", "", "", ""]);
    }
  };

  // Верификация кода
  const handleVerifyCode = (e) => {
    e.preventDefault();

    if (verificationCode === sentCode) {
      console.log("Login successful:", { email: tempEmail });
      setMessage("Login successful! Redirecting...");
      setCurrentUser(tempEmail);

      setTimeout(() => {
        onClose();
        if (onLoginSuccess) onLoginSuccess({ email: tempEmail });
      }, 1000);
    } else {
      setCodeError("Incorrect code, try again");
    }
  };

  // Регистрация
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
        saveUser(email, password);
        setMessage("Account created successfully! Please log in.");

        setTimeout(() => {
          setIsLoginMode(true);
          setPassword("");
          setConfirmPassword("");
          setMessage("");
        }, 2000);
      }
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
    onClose();
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setStep("form");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setVerificationCode("");
    setSentCode("");
    setTempEmail("");
    setStaySignedIn(false);
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setCodeError("");
    setMessage("");
    setCountdown(0);
    setEmailFocused(false);
    setPasswordFocused(false);
    setConfirmPasswordFocused(false);
    setOtpValues(["", "", "", "", "", ""]);
  };

  const backToForm = () => {
    setStep("form");
    setVerificationCode("");
    setCodeError("");
    setOtpValues(["", "", "", "", "", ""]);
  };

  if (!isOpen) return null;

  // Экран отправки кода (Send code) с OTP
  if (step === "sendCode") {
    return (
      <>
        <div
          className={`login-overlay ${isOpen ? "visible" : ""}`}
          onClick={onClose}
        />
        <div className={`login-modal ${isOpen ? "open" : ""}`}>
          <div className="login-form-container">
            <div className="login-form">
              <button onClick={backToForm} className="back-button">
                ← Back
              </button>

              <h2 className="login-title">Send code</h2>
              <p className="login-subtitle">
                Enter the code to confirm your email
              </p>

              {message && <div className="success-message">{message}</div>}

              <form onSubmit={handleVerifyCode}>
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
                {codeError && (
                  <div className="error-message otp-error">{codeError}</div>
                )}

                <div className="signup-link">
                  <button
                    onClick={handleResendCode}
                    className={`signup-button ${countdown > 0 ? "disabled" : ""}`}
                    disabled={countdown > 0}
                  >
                    Send code {countdown > 0 ? `(${countdown}s)` : ""}
                  </button>
                </div>

                <button type="submit" className="login-button">
                  Continue
                </button>
              </form>
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

  // Основная форма Login/SignUp
  return (
    <>
      <div
        className={`login-overlay ${isOpen ? "visible" : ""}`}
        onClick={onClose}
      />

      <div className={`login-modal ${isOpen ? "open" : ""}`}>
        <div className="login-form-container">
          <div className="login-form">
            {isLoginMode ? (
              <>
                <h2 className="login-title">Welcome back</h2>
                <p className="login-subtitle">Login into your account</p>
              </>
            ) : (
              <>
                <h2 className="login-title">Create account</h2>
                <p className="login-subtitle">
                  Shop in the marketplace while traveling
                </p>
              </>
            )}

            {message && <div className="success-message">{message}</div>}

            <form onSubmit={isLoginMode ? handleSendCode : handleSignUp}>
              {/* Email поле */}
              <div
                className={`input-floating-group ${emailError ? "error-label" : ""}`}
              >
                <input
                  type="email"
                  className={`input-floating-field ${emailFocused || email ? "filled" : ""}`}
                  value={email}
                  onChange={handleEmailChange}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => {
                    setEmailFocused(false);
                    if (email && !isLoginMode)
                      setEmailError(validateEmail(email));
                  }}
                  required
                />
                <label
                  className={`input-floating-label ${emailFocused || email ? "active" : ""}`}
                >
                  Email
                </label>
                {emailError && (
                  <div className="error-message">{emailError}</div>
                )}
              </div>

              {/* Password поле */}
              <div
                className={`input-floating-group ${passwordError ? "error-label" : ""}`}
              >
                <input
                  type="password"
                  className={`input-floating-field ${passwordFocused || password ? "filled" : ""}`}
                  value={password}
                  onChange={handlePasswordChange}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => {
                    setPasswordFocused(false);
                    if (!isLoginMode && password)
                      setPasswordError(validatePassword(password));
                  }}
                  required
                />
                <label
                  className={`input-floating-label ${passwordFocused || password ? "active" : ""}`}
                >
                  Password
                </label>
                {passwordError && (
                  <div className="error-message">{passwordError}</div>
                )}
              </div>

              {/* Confirm Password (только SignUp) */}
              {!isLoginMode && (
                <div
                  className={`input-floating-group ${confirmPasswordError ? "error-label" : ""}`}
                >
                  <input
                    type="password"
                    className={`input-floating-field ${confirmPasswordFocused || confirmPassword ? "filled" : ""}`}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    onFocus={() => setConfirmPasswordFocused(true)}
                    onBlur={() => {
                      setConfirmPasswordFocused(false);
                      if (confirmPassword)
                        setConfirmPasswordError(
                          validateConfirmPassword(confirmPassword, password),
                        );
                    }}
                    required
                  />
                  <label
                    className={`input-floating-label ${confirmPasswordFocused || confirmPassword ? "active" : ""}`}
                  >
                    Confirm Password
                  </label>
                  {confirmPasswordError && (
                    <div className="error-message">{confirmPasswordError}</div>
                  )}
                </div>
              )}

              {/* Чекбокс и forgot password (только Login) */}
              {isLoginMode && (
                <div className="login-options">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={staySignedIn}
                      onChange={(e) => setStaySignedIn(e.target.checked)}
                    />
                    Stay signed in
                  </label>
                  <button
                    type="button"
                    className="forgot-password"
                    onClick={handleForgotPassword}
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button type="submit" className="login-button">
                {isLoginMode ? "Send code" : "Continue"}
              </button>
            </form>

            <div className="signup-link">
              {isLoginMode ? (
                <>
                  Don't have an account?{" "}
                  <button onClick={toggleMode} className="signup-button">
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button onClick={toggleMode} className="signup-button">
                    Log in
                  </button>
                </>
              )}
            </div>

            {!isLoginMode && (
              <div className="terms-text">
                By clicking "Continue", you agree with{" "}
                <a
                  href="/terms"
                  className="terms-link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/terms");
                    onClose();
                  }}
                >
                  PERRY Terms and Conditions
                </a>
              </div>
            )}
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
