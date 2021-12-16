import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaymentSettingPage } from './PaymentSettingPage';

export default {
  title: `Pages/PaymentSettingPage`,
  component: PaymentSettingPage,
} as ComponentMeta<typeof PaymentSettingPage>;

const Template: ComponentStory<typeof PaymentSettingPage> = () => <PaymentSettingPage />;

export const Default = Template.bind({});
Default.args = {};
