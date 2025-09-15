import React from 'react';
import { Card as CardComponent } from './Card.js';
import type { Card as CardType, BoardSize } from '../types/game.js';
import { getGridDimensions } from '../utils/gameLogic.js';
import styles from '../styles/GameBoard.module.css';

interface GameBoardProps {
  cards: CardType[];
  onCardClick: (cardId: string) => void;
  boardSize: BoardSize;
  disabled?: boolean;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  cards,
  onCardClick,
  boardSize,
  disabled = false
}) => {
  const { rows, cols } = getGridDimensions(boardSize);
  
  const boardStyle = {
    '--grid-rows': rows,
    '--grid-cols': cols,
  } as React.CSSProperties;

  return (
    <div 
      className={styles.gameBoard} 
      style={boardStyle}
      data-board-size={boardSize}
    >
      {cards.map((card) => (
        <CardComponent
          key={card.id}
          card={card}
          onClick={onCardClick}
          disabled={disabled}
        />
      ))}
    </div>
  );
};