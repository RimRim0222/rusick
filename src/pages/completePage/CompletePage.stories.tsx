import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CompletePage } from './CompletePage';

export default {
  title: `pages/CompletePage`,
  component: CompletePage,
} as ComponentMeta<typeof CompletePage>;

const Template: ComponentStory<typeof CompletePage> = (args) => <CompletePage />;

export const Default = Template.bind({});
Default.args = {};
