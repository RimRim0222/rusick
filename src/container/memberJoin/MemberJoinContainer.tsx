import { useEffect } from 'react';
import { TermsPage } from '@src/pages/terms/TermsPage';
import { JoinPage } from '@pages/join/JoinPage';
import { HeaderStep, useCurrentStep, useHeaderState } from '@layout/header';
import { RouteList } from '@src/routes/RouteList';

export function MemberJoinContainer() {
  const currentStep = useCurrentStep(RouteList.MEMBER_JOIN);
  const { setHeaderData } = useHeaderState();

  useEffect(() => {
    setHeaderData(RouteList.MEMBER_JOIN, HeaderStep.STEP1);
  }, []);

  console.log('MemberJoinContainer@@@');
  console.log(currentStep);

  const RenderPage = () => {
    switch (currentStep) {
      case HeaderStep.STEP2:
        return <JoinPage />;
      default:
        return <TermsPage />;
    }
  };

  return <RenderPage />;
}
