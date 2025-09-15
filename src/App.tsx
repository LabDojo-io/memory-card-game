import { useEffect } from 'react';
import { GameBoard } from './components/GameBoard.js';
import { Timer } from './components/Timer.js';
import { GameSettings } from './components/GameSettings.js';
import { VictoryScreen } from './components/VictoryScreen.js';
import { useGameState } from './hooks/useGameState.js';
import { useTimer } from './hooks/useTimer.js';
import type { BoardSize } from './types/game.js';
import './styles/global.css';

function App() {
  const gameState = useGameState(20);
  const timer = useTimer();

  // Start timer when first card is flipped
  useEffect(() => {
    if (gameState.gameStatus === 'playing' && !timer.isRunning) {
      timer.start();
    }
  }, [gameState.gameStatus, timer]);

  // Stop timer when game is completed
  useEffect(() => {
    if (gameState.gameStatus === 'completed' && timer.isRunning) {
      timer.stop();
    }
  }, [gameState.gameStatus, timer]);

  const handleCardClick = (cardId: string) => {
    gameState.flipCard(cardId);
  };

  const handleBoardSizeChange = (size: BoardSize) => {
    gameState.initializeGame(size);
    timer.reset();
  };

  const handleNewGame = () => {
    gameState.initializeGame(gameState.boardSize as BoardSize);
    timer.reset();
  };

  const handleResetGame = () => {
    gameState.resetGame(gameState.boardSize as BoardSize);
    timer.reset();
  };

  const handlePlayAgain = () => {
    gameState.resetGame(gameState.boardSize as BoardSize);
    timer.reset();
  };

  const isGameDisabled = gameState.flippedCards.length >= 2;

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🖼️ Memory Game</h1>
        <p className="app-subtitle">Match the image pairs!</p>
      </header>

      <div className="app-content">
        <div className="game-info">
          <Timer 
            formattedTime={timer.formattedTime}
            isRunning={timer.isRunning}
          />
          <GameSettings
            boardSize={gameState.boardSize as BoardSize}
            onBoardSizeChange={handleBoardSizeChange}
            onNewGame={handleNewGame}
            onResetGame={handleResetGame}
            gameStatus={gameState.gameStatus}
            moves={gameState.moves}
          />
        </div>

        <div className="game-area">
          <GameBoard
            cards={gameState.cards}
            onCardClick={handleCardClick}
            boardSize={gameState.boardSize as BoardSize}
            disabled={isGameDisabled}
          />
        </div>
      </div>

      {gameState.gameStatus === 'completed' && (
        <VictoryScreen
          moves={gameState.moves}
          timeInSeconds={timer.seconds}
          formattedTime={timer.formattedTime}
          boardSize={gameState.boardSize}
          onPlayAgain={handlePlayAgain}
          onNewGame={handleNewGame}
        />
      )}
    </div>
  );
}

export default App;