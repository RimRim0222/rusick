import { ComponentMeta, ComponentStory } from '@storybook/react';
import { I18N_LNG } from '@src/i18n';
import { Translate } from './Translate';

export default {
  title: `Features/Translate`,
  component: Translate,
} as ComponentMeta<typeof Translate>;

const Template: ComponentStory<typeof Translate> = (args) => <Translate {...args} />;

export const DefaultLng = Template.bind({});
DefaultLng.args = {
  lng: I18N_LNG.EN,
};
