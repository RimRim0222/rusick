import { selector, atom } from 'recoil';
import api from '@src/api/Instance';
import { mock } from '@src/api/Mock';

interface ISubjectApi {
  idx: number;
  id: string;
  subjectName: string;
  image: string;
}

export interface ISubject {
  idx: number;
  id: string;
  image: string;
  symptom: string;
}

interface ISubjectQueryParam {
  sort: string;
}

export const SubjectQueryParam = atom<ISubjectQueryParam>({
  key: 'getSymptomParam',
  default: {
    sort: '',
  },
});

const currentSubjectQuery = selector({
  key: 'currentSubjectQuery',
  get: async ({ get }) => {
    const param = get(SubjectQueryParam);
    const response = await api.get(mock.getSubject.url, {
      params: mock.getSubject.params,
    });

    return response.data.data.map((obj: ISubjectApi) => ({
      idx: obj.idx,
      id: obj.id,
      image: obj.image,
      symptom: obj.subjectName,
    }));
  },
});

export const SubjectState = atom<ISubject[]>({
  key: 'SubjectState',
  default: currentSubjectQuery,
});
