import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UntactReservationSymptomContainer } from './UntactReservationSymptomContainer';

export default {
  title: `Container/UntactReservationSymptomContainer`,
  component: UntactReservationSymptomContainer,
} as ComponentMeta<typeof UntactReservationSymptomContainer>;

const Template: ComponentStory<typeof UntactReservationSymptomContainer> = (args) => (
  <UntactReservationSymptomContainer />
);

export const Default = Template.bind({});
Default.args = {};
