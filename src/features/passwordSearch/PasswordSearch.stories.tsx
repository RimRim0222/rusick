import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PasswordSearch } from './PasswordSearch';

export default {
  title: `Features/Password`,
  component: PasswordSearch,
} as ComponentMeta<typeof PasswordSearch>;

const Template: ComponentStory<typeof PasswordSearch> = (args) => <PasswordSearch {...args} />;

export const Search = Template.bind({});
Search.args = {};
