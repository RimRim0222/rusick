import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Radio} from './Radio';

export default {
  title: `Components/Radio`,
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

//label
export const Default = Template.bind({});
Default.args = {
    value : 'value1',
    onChange:(val) => alert(val)
}

//disable
export const Disabled = Template.bind({});
Disabled.args = {
    value : "value1",
    onChange:(val) => alert(val),
    disabled : true
}

//label
export const WidthLabel = Template.bind({});
WidthLabel.args = {
    label : 'radio1',
    value : 'value1',
    disabled : false,
    onChange:(val) => alert(val)
}

//수평 , 수직
export const RadioList = () => {
    return [...Array(3)].map((val, idx) => {
        const propObj = {
            label : `radio${idx+1}`,
            value : `value${idx+1}`,
            onChange : (val:string) => alert(val),
            disabled : false
        }
        return <div key={idx}><Radio {...propObj} /></div>
    })
}
