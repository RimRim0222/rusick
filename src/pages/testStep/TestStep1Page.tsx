import styled from '@emotion/styled';
import { Button } from '@src/components/button';
import { HeaderStep } from '@layout/header';
import { useHeaderState } from '@src/layout/header';

export function TestStep1Page() {
  const { setHeaderStep } = useHeaderState();

  const handleNextStep = () => {
    setHeaderStep(HeaderStep.STEP2);
  };

  return (
    <TestStepPageStyled>
      TestStepPage1
      <Button label={'nextStep'} onClick={handleNextStep} />
    </TestStepPageStyled>
  );
}

const TestStepPageStyled = styled.div``;
