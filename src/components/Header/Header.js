import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const ICONS = {
  logo: <img src="/images/icons/logo.png" width={81.68} height={20.06} alt="PERRY" />,
  user: <img src="/images/icons/account-Icon.png" width={24} height={24} alt="Account" />,
  cart: <img src="/images/icons/cart-Icon.png" width={24} height={24} alt="Cart" />,
  search: <img src="/images/icons/search-Icon.png" width={24} height={24} alt="Search" />,
};

const USER = {
  name: "Marsha Shields",
  role: "Customer",
  avatarUrl: null,
};

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className="header">
        {/* Бургер — теперь 32×32 как на картинке */}
        <button
          className="burger-btn"
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Логотип — точный размер 81.68 × 20.06 */}
        <div className="logo" onClick={() => navigate("/")}>
          {ICONS.logo}
        </div>

        {/* Поиск */}
        <div className="search-container">
          <input
            className="search-bar"
            placeholder="Search..."
            type="text"
          />
          <button className="search-btn">{ICONS.search}</button>
        </div>

        {/* Иконки справа */}
        <div className="header-icons">
          <button className="icon-btn" onClick={() => navigate("/login")}>
            {ICONS.user}
          </button>
          <button className="icon-btn" onClick={() => navigate("/cart")}>
            {ICONS.cart}
          </button>
        </div>
      </header>

      {/* Боковое меню */}
      <>
        <div 
          className={`overlay ${drawerOpen ? "visible" : ""}`} 
          onClick={closeDrawer}
        />

        <aside className={`drawer ${drawerOpen ? "open" : ""}`}>
          <div className="drawer-profile">
            <div className="avatar">
              {USER.avatarUrl ? (
                <img src={USER.avatarUrl} alt={USER.name} />
              ) : (
                <span>👤</span>
              )}
            </div>
            <div>
              <div className="profile-name">{USER.name}</div>
              <div className="profile-role">{USER.role}</div>
            </div>
          </div>

          <nav className="drawer-nav">
            <button className="nav-item" onClick={() => { navigate("/"); closeDrawer(); }}>
              📦 Product catalog
            </button>
            <button className="nav-item" onClick={() => { navigate("/settings"); closeDrawer(); }}>
              ⚙️ Settings
            </button>
            <button className="nav-item" onClick={() => { navigate("/help"); closeDrawer(); }}>
              ❓ Help & FAQ
            </button>
          </nav>

          <div className="drawer-footer">
            <button 
              className="logout-btn" 
              onClick={() => { navigate("/"); closeDrawer(); }}
            >
              ⬅️ Log out
            </button>
          </div>
        </aside>
      </>
    </>
  );
}