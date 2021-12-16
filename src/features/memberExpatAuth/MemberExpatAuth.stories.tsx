import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemberExpatAuth } from './MemberExpatAuth';

export default {
  title: `Features/MemberExpatAuth`,
  component: MemberExpatAuth,
} as ComponentMeta<typeof MemberExpatAuth>;

const Template: ComponentStory<typeof MemberExpatAuth> = () => <MemberExpatAuth />;

export const Default = Template.bind({});
Default.args = {};
