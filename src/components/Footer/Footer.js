import { useNavigate } from "react-router-dom";
import "./Footer.css";

const FOOTER_SECTIONS = {
  support: ["Contact us", "FAQ"],
  legal: ["Terms and Conditions", "License agreement", "Privacy Policy"],
  social: [
    { name: "Facebook", icon: "/images/icons/Facebook.png" },
    { name: "Twitter", icon: "/images/icons/Twitter.png" },
    { name: "Instagram", icon: "/images/icons/Instagram.png" },
    { name: "Gmail", icon: "/images/icons/Gmail.png" },
    { name: "Telegram", icon: "/images/icons/Telegram.png" }
  ]
};

export default function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    console.log("Footer link clicked:", link);
  };

  const handleSocialClick = (social) => {
    console.log("Social clicked:", social.name);
    // Здесь добавишь логику перехода по ссылке
    // window.open(social.link, "_blank");
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-title">Support</h3>
            {FOOTER_SECTIONS.support.map((item, index) => (
              <button key={index} className="footer-link" onClick={() => handleLinkClick(item)}>
                {item}
              </button>
            ))}
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Legal notice</h3>
            {FOOTER_SECTIONS.legal.map((item, index) => (
              <button key={index} className="footer-link" onClick={() => handleLinkClick(item)}>
                {item}
              </button>
            ))}
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Social media</h3>
            <div className="social-links">
              {FOOTER_SECTIONS.social.map((social, index) => (
                <button 
                  key={index} 
                  className="social-icon" 
                  onClick={() => handleSocialClick(social)}
                >
                  <img 
                    src={social.icon} 
                    alt={social.name}
                    width={32}
                    height={32}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
      
      <div className="lower-footer">
        <div className="lower-footer-content">
          <div className="logo" onClick={() => (window.location.href = "/")}>
            <img src="/images/icons/logo.png" width={70} height={20} alt="PERRY" />
          </div>
          <p className="copyright">© 2024 Du Soleil. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}