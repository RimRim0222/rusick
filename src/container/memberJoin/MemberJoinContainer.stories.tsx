import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemberJoinContainer } from './MemberJoinContainer';

export default {
  title: `Container/MemberJoinContainer`,
  component: MemberJoinContainer,
} as ComponentMeta<typeof MemberJoinContainer>;

const Template: ComponentStory<typeof MemberJoinContainer> = (args) => <MemberJoinContainer />;

export const Default = Template.bind({});
Default.args = {};
