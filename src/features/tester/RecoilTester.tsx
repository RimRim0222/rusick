import {
  testEmailRefresh,
  testEmailParams,
  testEmailResult,
  IEmailResult,
} from '@src/store/AsyncTest';
import { ChangeEvent, useState } from 'react';
import { useLoadableRefresh } from './useLoadable';

export function RecoilTester() {
  const [emailText, setEmailText] = useState('');

  const { handleParams, result, isLoading, isError } = useLoadableRefresh<IEmailResult>(
    testEmailParams,
    testEmailResult,
    false,
    testEmailRefresh,
  );

  const handleSetEmail = () => {
    handleParams(emailText);
  };

  const handleEmailText = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailText(event.target.value);
  };

  return (
    <div>
      <button onClick={handleSetEmail}>텍스트 설정</button>/{' '}
      {result.isDuplicate ? 'abled' : 'disabled'} /
      <input type="text" value={emailText} onChange={handleEmailText} />
    </div>
  );
}
