import './App.css';
import { ProductCard } from "./components/ProductCard/ProductCard";
import { CategoryCard } from "./components/CategoryCard/CategoryCard";

function App() {
  return (
    <div className="App">
      {/* <ProductCard img="./images/categories/Tools-for-leather-products-favorable-prices.png" name="Tools for leather products: favorable prices"/> */}
      <CategoryCard img="./images/categories/Tools-for-leather-products-favorable-prices.png" name="Tools for leather products: favorable prices"/>
    </div>
  );
}

export default App;
