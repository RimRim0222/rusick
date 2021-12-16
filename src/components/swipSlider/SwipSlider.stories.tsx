import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { sampleSlider } from './sample.data';
import { SwipSlider } from './SwipSlider';

export default {
  title: `components/SwipSlider`,
  component: SwipSlider,
} as ComponentMeta<typeof SwipSlider>;

const sampleElement: JSX.Element[] = sampleSlider.map((item) => (
  <div key={item.idx}>div_{item.contents}</div>
));
const Template: ComponentStory<typeof SwipSlider> = (args) => {
  const [nowPage, setNowPage] = useState(0);

  const onPageHandler = (page: number) => {
    setNowPage(page);
  };

  return (
    <>
      nowPage : {nowPage}
      <div style={{ width: '300px', height: '300px' }}>
        <SwipSlider {...args} onPage={onPageHandler} />
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: sampleElement,
  pagination: 'bullets',
};
