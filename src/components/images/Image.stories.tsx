import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from './Image';
import { IMAGE_LIST } from './imageList';

const imageList = { ...IMAGE_LIST };

export default {
  title: `components/Image`,
  component: Image,
  argTypes: {
    image: {
      options: Object.keys(IMAGE_LIST),
      mapping: imageList,
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const IMAGE = Template.bind({});
IMAGE.args = {
  width: '150px',
};
