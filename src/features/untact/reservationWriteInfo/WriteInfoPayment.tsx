import styled from '@emotion/styled';
import { WriteReservationSubTitle } from './WriteReservationSubTitle';

export function WriteInfoPayment() {
  return (
    <WriteInfoPaymentStyled>
      <WriteReservationSubTitle label="결제수단" />
      <WriteInfoPaymentTitleStyled>결제 수단 등록은 필수 입니다.</WriteInfoPaymentTitleStyled>
      <WriteInfoPaymentUploadWrapper>결제카드 등록 +</WriteInfoPaymentUploadWrapper>
    </WriteInfoPaymentStyled>
  );
}

const WriteInfoPaymentStyled = styled.div`
  padding: 10px 0;
`;
const WriteInfoPaymentTitleStyled = styled.div``;
const WriteInfoPaymentUploadWrapper = styled.div`
  padding: 10px 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
