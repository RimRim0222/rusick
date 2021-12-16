import { ComponentStory, ComponentMeta } from '@storybook/react';
import {PushSetting} from './PushSetting';

export default {
  title: `Features/PushSetting`,
  component: PushSetting,
} as ComponentMeta<typeof PushSetting>;

const Template: ComponentStory<typeof PushSetting> = (args) => <PushSetting />;

export const Default = Template.bind({});
Default.args = {
}
