import React from 'react';
import type { Card as CardType } from '../types/game.js';
import styles from '../styles/Card.module.css';

interface CardProps {
  card: CardType;
  onClick: (cardId: string) => void;
  disabled?: boolean;
}

export const Card: React.FC<CardProps> = ({ card, onClick, disabled = false }) => {
  const handleClick = () => {
    if (!disabled && !card.isFlipped && !card.isMatched) {
      onClick(card.id);
    }
  };

  const cardClasses = [
    styles.card,
    card.isFlipped ? styles.flipped : '',
    card.isMatched ? styles.matched : '',
    disabled ? styles.disabled : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} onClick={handleClick}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          ?
        </div>
        <div className={styles.cardBack}>
          <img 
            src={card.imageUrl} 
            alt="Memory card image"
            className={styles.cardImage}
            loading="lazy"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = `https://via.placeholder.com/200x150/4ECDC4/FFFFFF?text=Image`;
            }}
          />
        </div>
      </div>
    </div>
  );
};