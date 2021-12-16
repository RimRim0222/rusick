import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainPage } from './MainPage';

export default {
  title: `Pages/MainPage`,
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage />;

export const Default = Template.bind({});
Default.args = {};
