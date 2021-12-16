import { MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from './Tag';
import { TAG_THEME } from './types';

export default {
  title: `Components/Tag`,
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    console.log('handleClick');
  };
  return <Tag {...args} onClick={handleClick} />;
};

export const Default = Template.bind({});
Default.args = {
  label: '증상',
  theme: TAG_THEME.DEFAULT,
  color: '#4AC6FF',
  backgroundColor: '#E2F6FF',
  closable: false,
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: '만성질환',
  theme: TAG_THEME.ROUNDED,
  color: '#FF7805',
  backgroundColor: '#FF7805',
  closable: false,
};

export const Hash = Template.bind({});
Hash.args = {
  label: '개인병원',
  theme: TAG_THEME.HASH,
  closable: false,
};

export const Square = Template.bind({});
Square.args = {
  label: '본인인증',
  theme: TAG_THEME.SQUARE,
  color: '#fff',
  backgroundColor: '#4AC6FF',
  closable: false,
};
