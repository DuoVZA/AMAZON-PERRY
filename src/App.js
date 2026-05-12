import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import Footer from "./components/Footer/Footer";
import {ProductListMain} from "./components/ProductListMain/ProductListMain";
import ProductListFilters from "./components/ProductListFilters/ProductListFilters";
import ProductListFiltersAside from "./components/ProductListFiltersAside/ProductListFiltersAside";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

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
        <Route path="/ProductList" element={<ProductListMain />} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;