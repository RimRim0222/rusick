import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: `components/Checkbox`,
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  isChecked: false,
  label: '선택',
  id: 'check1',
  disabled: false,
  onClick: (value: string) => console.log('click check'),
};

export const Suffiex = Template.bind({});
Suffiex.args = {
  isChecked: false,
  label: '선택',
  id: 'check1',
  disabled: false,
  onClick: (value: string) => console.log('click check'),
  suffixIcon: 'icn_arrow_60x60',
  onClickSuffix: () => console.log('onClickSuffix'),
};

export const WidthLabel = Template.bind({});
WidthLabel.args = {
  isChecked: false,
  label: 'check',
};
