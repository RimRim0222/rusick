import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmailUpdatePage } from './EmailUpdatePage';

export default {
  title: `Pages/EmailUpdatePage`,
  component: EmailUpdatePage,
} as ComponentMeta<typeof EmailUpdatePage>;

const Template: ComponentStory<typeof EmailUpdatePage> = (args) => {
  return <EmailUpdatePage />;
};

export const Default = Template.bind({});
Default.args = {};
