export interface ITimer {
  limitTime: number;
  timerState: boolean;
  delay: number;
  isReset: boolean;
  onTimeout: () => void;
}
