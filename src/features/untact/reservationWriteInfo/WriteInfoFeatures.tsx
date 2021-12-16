import styled from '@emotion/styled';
import { LNG_KEY } from '@src/i18n';
import { HeaderStep, useHeaderState } from '@src/layout/header';

import {
  WriteInfoImageUpload,
  WriteInfoMemberCodeInput,
  WriteInfoMemberInfo,
  WriteInfoPassportUpload,
  WriteInfoPayment,
  WriteInfoRequestInput,
  WriteInfoTreatType,
} from '.';
import { ReservationCheckButton } from '../ReservationCheckButton';
import { useReservation } from '../useReservation';

export function WriteInfoFeatures() {
  const { contents, dispatch, onSave } = useReservation();

  const onClickNext = () => {
    onSave(HeaderStep.STEP5);
  };

  return (
    <WriteInfoFeaturesStyled>
      {/* 예약자 사진, 이름 등 */}
      <WriteInfoMemberInfo />
      {/* 주민번호등록 */}
      <WriteInfoMemberCodeInput />
      {/* 진료 유형 */}
      <WriteInfoTreatType />
      {/* 증상내용 및 요청사항 */}
      <WriteInfoRequestInput />
      {/* 병면이미지 */}
      <WriteInfoImageUpload />
      {/* 여권사진 이미지 */}

      <WriteInfoPassportUpload />
      {/* 결제수단 */}
      <WriteInfoPayment />
      {/* 예약하기 버튼 */}
      <ReservationCheckButton label={LNG_KEY.UNTACT_RESERVATION_STEP_01} onClick={onClickNext} />
    </WriteInfoFeaturesStyled>
  );
}

const WriteInfoFeaturesStyled = styled.div``;
