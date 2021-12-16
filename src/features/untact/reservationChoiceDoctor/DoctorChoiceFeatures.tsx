import styled from '@emotion/styled';
import { DoctorCards, DoctorChoiceCondition, DoctorChoiceTab } from '.';

export function DoctorChoiceFeatures() {
  return (
    <DoctorChoiceFeaturesStyled>
      <DoctorChoiceTab />
      <DoctorChoiceCondition />
      <DoctorCards />
    </DoctorChoiceFeaturesStyled>
  );
}

const DoctorChoiceFeaturesStyled = styled.div``;
