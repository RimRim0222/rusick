import { Themes, IFont } from '@src/theme';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FontGuide } from './FontGuide';

export default {
  title: `StyleGuide/FontGuide`,
  component: FontGuide,
} as ComponentMeta<typeof FontGuide>;

const Template: ComponentStory<typeof FontGuide> = (args) => {
  const fontTypes = Themes.fonts;

  return (
    <>
      {Object.keys(fontTypes).map((key) => {
        const type = key as IFont;
        return <FontGuide key={key} type={type} />;
      })}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
