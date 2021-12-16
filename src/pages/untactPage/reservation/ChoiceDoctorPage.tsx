import styled from '@emotion/styled';

import { LNG_KEY } from '@src/i18n';
import { useTranslation } from 'react-i18next';

import { DoctorChoiceFeatures } from '@src/features/untact/reservationChoiceDoctor';

export function ChoiceDoctorPage() {
  const { t } = useTranslation();

  return (
    <ChoiceDoctorPageStyled>
      <div>
        <span>{t(LNG_KEY.UNTACT_CHOICE_DOCTOR_01)}</span>
        <span>{t(LNG_KEY.UNTACT_CHOICE_DOCTOR_02)}</span>
      </div>
      <DoctorChoiceFeatures />
    </ChoiceDoctorPageStyled>
  );
}

const ChoiceDoctorPageStyled = styled.div`
  padding: 0 10px;
`;

const FeatureWrapper = styled.div`
  width: 100%;
`;
