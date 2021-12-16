import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemberAuthTypeCheckPage } from './MemberAuthTypeCheckPage';

export default {
  title: `Pages/MemberAuthTypeCheck`,
  component: MemberAuthTypeCheckPage,
} as ComponentMeta<typeof MemberAuthTypeCheckPage>;

const Template: ComponentStory<typeof MemberAuthTypeCheckPage> = (args) => {
  return <MemberAuthTypeCheckPage />;
};

export const Default = Template.bind({});
Default.args = {};
