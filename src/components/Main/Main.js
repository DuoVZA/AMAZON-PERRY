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

        <div className="line"></div>

        <section className="products-section1">
          <h2>Trending Deals</h2>
          {/* <a><p>See all</p></a> */}
          <ProductSlider categories="trending"/>
        </section>

        <div className="line1"></div>

        <section className="products-section">
          <CategorySlider categories="second"/>
        </section>

        <div className="line"></div>

        <section className="products-section1">
          <h2>Sales</h2>
          <ProductSlider categories="sales"/>
        </section>

        <div className="line1"></div>

        <LogSignBar imageSrc="/images/banners/Banner-LoginSignup-Desktop.png" onOpenLogin={onOpenLogin}/>
      </div>
    </main>
  );
}