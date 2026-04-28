import './App.css';
import { ProductCard } from "./components/ProductCard/ProductCard";
import { CategoryCard } from "./components/CategoryCard/CategoryCard";

function App() {
  return (
    <div className="App">
      <ProductCard size="ProductCard-small" unavailable="unavailable" wishlist="wishlist" sale="hide" discount="-17%" img="./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png" name="SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel" stars="4" comments="1547" oldPrice="$14.20" price="18" priceCents="99"/>
      <ProductCard size="ProductCard-small" unavailable="available" wishlist="wishlist" sale="hide" discount="-17%" img="./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png" name="SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel" stars="4" comments="1547" oldPrice="$14.20" price="18" priceCents="99"/>
      <ProductCard size="ProductCard-small" unavailable="available" wishlist="wishlist" sale="hide" img="./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png" name="SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel" stars="4" comments="1547" oldPrice="$14.20" price="18" priceCents="99"/>
      <ProductCard size="ProductCard-small" unavailable="available" wishlist="hide" sale="sale" discount="-17%" img="./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png" name="SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel" stars="4" comments="1547" oldPrice="$14.20" price="18" priceCents="99"/>
      <ProductCard size="ProductCard-small" unavailable="available" wishlist="hide" sale="sale" discount="-17%" img="./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png" name="SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel" stars="4" comments="1547" oldPrice="$14.20" price="18" priceCents="99"/>
      <ProductCard size="ProductCard-big" unavailable="unavailable" wishlist="hide" sale="sale" discount="-17%" img="./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png" name="SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel" stars="4" comments="1547" oldPrice="$14.20" price="18" priceCents="99"/>
      <ProductCard size="ProductCard-big" unavailable="available" wishlist="hide" sale="sale" discount="-17%" img="./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png" name="SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel" stars="4" comments="1547" oldPrice="$14.20" price="18" priceCents="99"/>
      <ProductCard size="ProductCard-big" unavailable="available" wishlist="hide" sale="sale" discount="-17%" img="./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png" name="SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel" stars="4" comments="1547" oldPrice="$14.20" price="18" priceCents="99"/>
      <ProductCard size="ProductCard-big" unavailable="available" wishlist="hide" sale="sale" discount="-17%" img="./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png" name="SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel" stars="4" comments="1547" oldPrice="$14.20" price="18" priceCents="99"/>
      <ProductCard size="ProductCard-big" unavailable="available" wishlist="hide" sale="sale" discount="-17%" img="./images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png" name="SOMALER Women's Cotton Wide Brim Sun Hat - UPF50+ UV Protection, Packable Beach Bucket Cap for Summer Travel" stars="4" comments="1547" oldPrice="$14.20" price="18" priceCents="99"/>
</div>
  );
}

export default App;
