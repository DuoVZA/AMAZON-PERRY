import "./Header.css";

const ICONS = {
  logo: <img src="/images/icons/logo.png" width={81.68} height={20.06} alt="PERRY" />,
  user: <img src="/images/icons/account-Icon.png" width={24} height={24} alt="Account" />,
  cart: <img src="/images/icons/cart-Icon.png" width={24} height={24} alt="Cart" />,
  search: <img src="/images/icons/search-Icon.png" width={24} height={24} alt="Search" />,
};

export default function Header({ onBurgerClick }) {
  return (
    <header className="header">
      {/* Бургер */}
      <button
        className="burger-btn"
        onClick={onBurgerClick}
        aria-label="Открыть меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Логотип */}
      <div className="logo" onClick={() => window.location.href = "/"}>
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

      {/* Иконки */}
      <div className="header-icons">
        <button className="icon-btn" onClick={() => window.location.href = "/login"}>
          {ICONS.user}
        </button>
        <button className="icon-btn" onClick={() => window.location.href = "/cart"}>
          {ICONS.cart}
        </button>
      </div>
    </header>
  );
}