import styled from '@emotion/styled';
import { ChoiceSymptomFeatures } from '@src/features/untact/reservationChoiceSymptom';

export function ChoiceSymptomPage() {
  return (
    <ChoiceSymptomPageStyled>
      <ChoiceSymptomFeatures />
    </ChoiceSymptomPageStyled>
  );
}

const ChoiceSymptomPageStyled = styled.div`
  box-sizing: border-box;
  padding: 10px;
`;
