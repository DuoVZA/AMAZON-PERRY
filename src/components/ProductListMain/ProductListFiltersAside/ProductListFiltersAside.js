import './ProductListFiltersAside.css';
import React from 'react';
import { useEffect, useState } from "react"

const brands = [
  { id: 1, name: "PUMIEY" },
  { id: 2, name: "Abardsion" },
  { id: 3, name: "Trendy Queen" },
  { id: 4, name: "Roselux" },
  { id: 5, name: "Darong" },
  { id: 6, name: "KevaMolly" },
  { id: 7, name: "AUTOMET" },
  { id: 8, name: "PUMA" },
  { id: 9, name: "H&M" },
  { id: 10, name: "Adidas" },
  { id: 11, name: "Nike" },
  { id: 12, name: "Zara" },
  { id: 13, name: "Gucci" },
  { id: 14, name: "Levi’s" }
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
  { name: "White" },
  { name: "Black" },
  { name: "Red" },
  { name: "Yellow" },
  { name: "Orange" },
  { name: "Green" },
  { name: "Azure" },
  { name: "Blue" },
  { name: "Purple" },
  { name: "Pink" },
  { name: "Brown" },
  { name: "Grey" },
  { name: "Auburn" },
  { name: "Burgundy" },
  { name: "Crimson" },
  { name: "Scarlet" },
  { name: "Ruby" },
  { name: "Magenta" },
  { name: "Coral" },
  { name: "Raspberry" },
  { name: "Salmon" },
  { name: "Copper" },
  { name: "Flame" },
  { name: "Tangerine" },
  { name: "Golden" },
  { name: "Amber" },
  { name: "Sand" },
  { name: "Saffron" },
  { name: "Cream" }
]

const reviews = [
  { img1: "./images/icons/Icon-Star-full.png", img2: "./images/icons/Icon-Star-full.png", img3: "./images/icons/Icon-Star-full.png", img4: "./images/icons/Icon-Star-full.png", img5: "./images/icons/Icon-Star-full.png" },
  { img1: "./images/icons/Icon-Star-full.png", img2: "./images/icons/Icon-Star-full.png", img3: "./images/icons/Icon-Star-full.png", img4: "./images/icons/Icon-Star-full.png", img5: "./images/icons/Icon-Star-empty.png" },
  { img1: "./images/icons/Icon-Star-full.png", img2: "./images/icons/Icon-Star-full.png", img3: "./images/icons/Icon-Star-full.png", img4: "./images/icons/Icon-Star-empty.png", img5: "./images/icons/Icon-Star-empty.png" },
  { img1: "./images/icons/Icon-Star-full.png", img2: "./images/icons/Icon-Star-full.png", img3: "./images/icons/Icon-Star-empty.png", img4: "./images/icons/Icon-Star-empty.png", img5: "./images/icons/Icon-Star-empty.png" },
  { img1: "./images/icons/Icon-Star-full.png", img2: "./images/icons/Icon-Star-empty.png", img3: "./images/icons/Icon-Star-empty.png", img4: "./images/icons/Icon-Star-empty.png", img5: "./images/icons/Icon-Star-empty.png" }
]

export function Filter(props) {
  const [dropdown, setDropdown] = React.useState("closed");
  function HandleDropdown() {
    let value = (dropdown == 'closed' ? 'open' : 'closed');
    setDropdown(value);
    document.getElementById(props.filter).classList.add(value);
    document.getElementById(props.filter).classList.remove(dropdown);
  }

  const [slider, setSlider] = React.useState({ from: "12", to: "100" });

  return <div id={props.filter} className={props.style + " filter closed"}>
    <div className='dropdown-container'><h2>{props.filter}</h2><button onClick={HandleDropdown}><img src='./images/icons/Arrow_up.png' /></button></div>
    <div id='filter-dropdown'>
      <div className={props.style + " SearchContainer"}>
        <button className="search-btn"><img src='./images/icons/search-Icon.png' /></button>
        <input
          className="search-bar"
          placeholder="Search..."
          type="text"
        />
      </div>
      <div className={props.style + ' SliderContainer'}>
        <div class="SliderNumbers">
          <div>
            <input class="SliderNumberInput" type="number" id="fromInput" value={slider.from} min="0" max="100" />
            <span />
            <input class="SliderNumberInput" type="number" id="toInput" value={slider.to} min="0" max="100" />
          </div>
          <button>Save</button>
        </div>
        <div className='wrapper'>
          <input id='FromSlider' type='range' min="0" max="250" value={slider.from} onChange={(event) => {
            if (slider.to - +event.target.value >= 5) {
              const value = Math.max(+event.target.value);
              setSlider({ from: value.toString(), to: slider.to });
              event.target.value = value.toString();
            }
            else {
              const value = Math.max(slider.to - 5);
              setSlider({ from: value.toString(), to: slider.to });
              event.target.value = value.toString();
            }
          }} />
          <input id='ToSlider' type='range' min="0" max="250" value={slider.to} onChange={(event) => {
            if (+event.target.value - slider.from >= 5) {
              const value = Math.max(+event.target.value);
              setSlider({ from: slider.from, to: value.toString() });
              event.target.value = value.toString();
            }
            else {
              const value = Math.max(+slider.from + 5);
              setSlider({ from: slider.from, to: value.toString() });
              event.target.value = value.toString();
            }
          }} />
          <div class="sliderTrack"></div>
          <div class="sliderRange" style={{ left: `${Math.round((slider.from / 250) * 100)}%`, width: `${(Math.round(((slider.to) / 250) * 100)) - (Math.round((slider.from / 250) * 100))}%` }}></div>
        </div>
      </div>
      <ul className={props.style + 'Checkbox'}>
        {props.options.map(elem => <li><label for={elem.name}><input type='checkbox' id={elem.name}></input><span className="checkmark"></span><p className={props.style}>{elem.name}</p><span id='stars'><img src={elem.img1} /><img src={elem.img2} /><img src={elem.img3} /><img src={elem.img4} /><img src={elem.img5} /></span></label></li>)}
      </ul>
    </div>
  </div>
}

export function ProductListFiltersAside(props) {

  function showFilters() {
    document.querySelector(".ProductListFiltersAside").classList.toggle("show");
  }

  return <div>
    <button id='filterBTN' onClick={showFilters}><img src='./images/icons/Filter.png' /></button>
    <div className="ProductListFiltersAside">
      <div className='appliedFilters'>
        <h2>Filters</h2>
        <div id='searchWrapper'>
          <div className={props.style + " SearchContainer"}>
            <button className="search-btn"><img src='./images/icons/search-Icon.png' /></button>
            <input
              className="search-bar"
              placeholder="Search..."
              type="text"
            />
          </div>
          <button>Reset all</button>
        </div>
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
      </div>
      <Filter filter="Brand" style="list" options={brands} />
      <Filter filter="Fabric type" style="list" options={fabricTypes} />
      <Filter filter="Size" style="grid" options={sizes} />
      <Filter filter="Color" style="list" options={colors} />
      <Filter filter="Price" style="range" options={colors} />
      <Filter filter="Customer reviews" style="imageList" options={reviews} />
    </div>
  </div>
}

