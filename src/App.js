import './App.css'
import { CategorySlider } from './components/CategorySlider/CategorySlider';

function App() {
  return (
    <main className="main">
      <div className="main-container">
        <CategorySlider/>
        <section className="products-section">
          <h2>Trending Deals</h2>
        </section>
      </div>
    </main>
  );
}

export default App;