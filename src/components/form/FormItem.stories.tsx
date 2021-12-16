import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormItem } from './FormItem';
import { FORM_LAYOUT_THEME } from './types';
import { Input, INPUT_TYPE, INPUT_SIZE, INPUT_THEME } from '@components/input';
import { LNG_KEY } from '@src/i18n';
import { useForm } from './useForm';

export default {
  title: `Components/Form`,
  component: FormItem,
  argTypes: {
    showMessage: {
      options: Object.keys(LNG_KEY),
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof FormItem>;

const Template: ComponentStory<typeof FormItem> = (args) => {
  const { inputValue, hasError, canNext, handleChange } = useForm();
  return (
    <FormItem {...args} isError={inputValue.isError}>
      <Input
        type={INPUT_TYPE.TEXT}
        name="text"
        inputValue={inputValue.value}
        size={INPUT_SIZE.MEDIUM}
        theme={INPUT_THEME.NONROUNDED}
        placeholder="입력해주세요."
        allowClear={true}
        onChange={handleChange}
      />
    </FormItem>
  );
};

export const LABEL_DEFAULT = Template.bind({});
LABEL_DEFAULT.args = {
  border: true,
  isRequired: true,
};

export const LABEL_HORIZONTAL = Template.bind({});
LABEL_HORIZONTAL.args = {
  label: LNG_KEY.EMAIL,
  formTheme: FORM_LAYOUT_THEME.LABEL_HORIZONTAL,
  border: true,
  isRequired: true,
};

export const LABEL_VERTICAL = Template.bind({});
LABEL_VERTICAL.args = {
  label: LNG_KEY.EMAIL,
  formTheme: FORM_LAYOUT_THEME.LABEL_VERTICAL,
  border: true,
  isRequired: true,
};

export const BORDER_EMPTY = Template.bind({});
BORDER_EMPTY.args = {
  label: LNG_KEY.EMAIL,
  formTheme: FORM_LAYOUT_THEME.LABEL_HORIZONTAL,
  border: false,
  isRequired: true,
};
