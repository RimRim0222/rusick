import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormCheck } from './FormCheck';

export default {
  title: `Features/FormCheck`,
  component: FormCheck,
} as ComponentMeta<typeof FormCheck>;

const Template: ComponentStory<typeof FormCheck> = () => <FormCheck />;

export const Default = Template.bind({});
Default.args = {};
