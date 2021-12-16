import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { MasterCheckbox } from './MasterCheckbox';
import { masterCheckList } from './sample.data';

export default {
  title: `components/checkbox`,
  component: MasterCheckbox,
} as ComponentMeta<typeof MasterCheckbox>;

// const Template: ComponentStory<typeof MasterCheckbox> = (args) => {
//   const [reqCheck, setReqCheck] = useState(false);
//   const onCheckHandler = (value: string[]) => {
//     (value.length === 0)?setReqCheck(false):setReqCheck(true);
//   };
//   return (
//     <div>
//       <p style={{color : "#e00"}}>{reqCheck ? '필수체크 완료' : '필수체크 안됨'}</p>
//       <MasterCheckbox {...args} onCheckValue={onCheckHandler} />
//     </div>
//   );
// };

const Template: ComponentStory<typeof MasterCheckbox> = (args) => <MasterCheckbox {...args} />;

export const MasterCheck = Template.bind({});
MasterCheck.args = {
  options: masterCheckList,
};
