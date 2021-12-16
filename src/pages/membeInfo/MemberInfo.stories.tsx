import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemberInfoPage } from './MemberInfoPage';

export default {
  title: `Pages/MemberInfoPage`,
  component: MemberInfoPage,
} as ComponentMeta<typeof MemberInfoPage>;

const Template: ComponentStory<typeof MemberInfoPage> = (args) => <MemberInfoPage />;

export const Default = Template.bind({});
Default.args = {};
