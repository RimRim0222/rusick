import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ICON_LIST } from './IconList';
import { Icon } from './Icon';

const iconList = { ...ICON_LIST };

export default {
  title: `components/Icon`,
  component: Icon,
  argTypes: {
    icon: {
      options: Object.keys(ICON_LIST),
      mapping: iconList,
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => {
  return <Icon {...args} />;
};

export const ICON = Template.bind({});
ICON.args = {
  width: '60px',
};
