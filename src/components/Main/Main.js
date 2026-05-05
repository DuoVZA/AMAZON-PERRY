import "./Main.css";
import Add from "./Advertisement/Add";
import LogSignBar from "./LogSignBar/LogSignBar";
import TrendingDealCard from "./TrendingDealCard/TrendingDealCard";

export default function Main() {
  return (
    <main className="main">
      <div className="main-container">
        <Add />

        <section className="products-section">
          <h2>Trending Deals</h2>
          <TrendingDealCard/>
        </section>

        <LogSignBar imageSrc="/images/banners/Banner-LoginSignup-Desktop.png"/>
      </div>
    </main>
  );
}