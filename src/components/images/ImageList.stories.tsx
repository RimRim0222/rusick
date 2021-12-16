import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';
import { Image } from './Image';
import { IMAGE_LIST } from './imageList';
import { IMAGE_SIZE } from './types';

type ImageListProps = {
  width: string;
};

export default {
  title: `components/Image`,
  component: Image,
  argTypes: {
    width: {
      options: IMAGE_SIZE,
      defaultValue: IMAGE_SIZE['194px'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<ImageListProps>;

const Template: Story<ImageListProps> = (args) => {
  return (
    <div>
      {Object.entries(IMAGE_LIST).map(([key, value]) => (
        <ImageWrapper key={key}>
          <Image image={value} {...args} />
          {key}
        </ImageWrapper>
      ))}
    </div>
  );
};

export const LIST = Template.bind({});
LIST.args = {};

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;
