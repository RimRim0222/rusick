import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Timer } from './Timer';

export default {
  title: `Components/Timer`,
  component: Timer,
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />;

export const Default = Template.bind({});
Default.args = {};
