import "./Add.css";
import { useState, useEffect } from "react";

const ADDS_ARRAY = [
  {
    id: 1,
    name: "Fat_girls",
    image: "/images/banners/Banner-2-Desktop-300ppi.png",
    mobileImage: "/images/banners/Banner-2-Mobile-300ppi.png",
  },
  {
    id: 2,
    name: "Sale 50%",
    image: "/images/banners/Banner-1-Desktop-300ppi.png",
    mobileImage: "/images/banners/Banner-1-Mobile-300ppi.png",
  },
];

export default function Add() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [direction, setDirection] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.visualViewport?.width ?? window.innerWidth;
      setIsMobile(Math.round(width) <= 393);
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
    if (isAnimating) return;
    const newIndex =
      currentIndex === 0 ? ADDS_ARRAY.length - 1 : currentIndex - 1;
    setNextIndex(newIndex);
    setDirection("prev");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setNextIndex(null);
      setDirection("");
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    const newIndex =
      currentIndex === ADDS_ARRAY.length - 1 ? 0 : currentIndex + 1;
    setNextIndex(newIndex);
    setDirection("next");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setNextIndex(null);
      setDirection("");
      setIsAnimating(false);
    }, 500);
  };

  const currentAdd = ADDS_ARRAY[currentIndex];
  const nextAdd = nextIndex !== null ? ADDS_ARRAY[nextIndex] : null;

  const getImage = (item) =>
    isMobile && item.mobileImage ? item.mobileImage : item.image;

  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      // минимум 50px свайп
      diff > 0 ? goToNext() : goToPrev();
    }
    setTouchStart(null);
  };

  return (
    <div
      className="banner-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="banner">
        <div className={`carousel-track ${direction}`}>
          <div className="carousel-slide current">
            <img
              src={getImage(currentAdd)}
              alt={currentAdd.name}
              className="banner-image"
            />
          </div>
          {nextAdd && (
            <div className={`carousel-slide next ${direction}`}>
              <img
                src={getImage(nextAdd)}
                alt={nextAdd.name}
                className="banner-image"
              />
            </div>
          )}
        </div>
      </div>
      <button className="arrow-btn arrow-left" onClick={goToPrev}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="rgba(74, 123, 217, 1)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button className="arrow-btn arrow-right" onClick={goToNext}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18L15 12L9 6"
            stroke="rgba(74, 123, 217, 1)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
