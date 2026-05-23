import './ProductListMain.css';
import { ProductListFiltersAside } from './ProductListFiltersAside/ProductListFiltersAside';
import { ProductListFilters } from './ProductListFilters/ProductListFilters';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs'
import { ProductCardsContainer } from './ProductCardsContainer/ProductCardsContainer';
import { createContext, useState, useEffect } from 'react';

export const LayoutContext = createContext();

export function ProductListMain(props) {

  const [layout, setLayout] = useState({ size: "ProductCard-big", count: 12 });
  useEffect(() => {
    document.querySelector(".CardsContainer").classList.toggle("big");
  }, [layout]);

  let products = [
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/e3324518fae647e41e812ea1a7aca05555347513.jpg', name: "Radiant Elegance Women's Summer Sleeveless Red Sundress – Lightweight, Flowy, and Perfect for Beach or Casual Wear", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/e84e9cf1047b6cf50615eee311207e6cbe262271.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/d363949f776baa005ce979be414a1f8c2e5a1077.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/d396e6068cd525590f9e988856354570a86751cd.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/d23f40b0b5bc47bbcce5388046494f130b3e4759.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/ad967c765b4e9352dd1d134a5ac133e2cb95e5a3.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/0522fdb4c364fbb09ff852226ee8eb55c7006a21.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/59bde5c647cf7755e546209c82901b6b0d2157c3.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/16fe01391d6af2cfc10faac71320e03b8b8c9e34.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/6e2e55f0bddfdf51465db90fded8480f8149ec66.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/5c0e58f4179c3c2ab317b32e58e25b73f23e2895.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/2b594c2c74dc36e04df4fac38b77619bd72cd3f7.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },

    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/1-9c028951538772dda4ff34723f872520baac21c0.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/2-4ef469284aa6c97b9a2a03c0589af80744130eb2.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/3-6c8e0fe92ef2de57eedd7ff9b83d00e2375ad5c3.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/4-296e4fb3b7a3def78f8ea5ea38deabd6dc6a1f6a.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/5-3ed254b43b757198afa27009f2637da0c607fcd4.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/6-48db6ce16103c85ee21a829b6db6bc72f55ec40d.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/7-500021b3fcfe1f6204c7abfe48e884d7525fd0a9.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/8-6db99a222c1969152a4f10aebfea66462a0685a0.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/9-58f69070853c33b294b5c843ca0e992ecbeefc0f.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/10-0c0d92f2fdd0a1dba3ea6210eb1aba42d782bf57.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/11-627bdd8286a4ab08f16d093dd4fcd150605ed908.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/12-554c411ffda0064addec1b839c4b608048ef7e86.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/13-caef6750881587854c4b22df6bbb211c6a9965ed.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/14-3072cfcc47abd76330c7a5572857ea5a5013ae57.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/15-913bba58e4601f37280c174e3967f7af443779bf.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/16fe01391d6af2cfc10faac71320e03b8b8c9e34.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/17-a43e849e457d30936f4e6c0c60f6dfe002383567.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" },
    { size: layout.size, unavailable: "available", wishlist: "hide", sale: "hide", discount: "-17%", img: './images/products/18-a6dfb1507016330a4d5a2f03c97d1525172d6bce.jpg', name: "SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars: "4", comments: "1547", oldPrice: "$14.20", price: "18", priceCents: "99" }
  ]
  return (<LayoutContext.Provider value={{ layout, setLayout }}>
    <div className="ProductListMain">
      <div id="center">
        <Breadcrumbs />
        <h2 className='CategoryName'>{props.category}</h2>
        <div className='wrapper'>
          <ProductListFiltersAside />
          <div className='mainContainer'>
            <ProductListFilters />
            <hr />
            <ProductCardsContainer products={products} />
          </div>
        </div>
      </div>
    </div>
  </LayoutContext.Provider>
  );
}

