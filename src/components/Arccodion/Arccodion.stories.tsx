import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TestArccodion } from './TestArccodion';

export default {
  title: `Components/Arccodion`,
  component: TestArccodion,
} as ComponentMeta<typeof TestArccodion>;

const Template: ComponentStory<typeof TestArccodion> = (args) => <TestArccodion />;

export const Default = Template.bind({});
Default.args = {};
