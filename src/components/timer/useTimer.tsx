import { useState } from 'react';

export function useTimer() {
  const [timerState, setTimerState] = useState(false);
  const [reset, setReset] = useState(false);
  const [overTime, setOverTime] = useState(false);

  const handleTimerStart = () => {
    return setTimerState(true);
  };

  const handleTimerStop = () => {
    return setTimerState(false);
  };

  const handleTimerResend = () => {
    setTimerState(true);
    return setReset(!reset);
  };

  const handleTimeOut = () => {
    setTimerState(false);
    setOverTime(!overTime);
  };

  return {
    timerState,
    reset,
    handleTimerStart,
    handleTimerStop,
    handleTimerResend,
    handleTimeOut,
  };
}
