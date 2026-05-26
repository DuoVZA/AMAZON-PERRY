import './ProductCardsContainer.css';
import ProductCard from '../../Main/ProductSlider/ProductCard/ProductCard';
import { useState, createContext, useContext } from "react";
import { LayoutContext } from "../ProductListMain";

export function ProductCardsContainer(props) {
  const { layout, setLayout } = useContext(LayoutContext);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(props.products.length / layout.count);
  const currentItems = props.products.slice((currentPage - 1) * layout.count, currentPage * layout.count);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='ProductCardsContainer'>
      <div className='CardsContainer big'>
        {currentItems.map(elem => <ProductCard item={elem} ></ProductCard>)}
      </div>
      <div className='pageNumbersContainer'>
        <button id='previousBTN' disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>
          <img src='./images/icons/Arrow_Left.png' />
        </button>
        {pageNumbers.map((number) => (
          <a className="pageNumber" key={number}>
            <button className={currentPage === number ? "current" : ""} onClick={() => setCurrentPage(number)}>
              {number}
            </button>
          </a>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>
          <img id='nextBTN' src='./images/icons/Arrow_Left.png' />
        </button>
      </div>
    </div>
  );
}