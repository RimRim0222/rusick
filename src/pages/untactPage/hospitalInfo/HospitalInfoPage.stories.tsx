import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HospitalInfoPage } from './HospitalInfoPage';

export default {
  title: `pages/HospitalInfoPage`,
  component: HospitalInfoPage,
} as ComponentMeta<typeof HospitalInfoPage>;

const Template: ComponentStory<typeof HospitalInfoPage> = (args) => <HospitalInfoPage />;

export const Default = Template.bind({});
Default.args = {};
