import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BUTTON_THEME } from './types';
import { Button } from './Button';

export default {
  title: `Components/Button`,
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Text',
  theme: BUTTON_THEME.DEFAULT,
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Text',
  theme: BUTTON_THEME.OUTLINE,
};

export const DownLoad = Template.bind({});
DownLoad.args = {
  label: 'Text',
  theme: BUTTON_THEME.DOWNLOAD,
};

export const GhostDefault = Template.bind({});
GhostDefault.args = {
  label: 'Text',
  theme: BUTTON_THEME.GHOST_DEFAULT,
};

export const GhostBlack = Template.bind({});
GhostBlack.args = {
  label: 'Text',
  theme: BUTTON_THEME.GHOST_BLACK,
};
