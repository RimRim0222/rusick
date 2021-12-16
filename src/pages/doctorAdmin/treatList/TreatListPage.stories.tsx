import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TreatListPage } from './TreatListPage';

export default {
  title: `AdminPages/TreatListPage`,
  component: TreatListPage,
} as ComponentMeta<typeof TreatListPage>;

const Template: ComponentStory<typeof TreatListPage> = (args) => <TreatListPage />;

export const Default = Template.bind({});
Default.args = {};
