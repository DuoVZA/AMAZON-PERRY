import './ProductListFilters.css';
import { useContext } from "react";
import { LayoutContext } from "../ProductListMain";


export function ProductListFilters() {
  const { layout, setLayout } = useContext(LayoutContext);

  function handleChange(e) {
    let value = (e.target.checked ? "ProductCard-small" : "ProductCard-big");
    let countValue = (e.target.checked ? 30 : 12);
    setLayout({ size: value, count: countValue });
  }

  function showDropdown()
  {
    document.querySelector(".dropdown-content").classList.toggle("show");
  }


  return (
    <div className="ProductListFilters">
      <div class="dropdown">
        <button class="appliedFilters" onClick={showDropdown}>10 filters applied <img src='./images/icons/Arrow_Up.png' alt='show applied filters'/></button>
        <div class="dropdown-content">
          <div>
            <span><p>PUMIEY</p> <img src='./images/icons/Close.png' alt='close' /></span>
            <span><p>Abardsion</p> <img src='./images/icons/Close.png' alt='close' /></span>
            <span><p>Trendy Queen</p> <img src='./images/icons/Close.png' alt='close' /></span>
            <span><p>Silk</p> <img src='./images/icons/Close.png' alt='close' /></span>
            <span><p>Cotton</p> <img src='./images/icons/Close.png' alt='close' /></span>
            <span><p>Darong</p> <img src='./images/icons/Close.png' alt='close' /></span>
            <span><p>Elastane</p> <img src='./images/icons/Close.png' alt='close' /></span>
            <span><p>White</p> <img src='./images/icons/Close.png' alt='close' /></span>
            <span><p>Black</p> <img src='./images/icons/Close.png' alt='close' /></span>
            <span><p>Yellow</p> <img src='./images/icons/Close.png' alt='close' /></span>
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
          <img id="product3" src='./images/icons/Product quantity-3.png' alt='Product quantity-3' />
          <img id="product5" src='./images/icons/Product quantity-5.png' alt='Product quantity-5' />
          <label class="switch">
            <input type="checkbox" onChange={handleChange} />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}
