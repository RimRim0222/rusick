import styled from '@emotion/styled';
import { HeaderStep, useCurrentStep, useHeaderState } from '@src/layout/header';
import { ChoiceDoctorPage } from '@src/pages/untactPage/reservation/ChoiceDoctorPage';
import { ChoiceSubjectPage } from '@src/pages/untactPage/reservation/ChoiceSubjectPage';
import { ReservationTermsPage } from '@src/pages/untactPage/reservation/ReservationTermsPage';
import { ShowInfoPage } from '@src/pages/untactPage/reservation/ShowInfoPage';
import { WriteInfoPage } from '@src/pages/untactPage/reservation/WriteInfoPage';
import { RouteList } from '@src/routes/RouteList';
import { useEffect } from 'react';

export function UntactReservationSubjectContainer() {
  const currentStep = useCurrentStep(RouteList.UNTACT_RESERVATION_SYMPTOM);
  const { setHeaderData } = useHeaderState();

  useEffect(() => {
    setHeaderData(RouteList.UNTACT_RESERVATION_SYMPTOM, HeaderStep.STEP1);
  }, []);

  return (
    <div>
      {(() => {
        switch (currentStep) {
          case HeaderStep.STEP2:
            return <ChoiceDoctorPage />; //2 : 의사선택
          case HeaderStep.STEP3:
            return <ReservationTermsPage />; //3 : 약관동의
          case HeaderStep.STEP4:
            return <WriteInfoPage />; //4 : 예약정보입력
          case HeaderStep.STEP5:
            return <ShowInfoPage />; //5 : 예약완료, 확인
          default:
            return <ChoiceSubjectPage />; //1: 진료과 선택
        }
      })()}
    </div>
  );
}
