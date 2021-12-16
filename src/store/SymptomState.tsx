import { atom, selector } from 'recoil';
import api from '@src/api/Instance';
import { mock } from '@src/api/Mock';
import { isEmpty } from 'lodash';

enum CARD_TAGS {
  DISEASE = 'DISEASE',
  SYMPTOM = 'SYMPTOM',
}

interface ISymptomAPI {
  idx: number;
  id: string;
  image: string;
  symptom: string;
  tag: string;
}

export interface ISymptomQueryParam {
  text: string;
  sort: string;
}

//symptom api 호출
const currentQuery = async (param: ISymptomQueryParam) => {
  const response = await api.get(mock.getSymptom.url, {
    params: mock.getSymptom.params,
  });

  return response.data;
};

/* ======================= 
  질병/질환 리스트 조회 api
======================= */
export interface ISymptomList {
  id: string;
  symptom: string;
  tag: CARD_TAGS;
}

export const SymptomListQueryParam = atom<ISymptomQueryParam>({
  key: 'SymptomListQueryParam',
  default: {
    text: '',
    sort: '',
  },
});

export const symptomListQueryRefresh = atom({
  key: 'symptomListQueryRefresh',
  default: 0,
});

// symptom 전체 쿼리 호출
const symptomListQuery = selector<ISymptomList[]>({
  key: 'symptomListQuery',
  get: async ({ get }) => {
    const param = get(SymptomListQueryParam);
    const response = await currentQuery(param);

    return response.data.map((obj: ISymptomAPI) => ({
      id: obj.id,
      symptom: obj.symptom,
      tag: obj.tag,
    }));
  },
});

export const SymptomListState = atom<ISymptomList[]>({
  key: 'SymptomListState',
  default: symptomListQuery,
});

/* ======================= 
  질병/질환 이미지 조회 api
======================= */
export interface ISymptomImage {
  id: string;
  image: string;
  symptom: string;
  tag: CARD_TAGS;
}

export const SymptomImageQueryParam = atom<ISymptomQueryParam>({
  key: 'SymptomImageQueryParam',
  default: {
    text: '',
    sort: '',
  },
});

const symptomImageQuery = selector<ISymptomImage[]>({
  key: 'symptomImageQuery',
  get: async ({ get }) => {
    const param = get(SymptomImageQueryParam);
    const response = await currentQuery(param);
    console.log('result', response);
    return response.data
      .filter((obj: ISymptomAPI) => !isEmpty(obj.image))
      .map((obj: ISymptomAPI) => ({
        id: obj.id,
        image: obj.image,
        symptom: obj.symptom,
        tag: obj.tag,
      }));
  },
});

export const SymptomImageState = atom<ISymptomImage[]>({
  key: 'SymptomImageState',
  default: symptomImageQuery,
});
