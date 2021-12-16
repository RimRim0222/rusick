import styled from '@emotion/styled';
import { LNG_KEY } from '@src/i18n';
import { HeaderStep } from '@src/layout/header';
import { ReservationTermsList } from './ReservationTermsList';
import { ReservationCheckButton } from '../ReservationCheckButton';
import { useReservation } from '../useReservation';

export function ReservationTermsFeature() {
  const { contents, dispatch, onSave } = useReservation();

  //확인 버튼클릭 후 recoil state 에 업데이트
  const onClickNext = () => {
    onSave(HeaderStep.STEP4);
  };

  //필수 동의 완료
  const onRequireCheck = (val: boolean) => {
    dispatch({ type: 'reservationAgree', value: val });
  };

  return (
    <ReservationTermsFeatureStyled>
      이용약관에 동의하시고 어디아파 서비스를 이용해 보세요!
      <ReservationTermsList onRequireCheck={onRequireCheck} />
      <ReservationCheckButton
        onClick={onClickNext}
        label={LNG_KEY.BTN_AGREE_CONTINUE}
        disabled={!contents.reservationAgree}
      />
    </ReservationTermsFeatureStyled>
  );
}

const ReservationTermsFeatureStyled = styled.div``;
