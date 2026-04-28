import SeachLittle from '../SeachLittle/SeachLittle';
import styles from './Header.module.css';
import React from 'react';
let ButtonBuy = "../../images/icons/ButtonBuy.png"
let ButtonSearch = "../../images/icons/ButtonSearch.png"
let ButtonBurger = "../../images/icons/ButtonBurger.png"
let ButtonPeople = "../../images/icons/ButtonPeople.jpg"

const Header = () => (
    <div className="header">
      <SeachLittle ButtonBuy={ButtonBuy}
       ButtonSearch={ButtonSearch} 
       ButtonBurger={ButtonBurger}
        />
      <SeachLittle 
        ButtonBuy={ButtonBuy} 
        ButtonSearch={ButtonSearch} 
        ButtonBurger={ButtonBurger} 
        ButtonPeople={ButtonPeople}
        customStyle={{ backgroundColor: '#b22727',
       

         }}
      />
    </div>
);

export default Header;