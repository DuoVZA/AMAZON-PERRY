import './ProductListMain.css';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductListFiltersAside } from '../ProductListFiltersAside/ProductListFiltersAside';


const products = [
  {size:"ProductCard-small", unavailable:"available", wishlist:"hide", sale:"hide", discount:"-17%", img:'./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png', name:"SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars:"4", comments:"1547", oldPrice:"$14.20", price:"18", priceCents:"99"},
  {size:"ProductCard-small", unavailable:"available", wishlist:"hide", sale:"hide", discount:"-17%", img:'./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png', name:"SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars:"4", comments:"1547", oldPrice:"$14.20", price:"18", priceCents:"99"},
  {size:"ProductCard-small", unavailable:"available", wishlist:"hide", sale:"hide", discount:"-17%", img:'./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png', name:"SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars:"4", comments:"1547", oldPrice:"$14.20", price:"18", priceCents:"99"},
  {size:"ProductCard-small", unavailable:"available", wishlist:"hide", sale:"hide", discount:"-17%", img:'./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png', name:"SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars:"4", comments:"1547", oldPrice:"$14.20", price:"18", priceCents:"99"},
  {size:"ProductCard-small", unavailable:"available", wishlist:"hide", sale:"hide", discount:"-17%", img:'./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png', name:"SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars:"4", comments:"1547", oldPrice:"$14.20", price:"18", priceCents:"99"},
  {size:"ProductCard-small", unavailable:"available", wishlist:"hide", sale:"hide", discount:"-17%", img:'./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png', name:"SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars:"4", comments:"1547", oldPrice:"$14.20", price:"18", priceCents:"99"},
  {size:"ProductCard-small", unavailable:"available", wishlist:"hide", sale:"hide", discount:"-17%", img:'./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png', name:"SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars:"4", comments:"1547", oldPrice:"$14.20", price:"18", priceCents:"99"},
  {size:"ProductCard-small", unavailable:"available", wishlist:"hide", sale:"hide", discount:"-17%", img:'./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png', name:"SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars:"4", comments:"1547", oldPrice:"$14.20", price:"18", priceCents:"99"},
  {size:"ProductCard-small", unavailable:"available", wishlist:"hide", sale:"hide", discount:"-17%", img:'./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png', name:"SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars:"4", comments:"1547", oldPrice:"$14.20", price:"18", priceCents:"99"},
  {size:"ProductCard-small", unavailable:"available", wishlist:"hide", sale:"hide", discount:"-17%", img:'./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png', name:"SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars:"4", comments:"1547", oldPrice:"$14.20", price:"18", priceCents:"99"},
  {size:"ProductCard-small", unavailable:"available", wishlist:"hide", sale:"hide", discount:"-17%", img:'./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png', name:"SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars:"4", comments:"1547", oldPrice:"$14.20", price:"18", priceCents:"99"},
  {size:"ProductCard-small", unavailable:"available", wishlist:"hide", sale:"hide", discount:"-17%", img:'./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png', name:"SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars:"4", comments:"1547", oldPrice:"$14.20", price:"18", priceCents:"99"},
  {size:"ProductCard-small", unavailable:"available", wishlist:"hide", sale:"hide", discount:"-17%", img:'./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png', name:"SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel", stars:"4", comments:"1547", oldPrice:"$14.20", price:"18", priceCents:"99"},
]

export function ProductListMain(props) {
  return <div className="ProductListMain">
    <ProductListFiltersAside/>
    <div id='container'>
      {products.map(elem => <ProductCard item={elem} ></ProductCard>)}
    </div>
  </div>

}

