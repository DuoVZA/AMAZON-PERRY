import "./LogSignBar.css";

export default function LogSignBar({ imageSrc, onOpenLogin }) { // Добавляем onOpenLogin
  const handleSignUp = () => {
    onOpenLogin('signup');
  };

  const handleLogIn = () => {
    onOpenLogin('login');
  };

  return (
    <div className="promo-banner">
      <div className="promo-container">
        {/* Контент по центру */}
        <div className="promo-content">
          <h2 className="promo-title">Abundance of goods</h2>
          <p className="promo-description">
            Join, choose and buy with confidence!
          </p>
          <div className="promo-buttons">
            <button className="promo-btn signup-btn1" onClick={handleSignUp}>
              Sign up
            </button>
            <button className="promo-btn login-btn1" onClick={handleLogIn}>
              Log in
            </button>
          </div>
        </div>

        {/* Изображение справа */}
        <div className="promo-image">
          {imageSrc && (
            <img src={imageSrc} alt="Promo" className="promo-image-img" />
          )}
        </div>
      </div>
    </div>
  );
}