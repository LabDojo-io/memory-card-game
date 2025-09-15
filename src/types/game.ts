export interface Card {
  id: string;
  imageUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameState {
  cards: Card[];
  flippedCards: Card[];
  matchedPairs: number;
  moves: number;
  gameStatus: 'idle' | 'playing' | 'completed';
  boardSize: number;
}

export type BoardSize = 20 | 30 | 50 | 100;