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
          <CategorySlider categories="first" />
        </section>

        <div className="line"></div>

        <section className="products-section1">
          <div className="head">
            <h2>Trending Deals</h2>

            <a href="" className="see_all">
              <p>See all</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="rgba(74, 123, 217, 1)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <ProductSlider categories="trending" />
          <a href="" className="see_all_btn">See all</a>
        </section>

        <div className="line1"></div>

        <section className="products-section">
          <CategorySlider categories="second" />
        </section>

        <div className="line"></div>

        <section className="products-section1">
          <div className="head">
            <h2>Sales</h2>
            <a href="" className="see_all">
              <p>See all</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="rgba(74, 123, 217, 1)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <ProductSlider categories="sales" />
          <a href="" className="see_all_btn">See all</a>
        </section>

        <div className="line1"></div>

        <LogSignBar
          imageSrc="/images/banners/Banner-LoginSignup-Desktop.png"
          mobileImageSrc="/images/banners/Banner-LoginSignup-Mobile.png"
          onOpenLogin={onOpenLogin}
        />
      </div>
    </main>
  );
}
