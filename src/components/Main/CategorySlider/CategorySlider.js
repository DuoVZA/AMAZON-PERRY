import './CategorySlider.css';
import { useRef } from 'react';
import { CategoryCard } from './CategoryCard/CategoryCard';

const categoriesFirst = [
  {img:'/images/categories/Tools-for-leather-products-favorable-prices.png', name:'Tools for leather products: favorable prices'},
  {img:'/images/categories/Electronics-with-discount-buy-time.png', name:'Electronics with discount: buy time'},
  {img:'/images/categories/A-set-of-garden-tools-bargain-price.png', name:'A set of garden tools: bargain price'},
  {img:'/images/categories/Summer-care-cosmetics-freshness-and-protection.png', name:'Summer care cosmetics: freshness and protection'},
  {img:'/images/categories/Baby-clothes-up-to-25-comfort-and-style.png', name:'Baby clothes up to $25 comfort and style'},
  {img:'/images/categories/Stylish-womens-clothing-new-season.png', name:'Stylish women’s clothing: new season'},
  {img:'/images/categories/Household-chemicals.png', name:'Household chemicals up to $15: quality and Savings'},
  {img:'/images/categories/Swimsuits-competitive-prices.png', name:'Swimsuits: competitive prices'},
  {img:'/images/categories/Sports-equipment.png', name:'Sports equipment bestseller: hit sales'},
  {img:'/images/categories/Fashionable-childrens-clothes.png', name:'Fashionable children’s clothes for girls: vivid images'},
  {img:'/images/categories/Musical-instruments.png', name:'Musical instruments: sale, super prices'},
  {img:'/images/categories/Fashion-sunglasses.png', name:'Fashion sunglasses: this month’s best sellers!'}
];

const categoriesSecond = [
  {img:'/images/categories/Household-chemicals.png', name:'Household chemicals up to $15: quality and Savings'},
  {img:'/images/categories/Swimsuits-competitive-prices.png', name:'Swimsuits: competitive prices'},
  {img:'/images/categories/Sports-equipment.png', name:'Sports equipment bestseller: hit sales'},
  {img:'/images/categories/Fashionable-childrens-clothes.png', name:'Fashionable children’s clothes for girls: vivid images'},
  {img:'/images/categories/Musical-instruments.png', name:'Musical instruments: sale, super prices'},
  {img:'/images/categories/Fashion-sunglasses.png', name:'Fashion sunglasses: this month’s best sellers!'},
  {img:'/images/categories/Tools-for-leather-products-favorable-prices.png', name:'Tools for leather products: favorable prices'},
  {img:'/images/categories/Electronics-with-discount-buy-time.png', name:'Electronics with discount: buy time'},
  {img:'/images/categories/A-set-of-garden-tools-bargain-price.png', name:'A set of garden tools: bargain price'},
  {img:'/images/categories/Summer-care-cosmetics-freshness-and-protection.png', name:'Summer care cosmetics: freshness and protection'},
  {img:'/images/categories/Baby-clothes-up-to-25-comfort-and-style.png', name:'Baby clothes up to $25 comfort and style'},
  {img:'/images/categories/Stylish-womens-clothing-new-season.png', name:'Stylish women’s clothing: new season'}
];

export default function CategorySlider({ categories = 'first' }) {  
  const sliderRef = useRef(null);
  const data = categories === 'first' ? categoriesFirst : categoriesSecond;

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="slider-wrapper">
      <div id="container" ref={sliderRef}>
        {data.map((elem, index) => (
          <CategoryCard key={index} item={elem} />
        ))}
      </div>
      
      <button className="arr-btn arr-left" onClick={goToPrev}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="rgba(74, 123, 217, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button className="arr-btn arr-right" onClick={goToNext}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="rgba(74, 123, 217, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}