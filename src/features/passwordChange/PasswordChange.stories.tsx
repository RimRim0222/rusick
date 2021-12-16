import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PasswordChange } from './PasswordChange';

export default {
  title: `Features/Password`,
  component: PasswordChange,
} as ComponentMeta<typeof PasswordChange>;

const Template: ComponentStory<typeof PasswordChange> = (args) => <PasswordChange />;

export const Change = Template.bind({});
Change.args = {};
