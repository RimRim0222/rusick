import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileUpload } from './FileUpload';

export default {
  title: `components/FileUpload`,
  component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  onLoadFile: (file: File | null) => console.log(file),
};
