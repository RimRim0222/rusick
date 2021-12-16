import styled from '@emotion/styled';
import { CheckReserveTitle } from './CheckReserveTitle';

export function SymptomDesc() {
  return (
    <SymptomDescWrap>
      <CheckReserveTitle label="증상내용" />
      <div>
        2일전 부터 몸에 열이납니다. 해열제를 복용했는데도 열이 내리지 않네요. 오늘은 목도 아프고
        점점 심해지는 것 같아요.
      </div>
    </SymptomDescWrap>
  );
}

const SymptomDescWrap = styled.div``;
