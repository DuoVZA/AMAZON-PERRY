import React from 'react';
import styles from './TrendingDealCard.css';

const TrendingDealCard = ({ 
  imageUrl, 
  title, 
  rating, 
  reviewsCount, 
  currentPrice, 
  originalPrice,
  customStyle // Добавлено для гибкости, как в SeachLittle
}) => {
  return (
    <div className={styles.dealCard} style={customStyle}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        
        <div className={styles.rating}>
          <span className={styles.star}>★</span>
          <span className={styles.ratingValue}>{rating}</span>
          <span className={styles.reviewsIcon}>💬</span>
          <span className={styles.reviewsCount}>{reviewsCount}</span>
        </div>
        
        <div className={styles.priceRow}>
          <span className={styles.currentPrice}>${currentPrice}</span>
          {originalPrice && (
            <span className={styles.originalPrice}>${originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendingDealCard;