import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Terms } from './Terms';
import { Suspenser } from '@components/suspenser';

export default {
  title: `Features/Terms`,
  component: Terms,
} as ComponentMeta<typeof Terms>;

const Template: ComponentStory<typeof Terms> = (args) => {
  return (
    <Suspenser>
      <Terms {...args} />
    </Suspenser>
  );
};

export const Default = Template.bind({});
Default.args = {
  onClickAgree: () => alert('click agree'),
};
