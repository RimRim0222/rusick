import styled from '@emotion/styled';
import { ReservationTermsFeature } from '@src/features/untact/ReservationTerms';

export function ReservationTermsPage() {
  //약관동의 후 본인인증, 결제약관동의, 해외체류사실 확인 동의(layer)

  return (
    <ReservationTermsPageStyled>
      <ReservationTermsFeature />
    </ReservationTermsPageStyled>
  );
}

const ReservationTermsPageStyled = styled.div``;
