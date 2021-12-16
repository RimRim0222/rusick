import styled from '@emotion/styled';
import { Button } from '@src/components/button';
import { HeaderStep } from '@layout/header';
import { useHeaderState } from '@src/layout/header';

export function TestStep2Page() {
  const { setHeaderStep } = useHeaderState();

  const handleNextStep = () => {
    setHeaderStep(HeaderStep.STEP3);
  };

  return (
    <TestStepPageStyled>
      TestStepPage2
      <Button label={'nextStep'} onClick={handleNextStep} />
    </TestStepPageStyled>
  );
}

const TestStepPageStyled = styled.div``;
