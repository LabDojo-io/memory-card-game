import { useState, useEffect, useCallback } from 'react';
import { formatTime } from '../utils/gameLogic.js';

interface UseTimerReturn {
  seconds: number;
  formattedTime: string;
  start: () => void;
  stop: () => void;
  reset: () => void;
  isRunning: boolean;
}

export const useTimer = (): UseTimerReturn => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: number;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setSeconds(0);
    setIsRunning(false);
  }, []);

  const formattedTime = formatTime(seconds);

  return {
    seconds,
    formattedTime,
    start,
    stop,
    reset,
    isRunning,
  };
};