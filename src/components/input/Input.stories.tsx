import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';
import { INPUT_TYPE, INPUT_SIZE, INPUT_THEME } from './types';
import { useState } from 'react';
import { ICON_LIST } from '@components/icon/IconList';

export default {
  title: `Components/Input`,
  component: Input,
  argTypes: {
    prefixIcon: {
      options: Object.keys(ICON_LIST),
      control: {
        type: 'select',
      },
    },
    suffixIcon: {
      options: Object.keys(ICON_LIST),
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [inputValue, setInputValue] = useState('defaultValue');
  const handleChange = (value: string) => setInputValue(value);
  return <Input {...args} inputValue={inputValue} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  type: INPUT_TYPE.TEXT,
  name: 'default',
  theme: INPUT_THEME.NONROUNDED,
  size: INPUT_SIZE.MEDIUM,
  placeholder: 'placeholder',
  disabled: false,
  allowClear: true,
  prefixIcon: '',
  suffixIcon: '',
};

export const PASSWORD = Template.bind({});
PASSWORD.args = {
  type: INPUT_TYPE.PW,
  name: 'default',
  theme: INPUT_THEME.NONROUNDED,
  size: INPUT_SIZE.MEDIUM,
  placeholder: 'placeholder',
  disabled: false,
  allowClear: true,
  prefixIcon: '',
  suffixIcon: '',
};

export const PREFIX_ICON = Template.bind({});
PREFIX_ICON.args = {
  type: INPUT_TYPE.TEXT,
  name: 'default',
  theme: INPUT_THEME.NONROUNDED,
  size: INPUT_SIZE.MEDIUM,
  placeholder: 'placeholder',
  disabled: false,
  allowClear: true,
};

export const SUFFIX_ICON = Template.bind({});
SUFFIX_ICON.args = {
  type: INPUT_TYPE.TEXT,
  name: 'default',
  theme: INPUT_THEME.NONROUNDED,
  size: INPUT_SIZE.MEDIUM,
  placeholder: 'placeholder',
  disabled: false,
  allowClear: true,
  suffixIcon: 'search',
};
