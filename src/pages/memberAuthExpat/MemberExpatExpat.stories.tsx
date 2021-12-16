import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemberAuthExpatPage } from './MemberAuthExpatPage';

export default {
  title: `Pages/MemberExpatAuthPage`,
  component: MemberAuthExpatPage,
} as ComponentMeta<typeof MemberAuthExpatPage>;

const Template: ComponentStory<typeof MemberAuthExpatPage> = (args) => <MemberAuthExpatPage />;

export const Default = Template.bind({});
Default.args = {};
