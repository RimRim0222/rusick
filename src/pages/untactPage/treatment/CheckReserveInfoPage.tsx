import styled from '@emotion/styled';
import { Button, BUTTON_THEME } from '@src/components/button';
import {
  CheckProcess,
  DefaultInfo,
  ImageDesease,
  ImagePassport,
  PaymentInfo,
  ReservedPeople,
  SymptomDesc,
} from '@src/features/untact/treatmentCheckReserveInfo';
import { cssx } from '@src/theme';

export function CheckReserveInfoPage() {
  return (
    <CheckReserveInfoPageStyled>
      <CheckReserveTitleStyled>예약내역</CheckReserveTitleStyled>

      {/** 진행 상태 */}
      <CheckProcess />

      {/** 진료 예약자 */}
      <ReservedPeople />

      {/** 기본정보 */}
      <DefaultInfo />

      {/** 증상내용 */}
      <SymptomDesc />

      {/** 병변 이미지 */}
      <ImageDesease />

      {/** 여권사진 이미지 */}
      <ImagePassport />

      {/** 결제수단 정보 */}
      <PaymentInfo />

      <Button label="예약취소" theme={BUTTON_THEME.DEFAULT} onClick={() => console.log('click')} />
    </CheckReserveInfoPageStyled>
  );
}

const CheckReserveInfoPageStyled = styled.div``;
const CheckReserveTitleStyled = styled.div`
  ${cssx.title1}
`;
