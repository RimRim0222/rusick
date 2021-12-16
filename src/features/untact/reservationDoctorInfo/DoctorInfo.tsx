import styled from '@emotion/styled';
import { useLayer } from '@src/components/modal/useLayer';
import { LNG_KEY } from '@src/i18n';
import { HeaderStep, useHeaderState } from '@src/layout/header';
import { useTranslation } from 'react-i18next';
import { DoctorInfoCareer, DoctorInfoIntro } from '.';
import { ReservationCheckButton } from '../ReservationCheckButton';

export function DoctorInfo() {
  const { t } = useTranslation();
  const { handleCloseClick } = useLayer(1);
  const { setHeaderStep } = useHeaderState();

  const onClickBtn = () => {
    handleCloseClick();
    setHeaderStep(HeaderStep.STEP3);
  };

  return (
    <DoctorInfoStyled>
      <DoctorInfoIntro />
      <DoctorInfoCareer />
      <PushHospitalInfo>병원 상세정보 보기</PushHospitalInfo>
      <ReservationCheckButton label={t(LNG_KEY.CHECK)} onClick={onClickBtn} />
    </DoctorInfoStyled>
  );
}

const DoctorInfoStyled = styled.div``;
const PushHospitalInfo = styled.div``;
