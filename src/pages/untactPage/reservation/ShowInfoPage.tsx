import styled from '@emotion/styled';

import {
  ShowInfoBasic,
  ShowInfoButton,
  ShowInfoImage,
  ShowInfoPassport,
  ShowInfoPayment,
  ShowInfoPolicy,
  ShowInfoRequire,
} from '@src/features/untact/reservationShowInfo';
import { WriteInfoMemberInfo } from '@src/features/untact/reservationWriteInfo';

export function ShowInfoPage() {
  return (
    <ShowInfoPageStyled>
      {/* 예약자 사진, 이름 등 */}
      <WriteInfoMemberInfo />
      {/* 기본정보  */}
      <ShowInfoBasic />
      {/* 증상 내용 및 요청사항 */}
      <ShowInfoRequire />
      {/* 병변 이미지 */}
      <ShowInfoImage />
      {/* 여권 보기 */}
      <ShowInfoPassport />
      {/* 결제수단 */}
      <ShowInfoPayment />
      {/* 정책 안내 */}
      <ShowInfoPolicy />
      {/* 다시하기, next step 버튼 */}
      <ShowInfoButton />
    </ShowInfoPageStyled>
  );
}

const ShowInfoPageStyled = styled.div``;
