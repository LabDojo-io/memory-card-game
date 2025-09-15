import React from 'react';
import { Settings, RotateCcw, Play } from 'lucide-react';
import type { BoardSize } from '../types/game.js';
import styles from '../styles/GameSettings.module.css';

interface GameSettingsProps {
  boardSize: BoardSize;
  onBoardSizeChange: (size: BoardSize) => void;
  onNewGame: () => void;
  onResetGame: () => void;
  gameStatus: 'idle' | 'playing' | 'completed';
  moves: number;
}

export const GameSettings: React.FC<GameSettingsProps> = ({
  boardSize,
  onBoardSizeChange,
  onNewGame,
  onResetGame,
  gameStatus,
  moves
}) => {
  const boardSizeOptions: { size: BoardSize; label: string; difficulty: string }[] = [
    { size: 20, label: '20 Cards', difficulty: 'Easy' },
    { size: 30, label: '30 Cards', difficulty: 'Medium' },
    { size: 50, label: '50 Cards', difficulty: 'Hard' },
    { size: 100, label: '100 Cards', difficulty: 'Expert' }
  ];

  return (
    <div className={styles.gameSettings}>
      <div className={styles.settingsHeader}>
        <Settings className={styles.settingsIcon} size={20} />
        <h3>Game Settings</h3>
      </div>
      
      <div className={styles.settingsContent}>
        <div className={styles.boardSizeSelector}>
          <label className={styles.selectorLabel}>Board Size</label>
          <div className={styles.sizeOptions}>
            {boardSizeOptions.map(option => (
              <button
                key={option.size}
                className={`${styles.sizeOption} ${boardSize === option.size ? styles.active : ''}`}
                onClick={() => onBoardSizeChange(option.size)}
                disabled={gameStatus === 'playing'}
              >
                <span className={styles.sizeLabel}>{option.label}</span>
                <span className={styles.difficultyLabel}>{option.difficulty}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.gameActions}>
          <button
            className={`${styles.actionButton} ${styles.newGameButton}`}
            onClick={onNewGame}
          >
            <Play size={18} />
            New Game
          </button>
          
          {gameStatus !== 'idle' && (
            <button
              className={`${styles.actionButton} ${styles.resetButton}`}
              onClick={onResetGame}
            >
              <RotateCcw size={18} />
              Reset
            </button>
          )}
        </div>

        {gameStatus !== 'idle' && (
          <div className={styles.gameStats}>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Moves:</span>
              <span className={styles.statValue}>{moves}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Cards:</span>
              <span className={styles.statValue}>{boardSize}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};