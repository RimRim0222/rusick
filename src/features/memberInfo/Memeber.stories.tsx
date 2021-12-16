import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemberAccountSwitch } from './MemberAccountSwitch';
import { MemeberInfo } from './MemeberInfo';

export default {
  title: `Features/Memeber`,
  component: MemeberInfo,
} as ComponentMeta<typeof MemeberInfo>;

const Template: ComponentStory<typeof MemeberInfo> = (args) => <MemeberInfo />;

export const BasicInfo = Template.bind({});
BasicInfo.args = {};

export const AccountToggle = () => <MemberAccountSwitch />;
