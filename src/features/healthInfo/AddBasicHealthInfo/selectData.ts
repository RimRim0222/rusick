import { Icon, ICON_LIST } from '@src/components/icon';
export const relations = [
  { id: '본인', text: '본인' },
  { id: '아버지', text: '아버지' },
];

export const profileImages = Array(9)
  .fill(0)
  .map((_, idx) => {
    return {
      id: `icon_empty`,
      icon: Icon({ icon: ICON_LIST['icon_empty'], width: '40px' }),
    };
  });
export const birthYear = new Array(122).fill(0).map((_, idx) => {
  return { id: `${idx + 1900}`, text: `${idx + 1900}` };
});
export const birthMonth = new Array(12).fill(0).map((_, idx) => {
  return { id: `${idx + 1}`, text: `${idx + 1}` };
});
export const birthDay = new Array(31).fill(0).map((_, idx) => {
  return { id: `${idx + 1}`, text: `${idx + 1}` };
});
export const bloodType = [
  { id: 'A RH+', text: 'A RH+' },
  { id: 'A RH-', text: 'A RH-' },
  { id: 'B RH+', text: 'B RH+' },
  { id: 'B RH-', text: 'B RH-' },
  { id: 'O RH+', text: 'O RH+' },
  { id: 'O RH-', text: 'O RH-' },
  { id: 'AB RH+', text: 'AB RH+' },
  { id: 'AB RH-', text: 'AB RH-' },
];
export const sexuality = ['남성', '여성'];

/* { value: '어머니' },
{ value: '남편' },
{ value: '와이프' },
{ value: '자녀(남)' },
{ value: '자녀(여)' },
{ value: '할아버지' },
{ value: '할머니' },
{ value: '친척' },
{ value: '지인' },*/
