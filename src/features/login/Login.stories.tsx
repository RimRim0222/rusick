import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Login } from './Login';

export default {
  title: `Features/Login`,
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => {
  return <Login />;
};

export const Default = Template.bind({});
Default.args = {};
