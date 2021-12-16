import { IPushListType, IPushSingleType } from './types';
export const pushListData: IPushListType[] = [
  {
    id: 'reservation',
    textId: 'PUSH_01',
    toggle: false,
  },
  {
    id: 'history',
    textId: 'PUSH_02',
    toggle: false,
  },
  {
    id: 'event',
    textId: 'PUSH_03',
    toggle: false,
  },
  {
    id: 'pay',
    textId: 'PUSH_04',
    toggle: false,
  },
];

export const pushSingleData: IPushSingleType[] = [
  {
    id: 'marketing',
    labelId: 'PUSH_05',
    agreeDate: 'YYYY.MM.DD동의함',
    textId: 'PUSH_051',
    toggle: false,
  },
  {
    id: 'provider',
    labelId: 'PUSH_06',
    agreeDate: 'YYYY.MM.DD동의함',
    textId: 'PUSH_061',
    toggle: false,
  },
];
