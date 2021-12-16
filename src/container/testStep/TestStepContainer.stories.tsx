import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TestStepContainer } from './TestStepContainer';

export default {
  title: `Container/TestStepContainer`,
  component: TestStepContainer,
} as ComponentMeta<typeof TestStepContainer>;

const Template: ComponentStory<typeof TestStepContainer> = () => <TestStepContainer />;

export const Default = Template.bind({});
Default.args = {};
