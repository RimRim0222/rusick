import { ComponentMeta } from '@storybook/react';
import { ChoiceDoctorPage } from './ChoiceDoctorPage';
import { ChoiceSubjectPage } from './ChoiceSubjectPage';
import { ChoiceSymptomPage } from './ChoiceSymptomPage';
import { ReservationTermsPage } from './ReservationTermsPage';
import { SearchSymptomPage } from './SearchSymptomPage';
import { ShowInfoPage } from './ShowInfoPage';
import { WriteInfoPage } from './WriteInfoPage';

function EmptyComp() {
  return <div></div>;
}

export default {
  title: `pages/untactReservation`,
  component: EmptyComp,
} as ComponentMeta<typeof EmptyComp>;

export const Step1_ChoiceSymptomPage = () => {
  return <ChoiceSymptomPage />;
};

export const Step2_ChoiceSubjectPage = () => {
  return <ChoiceSubjectPage />;
};

export const Step3_ChoiceDoctorPage = () => {
  return <ChoiceDoctorPage />;
};

// export const Step4_DoctorInfoPage = () => {
// layer 처리
//   return <DoctorInfoPage />;
// };

export const Step5_UntactReservationTerms = () => {
  return <ReservationTermsPage />;
};

export const Step6_WriteInfoPage = () => {
  return <WriteInfoPage />;
};

export const Step7_ShowInfoPage = () => {
  return <ShowInfoPage />;
};

//개발 보류
const Hold_SearchSymptomPage = () => <SearchSymptomPage />;
