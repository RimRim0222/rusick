import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuPage } from './MenuPage';

export default {
  title: `pages/MenuPage`,
  component: MenuPage,
} as ComponentMeta<typeof MenuPage>;

const Template: ComponentStory<typeof MenuPage> = (args) => <MenuPage />;

export const Default = Template.bind({});
Default.args = {};
