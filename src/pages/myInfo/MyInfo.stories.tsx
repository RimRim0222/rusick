import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MyInfoPage } from './MyInfoPage';

export default {
  title: `Pages/MyInfoPage`,
  component: MyInfoPage,
} as ComponentMeta<typeof MyInfoPage>;

const Template: ComponentStory<typeof MyInfoPage> = (args) => <MyInfoPage />;

export const Default = Template.bind({});
Default.args = {};
