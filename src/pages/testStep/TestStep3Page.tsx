import styled from '@emotion/styled';
import { Button } from '@src/components/button';
import { HeaderStep } from '@layout/header';
import { useHeaderState } from '@src/layout/header';

export function TestStep3Page() {
  const { setHeaderStep } = useHeaderState();

  const handleNextStep = () => {
    // 필요시 완료페이지로 이동
    setHeaderStep(HeaderStep.STEP1);
  };

  return (
    <TestStepPageStyled>
      TestStepPage3
      <Button label={'nextStep'} onClick={handleNextStep} />
    </TestStepPageStyled>
  );
}

const TestStepPageStyled = styled.div``;
