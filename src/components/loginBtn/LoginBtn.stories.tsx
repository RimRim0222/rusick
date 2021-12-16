import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginBtn } from './LoginBtn';
import { LOGIN_BTN_TYPE, LOGIN_BTN_SIZE } from './types';

export default {
  title: `components/ButtonIcon`,
  component: LoginBtn,
} as ComponentMeta<typeof LoginBtn>;

const Template: ComponentStory<typeof LoginBtn> = (args) => <LoginBtn {...args} />;

export const LoginButton = Template.bind({});
LoginButton.args = {
  type: LOGIN_BTN_TYPE.KAKAO,
  size: LOGIN_BTN_SIZE.MEDIUM,
};
