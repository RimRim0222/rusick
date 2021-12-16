import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecordPage } from './RecordPage';
import { RecordDetailPage } from './RecordDetailPage';

export default {
  title: `pages/RecordPage`,
  component: RecordPage,
} as ComponentMeta<typeof RecordPage>;

export const Step1_RecordDetailPage = () => {
  return <RecordDetailPage />;
};

const Template: ComponentStory<typeof RecordPage> = (args) => <RecordPage />;

export const Default = Template.bind({});
Default.args = {};
