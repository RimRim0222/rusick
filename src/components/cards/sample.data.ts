import { CARD_TAGS, NATION_TYPE } from './types';

export const sampleSubjectList = [
  {
    id: 'card1',
    image: 'icon_sp_01',
    text: '내과',
  },
  {
    id: 'card2',
    image: 'icon_sp_02',
    text: '스포츠재활의학과',
  },
];

export const smapleSymptomData = [
  {
    id: 'card1',
    tag: CARD_TAGS.DISEASE,
    symptom: '고지혈증',
    image: 'sy_01',
  },
  {
    id: 'card2',
    tag: CARD_TAGS.DISEASE,
    symptom: '갑상선질환',
    image: 'sy_02',
  },
  {
    id: 'card3',
    tag: CARD_TAGS.SYMPTOM,
    symptom: '두통',
    image: 'sy_06',
  },
  {
    id: 'card4',
    tag: CARD_TAGS.SYMPTOM,
    symptom: '아토피/피부발진',
    image: 'sy_07',
  },
];

export const ExpatSampleData = [
  {
    type: NATION_TYPE.LOCAL,
    id: 'KOR',
  },
  {
    type: NATION_TYPE.EXPAT,
    id: 'GLOBAL',
  },
];
