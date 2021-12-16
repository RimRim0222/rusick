import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MembershipWithdrawalPage } from './MembershipWithdrawalPage';

export default {
  title: `Pages/MembershipWithdrawalPage`,
  component: MembershipWithdrawalPage,
} as ComponentMeta<typeof MembershipWithdrawalPage>;

const Template: ComponentStory<typeof MembershipWithdrawalPage> = () => (
  <MembershipWithdrawalPage />
);

export const Default = Template.bind({});
Default.args = {};
