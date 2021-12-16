import { ILNG, LNG_KEY } from '@src/i18n';
import { atom, selector } from 'recoil';
import api from '@src/api/Instance';
import { mock } from '@src/api/Mock';

interface IAgreesAPI {
  group: string;
  key: string;
  version: number;
  newest: boolean;
  optional: boolean;
  used: boolean;
  createdDate: string;
  modifiedDate: string;
  translations: translations[];
}

interface translations {
  language: string;
  url: string;
}

export interface IAgrees {
  id: string;
  text?: ILNG;
  isRequired: boolean;
  translations: translations[];
}

const AgreesAllListQuery = selector({
  key: 'agreesAllListState',
  get: async () => {
    const response = await api.get(mock.agrees.url, {});
    const dataFilter: IAgreesAPI[] = response.data.payload.filter((val: IAgreesAPI) => val.used);
    return dataFilter.map((item) => {
      const text = item.key.toUpperCase() as ILNG;
      return {
        id: item.key,
        text: LNG_KEY[text],
        isRequired: item.optional,
        translations: item.translations,
      };
    });
  },
});

export const AgreesAllListResult = atom<IAgrees[]>({
  key: 'agreesAllListResult',
  default: AgreesAllListQuery,
});
