import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TestPage } from './TestPage';
// import { TimerTestPage } from './TimerTestPage';

export default {
  title: 'Example/Page',
  component: TestPage,
} as ComponentMeta<typeof TestPage>;

const Template: ComponentStory<typeof TestPage> = (args) => <TestPage />;

export const Test = Template.bind({});
