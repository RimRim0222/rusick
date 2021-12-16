import { ILNG, LNG_KEY } from '@src/i18n';

interface IListSort {
  id: string;
  labelKey: ILNG;
}

export const searchSymptomSortItems: IListSort[] = [
  {
    id: 'symptomName',
    labelKey: LNG_KEY.SORT_LIST_O4, //'증상명'
  },
  {
    id: 'diseaseName',
    labelKey: LNG_KEY.SORT_LIST_O5, //'질환명'
  },
  {
    id: 'nameSort',
    labelKey: LNG_KEY.SORT_LIST_O2, //'가나다 순'
  },
];

export const doctorSortItems: IListSort[] = [
  {
    id: 'location',
    labelKey: LNG_KEY.SORT_LIST_O1, //거리순
  },
  {
    id: 'name',
    labelKey: LNG_KEY.SORT_LIST_O2, //가나다순
  },
  {
    id: 'reserv',
    labelKey: LNG_KEY.SORT_LIST_O3, //'예약 가능한 의사'
  },
];
