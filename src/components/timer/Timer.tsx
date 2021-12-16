import styled from '@emotion/styled';
import { ITimer } from './types';
import useInterval from './useInterval';
import { useEffect, useState } from 'react';

const timeFormat = (time: number) => {
  const m = Math.floor(time / 60).toString();
  let s = (time % 60).toString();
  if (s.length === 1) s = `0${s}`;
  return `${m}:${s}`;
};

export function Timer({ limitTime, timerState, delay, isReset, onTimeout }: ITimer) {
  const LIMIT_TIME = limitTime * 60;
  const [time, setTime] = useState(LIMIT_TIME);
  useEffect(() => {
    if (isReset) setTime(LIMIT_TIME);
  }, [isReset]);

  useInterval(
    () => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        onTimeout();
      }
    },
    timerState ? delay : null,
  );

  return <TimerStyled>{timeFormat(time)}</TimerStyled>;
}

Timer.defaultProps = {
  limitTime: 1,
  timerState: false,
  delay: 1000,
};

const TimerStyled = styled.span`
  color: ${(props) => props.theme.colors.point_red};
  ${(props) => props.theme.fonts.p1_R}
`;
