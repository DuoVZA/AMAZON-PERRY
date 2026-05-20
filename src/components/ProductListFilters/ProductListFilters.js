import './ProductListFilters.css';


export function ProductListFilters() {
  return (
    <div className="ProductListFilters">
      <select name="sort" id="sort">
        <option value="ByRating" >By rating</option>
        <option value="Novelty" >Novelty</option>
        <option value="CheapToExpensive" >Cheap to expensive</option>
        <option value="ExpensiveToCheap" >Expensive to cheap</option>
      </select>
      <label class="switch">
        <input type="checkbox"/>
          <span class="slider"></span>
          <img src='./images/icons/Product quantity-3.png'/>
          <img src='./images/icons/Product quantity-5.png'/>
      </label>

    </div>
  );
}
