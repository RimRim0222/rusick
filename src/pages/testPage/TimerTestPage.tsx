import styled from '@emotion/styled';
import { Timer } from '@src/components/timer';
import { useState } from 'react';

export function TimerTestPage() {
  const [timerState, setTimerState] = useState(false);
  const [reset, setReset] = useState(false);
  const [sendCnt, setSendCnt] = useState(false); // 클릭 여부 체크
  const [testMsg, setTestMsg] = useState(''); // 테스트 메세지
  const [inputValue, setInputValue] = useState('');
  const [authCheck, setAuthCheck] = useState(false);

  const handleStart = () => {
    setSendCnt(!sendCnt);
    return setTimerState(!timerState);
  };

  const handlResend = () => {
    setTestMsg('');
    setTimerState(true);
    return setReset(!reset);
  };

  const handleTimeOut = () => {
    setTestMsg('인증시간이 초과되었습니다.');
    setTimerState(!timerState);
  };

  const handleAuthCheck = () => {
    if (!timerState) setTestMsg('인증시간이 초과되었다.');
    if (inputValue !== '1234') {
      setTestMsg('인증번호가 다릅니다.');
    } else {
      setTimerState(!timerState);
      setAuthCheck(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <TimerTestPageStyled>
      <input type="text" value={inputValue} onChange={handleChange} readOnly={!timerState} />
      {!authCheck && sendCnt && (
        <Timer limitTime={3} timerState={timerState} onTimeout={handleTimeOut} isReset={reset} />
      )}
      {!timerState && !sendCnt && (
        <button onClick={handleStart}>
          <h2>전송하기</h2>
        </button>
      )}
      {timerState && !authCheck && (
        <>
          <button onClick={handleAuthCheck}>
            <h2>인증하기</h2>
          </button>
          <button onClick={handlResend}>
            <h2>재발송</h2>
          </button>
        </>
      )}
      {!timerState && authCheck && <h1>인증완료</h1>}
      {!authCheck && <h1>{testMsg}</h1>}
    </TimerTestPageStyled>
  );
}

const TimerTestPageStyled = styled.div``;
