import { ComponentMeta } from '@storybook/react';
import { CheckReserveInfoPage } from './CheckReserveInfoPage';

function EmptyComp() {
  return <div></div>;
}

export default {
  title: `pages/untactTreatment`,
  component: EmptyComp,
} as ComponentMeta<typeof EmptyComp>;

export const CheckReserveInfo = () => {
  return <CheckReserveInfoPage />;
};
