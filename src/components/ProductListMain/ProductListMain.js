import './ProductListMain.css';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductListFiltersAside } from '../ProductListFiltersAside/ProductListFiltersAside';
import { ProductListFilters } from '../ProductListFilters/ProductListFilters';
import { createContext, useState, useEffect } from 'react';



export const LayoutContext = createContext();

export function ProductListMain(props) {
  
  const [layout, setLayout] = useState("ProductCard-big");

  useEffect(() => {
    console.log(layout);
  }, [layout]);

  let products = [
    { size: layout, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/e3324518fae647e41e812ea1a7aca05555347513.jpg', name: "Radiant Elegance Women's Summer Sleeveless Red Sundress – Lightweight, Flowy, and Perfect for Beach or Casual Wear", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/e84e9cf1047b6cf50615eee311207e6cbe262271.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/d363949f776baa005ce979be414a1f8c2e5a1077.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/d396e6068cd525590f9e988856354570a86751cd.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/d23f40b0b5bc47bbcce5388046494f130b3e4759.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/ad967c765b4e9352dd1d134a5ac133e2cb95e5a3.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/0522fdb4c364fbb09ff852226ee8eb55c7006a21.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/59bde5c647cf7755e546209c82901b6b0d2157c3.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/16fe01391d6af2cfc10faac71320e03b8b8c9e34.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/6e2e55f0bddfdf51465db90fded8480f8149ec66.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/5c0e58f4179c3c2ab317b32e58e25b73f23e2895.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/2b594c2c74dc36e04df4fac38b77619bd72cd3f7.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
  ]
  return (<LayoutContext.Provider value={{ layout, setLayout }}>
    <div className="ProductListMain">
      <h2 className='CategoryName'>{props.category}</h2>
      <div className='wrapper'>
        <ProductListFiltersAside />
        <div className='mainContainer'>
          <ProductListFilters />
          <div id='CardsContainer'>
            {products.map(elem => <ProductCard item={elem} ></ProductCard>)}
          </div>
        </div>
      </div>
    </div>
  </LayoutContext.Provider>
  );
}

