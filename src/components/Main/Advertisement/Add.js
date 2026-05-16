import './Add.css';
import { useState } from 'react';

const ADDS_ARRAY = [
  { id: 1, name: "Fat_girls", image: "/images/banners/Banner-2-Desktop-300ppi.png" },
  { id: 2, name: "Sale 50%", image: "/images/banners/Banner-1-Desktop-300ppi.png" }
];

export default function Add() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [direction, setDirection] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrev = () => {
    if (isAnimating) return;
    
    const newIndex = currentIndex === 0 ? ADDS_ARRAY.length - 1 : currentIndex - 1;
    setNextIndex(newIndex);
    setDirection('prev');
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setNextIndex(null);
      setDirection('');
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    const newIndex = currentIndex === ADDS_ARRAY.length - 1 ? 0 : currentIndex + 1;
    setNextIndex(newIndex);
    setDirection('next');
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setNextIndex(null);
      setDirection('');
      setIsAnimating(false);
    }, 500);
  };

  const currentAdd = ADDS_ARRAY[currentIndex];
  const nextAdd = nextIndex !== null ? ADDS_ARRAY[nextIndex] : null;

  return (
    <div className="banner-container">
      <div className="banner">
        <div className={`carousel-track ${direction}`}>
          {/* Текущий баннер */}
          <div className="carousel-slide current">
            <img 
              src={currentAdd.image} 
              alt={currentAdd.name}
              className="banner-image"
            />
          </div>
          
          {/* Следующий баннер для анимации */}
          {nextAdd && (
            <div className={`carousel-slide next ${direction}`}>
              <img 
                src={nextAdd.image} 
                alt={nextAdd.name}
                className="banner-image"
              />
            </div>
          )}
        </div>
      </div>

      {/* Кнопки-стрелки */}
      <button className="arrow-btn arrow-left" onClick={goToPrev}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="rgba(74, 123, 217, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button className="arrow-btn arrow-right" onClick={goToNext}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="rgba(74, 123, 217, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}