import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./MenuBar.css";

const USER = {
  name: "Not signed in",
  role: "",
};

const ICONS = {
  product: (
    <img
      src="/images/icons/product-catalog.png"
      width={23.99}
      height={23.99}
      alt="PERRY"
    />
  ),
  help: (
    <img src="/images/icons/help.png" width={24} height={19.58} alt="Cart" />
  ),
  arrowDown: <span className="arrow-down">▼</span>,
  arrowUp: <span className="arrow-up">▲</span>,
};

const CATALOG_OPTIONS = [
  { name: "Fashion", icon: "/images/icons/fashion.png" },
  { name: "Electronics", icon: "/images/icons/electronics.png" },
  { name: "Household", icon: "/images/icons/household.png" },
  { name: "Furniture", icon: "/images/icons/furniture.png" },
  { name: "Work tools", icon: "/images/icons/work-tools.png" },
];

export default function MenuBar({ isOpen, onClose, onOpenLogin }) {
  const navigate = useNavigate();
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const drawerRef = useRef(null);

  const handleClick = (path) => { navigate(path); onClose(); };
  const handleCatalogClick = () => setIsCatalogOpen(!isCatalogOpen);
  const handleOptionClick = (option) => { setIsCatalogOpen(false); onClose(); };
  const handleSignUp = () => { onClose(); onOpenLogin('signup'); };
  const handleLogIn = () => { onClose(); onOpenLogin('login'); };

  return (
    <>
      <div className={`overlay ${isOpen ? "visible" : ""}`} onClick={onClose} />

      <aside
        ref={drawerRef}
        className={`drawer ${isOpen ? "open" : ""}`}
      >

        {/* Крестик */}
        <button className="drawer-close" onClick={onClose}>✕</button>

        <div className="drawer-profile">
          <div className="bubble">
            <img src="/images/icons/capla.png" width={33} height={25} alt="" style={{marginTop: "15px", marginLeft: "8px"}} />
          </div>
          <div className="profile-info">
            <div className="profile-name">{USER.name}</div>
            <div className="profile-message">Log in to enjoy a more pleasant experience</div>
          </div>
        </div>

        <div className="auth-buttons">
          <button className="signup-btn" onClick={handleSignUp}>Sign up</button>
          <button className="login-btn" onClick={handleLogIn}>Log in</button>
        </div>

        <nav className="drawer-nav">
          <div className="nav-item-wrapper">
            <button className={`nav-item ${isCatalogOpen ? "active" : ""}`} onClick={handleCatalogClick}>
              {ICONS.product} Product catalog
              <span className="arrow-icon">{isCatalogOpen ? ICONS.arrowUp : ICONS.arrowDown}</span>
            </button>
            {isCatalogOpen && (
              <div className="catalog-submenu">
                {CATALOG_OPTIONS.map((option, index) => (
                  <button key={index} className="catalog-option" onClick={() => handleOptionClick(option.name)}>
                    <img src={option.icon} width={28} height={28} alt={option.name} className="catalog-option-icon" />
                    {option.name}
                  </button>
                ))}
                <button className="catalog-option see-all" onClick={() => handleClick("/catalog")}>See all</button>
              </div>
            )}
          </div>
          <button className="nav-item" onClick={() => handleClick("/help")}>
            {ICONS.help} Help & FAQ
          </button>
        </nav>

        <div className="drawer-footer">
          <img src="/images/icons/logo.png" width={70} height={20} alt="PERRY" />
        </div>
      </aside>
    </>
  );
}