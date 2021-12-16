import styled from '@emotion/styled';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { testEmailParams, testEmailResult } from '@src/store/AsyncTest';

import { ChangeEvent, useState } from 'react';

export function TestUser() {
  // 실제 이 폼에서 사용되는 텍스트의 지속적으로 관리하는 useState 또는 useReducer
  const [emailText, setEmailText] = useState('');

  // api 조회용 params 핸들러
  const setEmailParams = useSetRecoilState(testEmailParams);

  // api 결과물
  const emailQueryResult = useRecoilValue(testEmailResult);

  console.log('emailQueryResult', emailQueryResult);

  // onChange때 email 데이터를 주입함
  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailText(event.target.value);
  };

  // params에 현재까지 입력된 특정 state값을 주입한다
  const handleMockCheck = () => {
    setEmailParams(emailText);
  };

  return (
    <TestUserStyled>
      <input type={'text'} onChange={handleChangeEmail} value={emailText} />
      <button onClick={handleMockCheck}>email Check</button>
      {emailQueryResult.isDuplicate ? 'true' : 'false'}
    </TestUserStyled>
  );
}

const TestUserStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
