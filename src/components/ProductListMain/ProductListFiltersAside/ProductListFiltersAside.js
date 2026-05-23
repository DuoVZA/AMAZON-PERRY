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
  function slideOne(e) {
    setSlider({ from: e, to: slider.to });
    if (parseInt(slider.to) - parseInt(e) <= 5) {
      setSlider({ from: parseInt(slider.to) - 5, to: slider.to });
    }
    fillColor();
  }

  function slideTwo(e) {
    setSlider({ from: slider.from, to: e })
    if (parseInt(slider.to) - parseInt(e) <= 5) {
      setSlider({ from: slider.from, to: parseInt(slider.from) + 5 })
    }
    fillColor();
  }

  function fillColor() {
    let percent1 = (parseInt(slider.from) / 250) * 100;
    let percent2 = (parseInt(slider.to) / 250) * 100;
    document.querySelector(".sliderTrack").style.background = "red";
  }

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
        <div class="form_control">
          <div class="form_control_container">
            <input class="form_control_container__time__input" type="number" id="fromInput" value={slider.from} min="0" max="100" />
          </div>
          <div class="form_control_container">
            <input class="form_control_container__time__input" type="number" id="toInput" value={slider.to} min="0" max="100" />
          </div>
        </div>
        <div className='wrapper'>
          <input id='FromSlider' type='range' min="0" max="250" onInput={fillColor} />
          <input id='ToSlider' type='range' min="0" max="250" onInput={fillColor} />
          <div class="sliderTrack"></div>
        </div>
      </div>
      <ul className={props.style + 'Checkbox'}>
        {props.options.map(elem => <li><label for={elem.name}><input type='checkbox' id={elem.name}></input><span className="checkmark"></span><p className={props.style}>{elem.name}</p><span id='stars'><img src={elem.img1} /><img src={elem.img2} /><img src={elem.img3} /><img src={elem.img4} /><img src={elem.img5} /></span></label></li>)}
      </ul>
    </div>
  </div>
}

export function ProductListFiltersAside(props) {

  function showFilters()
  {
    document.querySelector(".ProductListFiltersAside").classList.toggle("show");
  }

  return <div>
    <button id='filterBTN' onClick={showFilters}><img src='./images/icons/Filter.png' /></button>
    <div className="ProductListFiltersAside">
      <Filter filter="Brand" style="list" options={brands} />
      <Filter filter="Fabric type" style="list" options={fabricTypes} />
      <Filter filter="Size" style="grid" options={sizes} />
      <Filter filter="Color" style="list" options={colors} />
      <Filter filter="Price" style="range" options={colors} />
      <Filter filter="Customer reviews" style="imageList" options={reviews} />
    </div>
  </div>
}

