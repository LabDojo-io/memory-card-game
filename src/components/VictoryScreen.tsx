import React from 'react';
import { Trophy, Clock, Target, RotateCcw } from 'lucide-react';
import { calculateScore } from '../utils/gameLogic.js';
import styles from '../styles/VictoryScreen.module.css';

interface VictoryScreenProps {
  moves: number;
  timeInSeconds: number;
  formattedTime: string;
  boardSize: number;
  onPlayAgain: () => void;
  onNewGame: () => void;
}

export const VictoryScreen: React.FC<VictoryScreenProps> = ({
  moves,
  timeInSeconds,
  formattedTime,
  boardSize,
  onPlayAgain,
  onNewGame
}) => {
  const score = calculateScore(moves, timeInSeconds);
  const pairs = boardSize / 2;
  
  const getPerformanceRating = () => {
    if (score >= 800) return { rating: 'Excellent!', color: '#48bb78', emoji: '🌟' };
    if (score >= 600) return { rating: 'Great!', color: '#4299e1', emoji: '🎉' };
    if (score >= 400) return { rating: 'Good!', color: '#ed8936', emoji: '👏' };
    return { rating: 'Nice try!', color: '#e53e3e', emoji: '💪' };
  };

  const performance = getPerformanceRating();

  return (
    <div className={styles.victoryOverlay}>
      <div className={styles.victoryCard}>
        <div className={styles.victoryHeader}>
          <Trophy className={styles.trophyIcon} size={48} />
          <h1 className={styles.victoryTitle}>Congratulations!</h1>
          <p className={styles.victorySubtitle}>You completed the memory game!</p>
        </div>

        <div className={styles.performanceSection}>
          <div className={styles.performanceRating} style={{ color: performance.color }}>
            <span className={styles.performanceEmoji}>{performance.emoji}</span>
            <span className={styles.performanceText}>{performance.rating}</span>
          </div>
          <div className={styles.scoreDisplay}>
            <span className={styles.scoreLabel}>Score</span>
            <span className={styles.scoreValue}>{score}</span>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <Clock className={styles.statIcon} size={20} />
            <div className={styles.statContent}>
              <span className={styles.statLabel}>Time</span>
              <span className={styles.statValue}>{formattedTime}</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <Target className={styles.statIcon} size={20} />
            <div className={styles.statContent}>
              <span className={styles.statLabel}>Moves</span>
              <span className={styles.statValue}>{moves}</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <Trophy className={styles.statIcon} size={20} />
            <div className={styles.statContent}>
              <span className={styles.statLabel}>Pairs Found</span>
              <span className={styles.statValue}>{pairs}</span>
            </div>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <button
            className={`${styles.actionButton} ${styles.playAgainButton}`}
            onClick={onPlayAgain}
          >
            <RotateCcw size={18} />
            Play Again
          </button>
          
          <button
            className={`${styles.actionButton} ${styles.newGameButton}`}
            onClick={onNewGame}
          >
            New Game
          </button>
        </div>

        <div className={styles.encouragement}>
          <p>Try a different difficulty level or challenge yourself to beat your score!</p>
        </div>
      </div>
    </div>
  );
};