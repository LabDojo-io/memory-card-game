import type { Card, BoardSize } from '../types/game.js';
import { getGameImages } from './animeImages.js';

// Shuffle array using Fisher-Yates algorithm
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Create pairs of cards for the game
export const createCardPairs = (boardSize: BoardSize): Card[] => {
  const images = getGameImages(boardSize);
  const cards: Card[] = [];
  
  // Create pairs
  images.forEach((image) => {
    // First card of the pair
    cards.push({
      id: `${image.id}-1`,
      imageUrl: image.imageUrl,
      isFlipped: false,
      isMatched: false,
    });
    
    // Second card of the pair
    cards.push({
      id: `${image.id}-2`,
      imageUrl: image.imageUrl,
      isFlipped: false,
      isMatched: false,
    });
  });
  
  // Shuffle the cards
  return shuffleArray(cards);
};

// Check if two cards match
export const checkMatch = (card1: Card, card2: Card): boolean => {
  return card1.imageUrl === card2.imageUrl && card1.id !== card2.id;
};

// Check if the game is complete
export const isGameComplete = (cards: Card[]): boolean => {
  return cards.every(card => card.isMatched);
};

// Get grid dimensions based on board size
export const getGridDimensions = (boardSize: BoardSize): { rows: number; cols: number } => {
  switch (boardSize) {
    case 20:
      return { rows: 4, cols: 5 };
    case 30:
      return { rows: 5, cols: 6 };
    case 50:
      return { rows: 5, cols: 10 }; // 50 slots exactly
    case 100:
      return { rows: 10, cols: 10 }; // 100 slots exactly
    default:
      return { rows: 4, cols: 5 };
  }
};

// Format time in MM:SS format
export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

// Calculate score based on moves and time
export const calculateScore = (moves: number, timeInSeconds: number): number => {
  const baseScore = 1000;
  const movePenalty = moves * 2;
  const timePenalty = Math.floor(timeInSeconds / 10);
  return Math.max(0, baseScore - movePenalty - timePenalty);
};