import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from './Alert';
import { Test } from './Test';

export default {
  title: `Components/Alert`,
  component: Alert,
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => {
  return <Test {...args} />;
};

export const Default = Template.bind({});
Default.args = { message: '인증이 완료되었습니다.', useInput: false, isSingleBtn: true };

export const DualBtn = Template.bind({});
DualBtn.args = {
  message: ['일치하는 회원정보가 없습니다.', '회원가입 하시겠습니까?'],
  useInput: false,
  isSingleBtn: false,
};
export const UseInput = Template.bind({});
UseInput.args = { message: '이메일 주소 수정', useInput: true, isSingleBtn: true };
