import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';
import { SelectMulti } from './SelectMulti';
import { SelectIcon } from './selectIcon/SelectIcon';
import { SELECT_THEME, SELECT_STYLE_THEME } from './types';
import { Icon, ICON_LIST } from '../icon';

const sampleOption = [...Array(20)].map((obj, idx) => {
  return {
    id: `option${idx}`,
    text: `option${idx}`,
  };
});

const sampleIconOption = [...Array(20)].map((obj, idx) => {
  return {
    id: `option${idx}`,
    icon: Icon({ icon: ICON_LIST[`ac_0${(idx % 6) + 1}`], width: '40px' }),
  };
});

const sampleOptionKeys = {
  id: 'id',
  text: 'text',
};

export default {
  title: `components/Select`,
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  id: 'select1',
  theme: SELECT_THEME.DEFAULT,
  defaultValue: sampleOption[0].id,
  layerSplit: '1',
  onSelect: (value: string) => console.log(value),
  options: sampleOption,
  OptionKeys: sampleOptionKeys,
};

export const DialogSelect = Template.bind({});
DialogSelect.args = {
  id: 'select2',
  theme: SELECT_THEME.DIALOG,
  styleTheme: SELECT_STYLE_THEME.NONELINE,
  defaultValue: sampleOption[0].id,
  label: 'option title',
  layerSplit: '1',
  onSelect: (value: string) => console.log(value),
  options: sampleOption,
  OptionKeys: sampleOptionKeys,
};

export const MultiSelect = () => {
  const onSelectHandler = (value: string[]) => {
    console.log(value);
  };

  return (
    <SelectMulti
      id="select3"
      label="select label"
      layerSplit="1"
      styleTheme={SELECT_STYLE_THEME.DEFAULT}
      onSelect={onSelectHandler}
      options={sampleOption}
      OptionKeys={sampleOptionKeys}
    />
  );
};

export const IconSelect = () => {
  const onSelectHandler = (value: string) => {
    console.log(value);
  };
  return (
    <SelectIcon
      id="select3"
      theme={SELECT_THEME.DIALOG}
      label="select label"
      layerSplit="3"
      styleTheme={SELECT_STYLE_THEME.NONELINE}
      onSelect={onSelectHandler}
      options={sampleIconOption}
      placeholder={Icon({ icon: ICON_LIST['plus'], width: '40px' })}
    />
  );
};
