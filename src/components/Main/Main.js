import "./Main.css";
import Add from "./Advertisement/Add";
import LogSignBar from "./LogSignBar/LogSignBar";
import ProductSlider from "./ProductSlider/ProductSlider";
import CategorySlider from "./CategorySlider/CategorySlider";

export default function Main({ onOpenLogin }) {
  return (
    <main className="main">
      <div className="main-container">
        <Add />

        <section className="products-section">
          <CategorySlider categories="first"/>
        </section>

        <section className="products-section1">
          <h2>Trending Deals</h2>
          <ProductSlider categories="trending"/>
        </section>

        <section className="products-section">
          <CategorySlider categories="second"/>
        </section>

        <section className="products-section1">
          <h2>Sales</h2>
          <ProductSlider categories="sales"/>
        </section>

        <LogSignBar imageSrc="/images/banners/Banner-LoginSignup-Desktop.png" onOpenLogin={onOpenLogin}/>
      </div>
    </main>
  );
}