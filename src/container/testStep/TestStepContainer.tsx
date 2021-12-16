import { TestStep1Page, TestStep2Page, TestStep3Page } from '@src/pages/testStep';
import { HeaderStep, useCurrentStep, useHeaderState } from '@layout/header';
import { RouteList } from '@src/routes/RouteList';
import { useEffect } from 'react';

export function TestStepContainer() {
  const currentStep = useCurrentStep(RouteList.TEST_STEP);
  const { setHeaderData } = useHeaderState();

  useEffect(() => {
    setHeaderData(RouteList.TEST_STEP, HeaderStep.STEP1);
  }, []);

  return (
    <div>
      {(() => {
        switch (currentStep) {
          case HeaderStep.STEP2:
            return <TestStep2Page />;
          case HeaderStep.STEP3:
            return <TestStep3Page />;
          default:
            return <TestStep1Page />;
        }
      })()}
    </div>
  );
}
