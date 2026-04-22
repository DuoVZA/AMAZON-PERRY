import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";

// Пока заглушки для страниц (создадим позже)
const MainPage = () => <div className="MainPage"><h1>Главная страница (Main Page)</h1></div>;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Header onBurgerClick={() => setMenuOpen(true)} />

      <MenuBar 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
      />

      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Сюда будем добавлять другие страницы позже */}
      </Routes>
    </Router>
  );
}

export default App;