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
  { name: "H&M" }
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
  { name: "Stockinet" }
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
      <div className="search-container">
        <button className="search-btn"><img src='./images/icons/search-Icon.png' /></button>
        <input
          className="search-bar"
          placeholder="Search..."
          type="text"
        />
      </div>
      <ul>
        {props.options.map(elem => <li><label for={elem.name}><input type='checkbox' id={elem.name}></input><span class="checkmark"></span> {elem.name}</label></li>)}
      </ul>
    </div>
  </div>
}

export function ProductListFiltersAside(props) {
  return <div className="ProductListFiltersAside">
    <Filter filter="Brand" style="list" options={brands} />
    <Filter filter="Fabric type" style="list" options={fabricTypes} />
  </div>
}

