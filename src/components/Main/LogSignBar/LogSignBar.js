import { useState, useEffect } from "react";
import "./LogSignBar.css";

export default function LogSignBar({ imageSrc, mobileImageSrc, onOpenLogin }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.visualViewport?.width ?? window.innerWidth;
      const mobile = Math.round(width) <= 390;
      if (mobile) {
        console.log("width:", width, "isMobile:", mobile); // ← добавьте это
      }
      setIsMobile(mobile);
    };
    checkMobile();
    window.visualViewport?.addEventListener("resize", checkMobile);
    window.addEventListener("resize", checkMobile);
    return () => {
      window.visualViewport?.removeEventListener("resize", checkMobile);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="promo-banner">
      <div className={`promo-container ${isMobile ? "promo-mobile" : ""}`}>
        <div className="promo-content">
          <h2 className="promo-title">Abundance of goods</h2>
          <p className="promo-description">
            Join, choose and buy with confidence!
          </p>
          <div className="promo-buttons">
            <button
              className="promo-btn signup-btn1"
              onClick={() => onOpenLogin("signup")}
            >
              Sign in
            </button>
            <button
              className="promo-btn login-btn1"
              onClick={() => onOpenLogin("login")}
            >
              Log in
            </button>
          </div>
        </div>

        <div className="promo-image">
          {console.log("src:", isMobile ? mobileImageSrc : imageSrc)}
          <img
            src={isMobile ? mobileImageSrc : imageSrc}
            alt="Promo"
            className="promo-image-img"
          />
        </div>
      </div>
    </div>
  );
}
