import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Join } from './Join';

export default {
  title: `Features/Join`,
  component: Join,
} as ComponentMeta<typeof Join>;

const Template: ComponentStory<typeof Join> = (args) => <Join />;

export const Default = Template.bind({});
Default.args = {};
