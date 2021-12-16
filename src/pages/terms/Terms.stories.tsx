import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TermsPage } from './TermsPage';

export default {
  title: `Pages/Terms`,
  component: TermsPage,
} as ComponentMeta<typeof TermsPage>;

const Template: ComponentStory<typeof TermsPage> = (args) => <TermsPage />;

export const Terms = Template.bind({});
Terms.args = {
  onClickAgree: () => alert('click agree'),
};
