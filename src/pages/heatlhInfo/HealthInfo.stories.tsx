import { ComponentMeta } from '@storybook/react';
import { AddHealthInfoPage } from '.';
import { AddBasicHealthInfoPage } from './AddBasicHealthInfoPage';
import { AddFamilyHistoryPage } from './AddFamilyHistoryPage';
import { AddMedicalHistoryPage } from './AddMedicalHistoryPage';
import { AddSocialHistoryPage } from './AddSocialHistoryPage';
import { HealthInfoPage } from './HealthInfoPage';

function EmptyComp() {
  return <div></div>;
}

export default {
  title: `pages/HealthInfo`,
  component: EmptyComp,
} as ComponentMeta<typeof EmptyComp>;

export const Step1_AddHealthInfo = () => {
  return <AddHealthInfoPage />;
};

export const Step2_AddBasicHealthInfo = () => {
  return <AddBasicHealthInfoPage userId={'init'} />;
};

export const Step2_1_UpdateBasicHealthInfo = () => {
  return <AddBasicHealthInfoPage userId={''} />;
};
export const Step3_AddMedicalHistory = () => {
  return <AddMedicalHistoryPage />;
};

export const Step4_AddFamilyHistory = () => {
  return <AddFamilyHistoryPage />;
};

export const Step4_AddSocialHistory = () => {
  return <AddSocialHistoryPage />;
};

export const HealthInfo = () => {
  return <HealthInfoPage />;
};
