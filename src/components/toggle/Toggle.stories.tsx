import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { TOGGLE_COLOR } from '.';
import { LabelToggle } from './LabelToggle';
import { Toggle } from './Toggle';
import { TOGGLE_SIZE } from './types';

export default {
  title: `components/Toggle`,
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  onChange: () => console.log(),
  size: TOGGLE_SIZE.W50,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  onChange: () => console.log(),
  size: TOGGLE_SIZE.W50,
  color: TOGGLE_COLOR.DEFAULT,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
  size: TOGGLE_SIZE.W50,
};

export const WithLabel = () => {
  const [value, setValue] = useState(false);
  const onChangeHandler = () => {
    setValue((prev) => !prev);
  };
  return (
    <LabelToggle
      checked={value}
      onChange={onChangeHandler}
      disabled={false}
      size={TOGGLE_SIZE.W50}
      color={TOGGLE_COLOR.RED}
      id="toggle"
      label="label"
    />
  );
};

export const Switching = () => {
  const [value, setValue] = useState(false);

  const onChangeHandler = () => {
    setValue((prev) => !prev);
  };

  return (
    <Toggle
      checked={value}
      onChange={onChangeHandler}
      disabled={false}
      size={TOGGLE_SIZE.W50}
      id="toggle"
    />
  );
};
