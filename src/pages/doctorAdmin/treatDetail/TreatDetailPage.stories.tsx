import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TreatDetailPage } from './TreatDetailPage';

export default {
  title: `AdminPages/TreatDetailPage`,
  component: TreatDetailPage,
} as ComponentMeta<typeof TreatDetailPage>;

const Template: ComponentStory<typeof TreatDetailPage> = (args) => <TreatDetailPage />;

export const Default = Template.bind({});
Default.args = {};
