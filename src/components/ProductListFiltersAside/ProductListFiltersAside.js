import './ProductListFiltersAside.css';
import React from 'react';

const brands = [
  { name: "PUMIEY" },
  { name: "Abardsion" },
  { name: "Trendy Queen" },
  { name: "Roselux" },
  { name: "Darong" },
  { name: "KevaMolly" },
  { name: "AUTOMET" },
  { name: "PUMA" },
  { name: "H&M" },
  { name: "Adidas" },
  { name: "Nike" },
  { name: "Zara" },
  { name: "Gucci" },
  { name: "Levi’s" }
]

const fabricTypes = [
  { name: "Polyamide" },
  { name: "Elastane" },
  { name: "Cotton" },
  { name: "Silk" },
  { name: "Nylon" },
  { name: "Chiffon" },
  { name: "Satin" },
  { name: "Sateen" },
  { name: "Stockinet" },
  { name: "Rayon" },
  { name: "Organza" },
  { name: "Linen" },
  { name: "Cashmere" },
  { name: "Velour" }
]

const sizes = [
  { name: "2XS" },
  { name: "XS" },
  { name: "S" },
  { name: "M" },
  { name: "L" },
  { name: "XL" },
  { name: "2XL" },
  { name: "3XL" },
  { name: "4XL" },
  { name: "5XL" },
  { name: "32" },
  { name: "34" },
  { name: "36" },
  { name: "38" },
  { name: "40" },
  { name: "42" },
  { name: "44" },
  { name: "46" },
  { name: "48" },
  { name: "50" },
  { name: "52" },
  { name: "54" },
  { name: "56" },
  { name: "58" },
  { name: "60" },
  { name: "62" },
  { name: "64" }
]

const colors = [
  {name:"White"},
  {name:"Black"},
  {name:"Red"},
  {name:"Yellow"},
  {name:"Orange"},
  {name:"Green"},
  {name:"Azure"},
  {name:"Blue"},
  {name:"Purple"},
  {name:"Pink"},
  {name:"Brown"},
  {name:"Grey"},
  {name:"Auburn"},
  {name:"Burgundy"},
  {name:"Crimson"},
  {name:"Scarlet"},
  {name:"Ruby"},
  {name:"Magenta"},
  {name:"Coral"},
  {name:"Raspberry"},
  {name:"Salmon"},
  {name:"Copper"},
  {name:"Flame"},
  {name:"Tangerine"},
  {name:"Golden"},
  {name:"Amber"},
  {name:"Sand"},
  {name:"Saffron"},
  {name:"Cream"}
]

export function Filter(props) {
  const [dropdown, setDropdown] = React.useState("closed");
  function HandleDropdown() {
    let value = (dropdown == 'closed' ? 'open' : 'closed');
    setDropdown(value);
    document.getElementById(props.filter).classList.add(value);
    document.getElementById(props.filter).classList.remove(dropdown);
  }
  
  return <div id={props.filter} className={props.style + " filter closed"}>
    <div className='dropdown-container'><h2>{props.filter}</h2><button onClick={HandleDropdown}><img src='./images/icons/Arrow_up.png' /></button></div>
    <div id='filter-dropdown'>
      <div className={props.style+" SearchContainer"}>
        <button className="search-btn"><img src='./images/icons/search-Icon.png' /></button>
        <input
          className="search-bar"
          placeholder="Search..."
          type="text"
        />
      </div>
      <div className={props.style+' SliderContainer'}>
        <div class="slider-track"></div>
        <input id='FromSlider' type='range' value="30" min="0" max="250"></input>
        <input id='ToSlider' type='range' value="30" min="0" max="250"></input>
      </div>
      <ul className={props.style+'Checkbox'}>
        {props.options.map(elem => <li><label for={elem.name}><input type='checkbox' id={elem.name}></input><span className="checkmark"></span><p>{elem.name}</p></label></li>)}
      </ul>
    </div>
  </div>
}

export function ProductListFiltersAside(props) {
  return <div className="ProductListFiltersAside">
    <Filter filter="Brand" style="list" options={brands} />
    <Filter filter="Fabric type" style="list" options={fabricTypes} />
    <Filter filter="Size" style="grid" options={sizes} />
    <Filter filter="Color" style="list" options={colors} />
    <Filter filter="Price" style="range" options={colors} />
  </div>
}

