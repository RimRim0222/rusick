import { HeaderStep, useCurrentStep, useHeaderState } from '@src/layout/header';
import { ChoiceDoctorPage } from '@src/pages/untactPage/reservation/ChoiceDoctorPage';
import { ChoiceSymptomPage } from '@src/pages/untactPage/reservation/ChoiceSymptomPage';
import { ReservationTermsPage } from '@src/pages/untactPage/reservation/ReservationTermsPage';
import { ShowInfoPage } from '@src/pages/untactPage/reservation/ShowInfoPage';
import { WriteInfoPage } from '@src/pages/untactPage/reservation/WriteInfoPage';
import { RouteList } from '@src/routes/RouteList';
import { useEffect } from 'react';

export function UntactReservationSymptomContainer() {
  const currentStep = useCurrentStep(RouteList.UNTACT_RESERVATION_SYMPTOM);
  const { setHeaderData } = useHeaderState();

  useEffect(() => {
    setHeaderData(RouteList.UNTACT_RESERVATION_SYMPTOM, HeaderStep.STEP1);
  }, []);

  //증상/질환 선택
  //진료의 선택
  //진료의 상세
  //결제등록 약관동의
  //결제수단관리 (카드등록)
  //해외 체류사실 확인
  //예약 기본정보 입력
  //건강정보 추가등록
  //건강정보 입력

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
            return <ChoiceSymptomPage />; //1: 질환선택
        }
      })()}
    </div>
  );
}
