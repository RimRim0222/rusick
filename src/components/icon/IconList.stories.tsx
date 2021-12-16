import { Meta, Story } from '@storybook/react';
import styled from '@emotion/styled';

import { Icon } from './Icon';
import { ICON_LIST } from './IconList';
import { ICON_SIZE } from './types';

type IconListProps = {
  width: string;
};

export default {
  title: `components/Icon`,
  component: Icon,
  argTypes: {
    width: {
      options: ICON_SIZE,
      defaultValue: ICON_SIZE['54px'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<IconListProps>;

const template: Story<IconListProps> = (args) => {
  return (
    <div>
      {Object.entries(ICON_LIST).map(([key, value]) => {
        return (
          <IconWrapper key={key}>
            <Icon icon={value} {...args} />
            {key}
          </IconWrapper>
        );
      })}
    </div>
  );
};

export const LIST = template.bind({});
LIST.args = {};

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;
