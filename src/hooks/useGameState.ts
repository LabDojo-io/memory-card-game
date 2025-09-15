import { useState, useCallback } from 'react';
import type { GameState, BoardSize } from '../types/game.js';
import { createCardPairs, checkMatch, isGameComplete } from '../utils/gameLogic.js';

interface UseGameStateReturn extends GameState {
  flipCard: (cardId: string) => void;
  resetGame: (boardSize: BoardSize) => void;
  initializeGame: (boardSize: BoardSize) => void;
}

export const useGameState = (initialBoardSize: BoardSize = 20): UseGameStateReturn => {
  const [gameState, setGameState] = useState<GameState>(() => ({
    cards: createCardPairs(initialBoardSize),
    flippedCards: [],
    matchedPairs: 0,
    moves: 0,
    gameStatus: 'idle',
    boardSize: initialBoardSize,
  }));

  const initializeGame = useCallback((boardSize: BoardSize) => {
    setGameState({
      cards: createCardPairs(boardSize),
      flippedCards: [],
      matchedPairs: 0,
      moves: 0,
      gameStatus: 'idle',
      boardSize,
    });
  }, []);

  const resetGame = useCallback((boardSize: BoardSize) => {
    initializeGame(boardSize);
  }, [initializeGame]);

  const flipCard = useCallback((cardId: string) => {
    setGameState(prevState => {
      // Don't allow flipping if game is completed or card is already flipped/matched
      const card = prevState.cards.find(c => c.id === cardId);
      if (!card || card.isFlipped || card.isMatched || prevState.gameStatus === 'completed') {
        return prevState;
      }

      // Don't allow flipping more than 2 cards
      if (prevState.flippedCards.length >= 2) {
        return prevState;
      }

      // Start the game on first flip
      const newGameStatus = prevState.gameStatus === 'idle' ? 'playing' : prevState.gameStatus;
      
      // Flip the card
      const updatedCards = prevState.cards.map(c => 
        c.id === cardId ? { ...c, isFlipped: true } : c
      );

      const flippedCard = { ...card, isFlipped: true };
      const newFlippedCards = [...prevState.flippedCards, flippedCard];

      // Check for match if this is the second flipped card
      if (newFlippedCards.length === 2) {
        const [card1, card2] = newFlippedCards;
        const isMatch = checkMatch(card1, card2);
        
        if (isMatch) {
          // Match found - mark cards as matched
          const matchedCards = updatedCards.map(c => 
            (c.id === card1.id || c.id === card2.id) 
              ? { ...c, isMatched: true, isFlipped: true }
              : c
          );

          const newMatchedPairs = prevState.matchedPairs + 1;
          const gameComplete = isGameComplete(matchedCards);

          return {
            ...prevState,
            cards: matchedCards,
            flippedCards: [],
            matchedPairs: newMatchedPairs,
            moves: prevState.moves + 1,
            gameStatus: gameComplete ? 'completed' : newGameStatus,
          };
        } else {
          // No match - schedule cards to be flipped back
          setTimeout(() => {
            setGameState(currentState => ({
              ...currentState,
              cards: currentState.cards.map(c => 
                (c.id === card1.id || c.id === card2.id) && !c.isMatched
                  ? { ...c, isFlipped: false }
                  : c
              ),
              flippedCards: [],
            }));
          }, 1000);

          return {
            ...prevState,
            cards: updatedCards,
            flippedCards: newFlippedCards,
            moves: prevState.moves + 1,
            gameStatus: newGameStatus,
          };
        }
      }

      // First card flipped or game continuing
      return {
        ...prevState,
        cards: updatedCards,
        flippedCards: newFlippedCards,
        gameStatus: newGameStatus,
      };
    });
  }, []);

  return {
    ...gameState,
    flipCard,
    resetGame,
    initializeGame,
  };
};