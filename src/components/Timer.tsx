import React from 'react';
import { Clock } from 'lucide-react';
import styles from '../styles/Timer.module.css';

interface TimerProps {
  formattedTime: string;
  isRunning: boolean;
}

export const Timer: React.FC<TimerProps> = ({ formattedTime, isRunning }) => {
  return (
    <div className={`${styles.timer} ${isRunning ? styles.running : ''}`}>
      <Clock className={styles.clockIcon} size={20} />
      <span className={styles.timeDisplay}>{formattedTime}</span>
      {isRunning && <div className={styles.pulseIndicator} />}
    </div>
  );
};