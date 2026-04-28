import "./Main.css";
import Add from "./Advertisement/Add"; // Убираем фигурные скобки, так как export default

export default function Main() {  // Добавляем export default
  return (
    <main className="main">
      <div className="main-container">
        <Add />

        <section className="products-section">
          <h2>Trending Deals</h2>
          {/* Товары и т.д. */}
        </section>
      </div>
    </main>
  );
}