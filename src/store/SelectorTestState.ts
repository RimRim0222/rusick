import api from '@src/api/Instance';
import {
  atom,
  atomFamily,
  DefaultValue,
  selector,
  useRecoilState,
  useSetRecoilState,
} from 'recoil';

import { mock } from '@src/api/Mock';

const { url, results } = mock.email;

type ITestResult = typeof results;

interface ISelectorTestState {
  id: string;
}

const initSelectorTestState: ISelectorTestState = {
  id: '',
};

export const SelectorTestParams = atom({
  key: 'SelectorTestparams',
  default: '',
});

export const RefreshParams = atom({
  key: 'RefreshParams',
  default: 0,
});

const SelectorTestAsync = selector({
  key: 'SelectorTestAsync',
  get: async ({ get }) => {
    get(RefreshParams);
    const response = await api.get(url, { params: { email: get(SelectorTestParams) } });
    return response.data.json();
  },
});

export const SelectorTestResult = atom<ITestResult>({
  key: 'SelectorTestResult',
  default: SelectorTestAsync,
});
