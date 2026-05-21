import './ProductListFilters.css';
import { useState, createContext, useContext } from "react";
import { LayoutContext } from "../ProductListMain/ProductListMain";


export function ProductListFilters() {
  const { layout, setLayout } = useContext(LayoutContext);

  function handleChange(e) {
    let value = (e.target.checked ? "ProductCard-small" : "ProductCard-big");
    setLayout(value);
  }

  function showDropdown()
  {
    document.querySelector(".dropdown-content").classList.toggle("show");
  }


  return (
    <div className="ProductListFilters">
      <div class="dropdown">
        <button class="appliedFilters" onClick={showDropdown}>10 filters applied <img src='./images/icons/Arrow_Up.png' /></button>
        <div class="dropdown-content">
          <div>
            <span><p>PUMIEY</p> <img src='./images/icons/Close.png' /></span>
            <span><p>Abardsion</p> <img src='./images/icons/Close.png' /></span>
            <span><p>Trendy Queen</p> <img src='./images/icons/Close.png' /></span>
            <span><p>Silk</p> <img src='./images/icons/Close.png' /></span>
            <span><p>Cotton</p> <img src='./images/icons/Close.png' /></span>
            <span><p>Darong</p> <img src='./images/icons/Close.png' /></span>
            <span><p>Elastane</p> <img src='./images/icons/Close.png' /></span>
            <span><p>White</p> <img src='./images/icons/Close.png' /></span>
            <span><p>Black</p> <img src='./images/icons/Close.png' /></span>
            <span><p>Yellow</p> <img src='./images/icons/Close.png' /></span>
          </div>
          <hr />
          <p>Clear all</p>
        </div>
      </div>
      <div className='layoutFilters'>
        <select name="sort" id="sort">
          <option value="ByRating" >By rating</option>
          <option value="Novelty" >Novelty</option>
          <option value="CheapToExpensive" >Cheap to expensive</option>
          <option value="ExpensiveToCheap" >Expensive to cheap</option>
        </select>
        <div class="switchContainer">
          <img id="product3" src='./images/icons/Product quantity-3.png' />
          <img id="product5" src='./images/icons/Product quantity-5.png' />
          <label class="switch">
            <input type="checkbox" onChange={handleChange} />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}
