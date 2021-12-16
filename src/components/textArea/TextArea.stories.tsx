import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from './TextArea';
import { useState } from 'react';

export default {
  title: `Components/TextArea`,
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (value: string) => setInputValue(value);
  return <TextArea {...args} inputValue={inputValue} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {};
