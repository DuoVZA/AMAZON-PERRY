import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import MBFLS from "./components/LoginSignupPageBar/MainBarForLogSign/MBFLS";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState(null);

  const handleOpenLogin = (mode) => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <Header
        onBurgerClick={() => setMenuOpen(true)}
        onLogSignClick={() => handleOpenLogin("login")}
      />

      <MenuBar
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenLogin={handleOpenLogin}
      />

      <MBFLS
  isOpen={authOpen}
  onClose={() => setAuthOpen(false)}
  imageSrc="/images/banners/Rectangle 413.png"
  initialMode={authMode}
  onLoginSuccess={handleLoginSuccess}
/>

      <Routes>
        <Route path="/" element={<Main onOpenLogin={handleOpenLogin} />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
