import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BUTTON_ICON_THEME } from './types';
import { ButtonIcon } from './ButtonIcon';
import { ICON_LIST } from '@components/icon/IconList';

export default {
  title: `components/Button`,
  component: ButtonIcon,
  argTypes: {
    iconActive: {
      options: Object.keys(ICON_LIST),
      // mapping: iconList,
      control: {
        type: 'select',
      },
    },
    iconNonActive: {
      options: Object.keys(ICON_LIST),
      // mapping: iconList,
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => <ButtonIcon {...args} />;

export const IconDefault = Template.bind({});
IconDefault.args = {
  lebal: '아이콘 버튼',
  theme: BUTTON_ICON_THEME.DEFAULT,
};

export const IconOutline = Template.bind({});
IconOutline.args = {
  lebal: '아이콘 버튼',
  theme: BUTTON_ICON_THEME.OUTLINE,
};
