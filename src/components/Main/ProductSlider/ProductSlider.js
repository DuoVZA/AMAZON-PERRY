import { useRef, useState, useEffect } from 'react';
import './ProductSlider.css';
import ProductCard from './ProductCard/ProductCard';

// Оригинальные данные
const productsData = [
  {img:'/images/products/Classic -Analog-Alarm-Clock.png', name:'Classic Analog Alarm Clock, 4-inch Super', stars:'4', comments:'149', price:'67', priceCent:'99', oldPrice:'', discount:'', size:'small', sale:'hide', unavailable:''},
  {img:'/images/products/Everyday-Deadlift-Shoes Cross-Trainer-Sneakers-for-Men-and-Women.png', name:'Everyday Deadlift Shoes Cross Trainer Sneakers for Men and Women', stars:'4', comments:'149', price:'67', priceCent:'99', oldPrice:'99.99', discount:'-30%', size:'small', sale:'', unavailable:''},
  {img:'/images/products/Fresh-Vitamin-Nectar-Moisture-Glow-Face-Cream.png', name:'Fresh Vitamin Nectar Moisture Glow Face Cream', stars:'4', comments:'149', price:'67', priceCent:'99', oldPrice:'', discount:'', size:'small', sale:'hide', unavailable:''},
  {img:'/images/products/HanesMens-Heavyweight-Cotton-Crewneck-Tee.png', name:'HanesMens Heavyweight Cotton Crewneck Tee', stars:'4', comments:'149', price:'67', priceCent:'99', oldPrice:'', discount:'', size:'small', sale:'hide', unavailable:''},
  {img:'/images/products/LONDON-FOG-Womens-Long-Trench-Coat.png', name:'LONDON FOG Womens Long Trench Coat', stars:'4', comments:'149', price:'67', priceCent:'99', oldPrice:'', discount:'', size:'small', sale:'hide', unavailable:''},
  {img:'/images/products/MALACASA-LUNA-Series-12-Piece-Porcelain-Dinnerware-Set.png', name:'MALACASA LUNA Series 12 Piece Porcelain Dinnerware Set', stars:'4', comments:'149', price:'67', priceCent:'99', oldPrice:'89.99', discount:'-25%', size:'small', sale:'', unavailable:''},
  {img:'/images/products/Ninja-BN601-Professional-Plus-Food-Processor.png', name:'Ninja BN601 Professional Plus Food Processor', stars:'4', comments:'149', price:'67', priceCent:'99', oldPrice:'', discount:'', size:'small', sale:'hide', unavailable:''},
  {img:'/images/products/REORIA-Womens-Sleeveless-Bodysuit.png', name:'REORIA Womens Sleeveless Bodysuit', stars:'4', comments:'149', price:'67', priceCent:'99', oldPrice:'', discount:'', size:'small', sale:'hide', unavailable:''},
  {img:'/images/products/SHARPIE-1976527-Fine-Point-Pens.png', name:'SHARPIE 1976527 Fine Point Pens', stars:'4', comments:'149', price:'67', priceCent:'99', oldPrice:'', discount:'', size:'small', sale:'hide', unavailable:''},
  {img:'/images/products/SOMALER-Womens-Cotton-Wide-Brim-Sun-Hat.png', name:'SOMALER Womens Cotton Wide Brim Sun Hat', stars:'4', comments:'149', price:'67', priceCent:'99', oldPrice:'', discount:'', size:'small', sale:'hide', unavailable:''},
  {img:'/images/products/VANLINKER-Small-Retro-Skinny-Cat-Eye-Sunglasses-for-Women.png', name:'VANLINKER Small Retro Skinny Cat Eye Sunglasses for Women', stars:'4', comments:'149', price:'67', priceCent:'99', oldPrice:'', discount:'', size:'small', sale:'hide', unavailable:''},
  {img:'/images/products/Zeagoo-Women\'s-Casual-Summer-Shirt-Dress-with-Long-Sleeves.png', name:'Zeagoo Women\'s Casual Summer Shirt Dress with Long Sleeves', stars:'4', comments:'149', price:'67', priceCent:'99', oldPrice:'79.99', discount:'-15%', size:'small', sale:'', unavailable:''}
];

// Перевернутые данные (для второй карусели)
const productsDataReversed = [...productsData].reverse();

export default function ProductSlider({ categories = 'trending' }) {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.visualViewport?.width ?? window.innerWidth;
      setIsMobile(Math.round(width) <= 395);
    };
    checkMobile();
    window.visualViewport?.addEventListener("resize", checkMobile);
    window.addEventListener("resize", checkMobile);
    return () => {
      window.visualViewport?.removeEventListener("resize", checkMobile);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const goToPrev = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const goToNext = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const data = categories === 'trending' ? productsData : productsDataReversed;

  return (
    <div className="slider-wrapper1">
      <div id="container1" className={isMobile ? 'mobile-grid' : ''} ref={sliderRef}>
        {data.map((elem, index) => (
          <ProductCard
            key={index}
            size={elem.size}
            img={elem.img}
            name={elem.name}
            stars={elem.stars}
            comments={elem.comments}
            price={elem.price}
            priceCents={elem.priceCent}
            oldPrice={elem.oldPrice}
            discount={elem.discount}
            sale={elem.sale}
            unavailable={elem.unavailable}
          />
        ))}
      </div>

      {!isMobile && (
        <>
          <button className="arr-btn2 arr-left1" onClick={goToPrev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="rgba(74, 123, 217, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="arr-btn2 arr-right1" onClick={goToNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="rgba(74, 123, 217, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
      )}
    </div>
  );
}