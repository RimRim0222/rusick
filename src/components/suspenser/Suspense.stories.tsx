import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Suspenser } from './Suspenser';
import { TestSuspense } from '@pages/testPage/TestSuspense';

export default {
  title: `Example/TestSuspense`,
  component: TestSuspense,
} as ComponentMeta<typeof TestSuspense>;

const Template: ComponentStory<typeof TestSuspense> = (args) => {
  return (
    // suspense가 필요한경우 suspenser를 통해서 정리 할 것
    // storybook build 이슈로 우회방법 생길때까지 래핑 필요
    <Suspenser>
      <TestSuspense {...args} />
    </Suspenser>
  );
};

export const Default = Template.bind({});
Default.args = {
  test: '12132132',
};
