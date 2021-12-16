import { atom, selector } from 'recoil';
import api from '@src/api/Instance';
import { mock } from '@src/api/Mock';
import { isEmpty } from 'lodash';
import { IRefresh } from './type';

const { url, results } = mock.email;

export type IEmailResult = typeof results;

const initEmailParams = '';

// parameter용 처리 조회를 원할때 params에 파라미터들을 주입한다
export const testEmailParams = atom<string>({
  key: 'testEmailParams',
  default: initEmailParams,
});

export const testEmailRefresh = atom<IRefresh>({
  key: 'testEmailRefresh',
  default: 0,
});

// emailParams에 데이터가 주입되면 eamilQuery는 get을 수행한다(emailParams에 의존적)
const testEmailQuery = selector<IEmailResult>({
  key: 'testEmailQuery',
  get: async ({ get }) => {
    const refresh = get(testEmailRefresh);
    const emailText = get(testEmailParams);
    if (isEmpty(emailText)) {
      return { isDuplicate: false };
    }
    try {
      const response = await api.get(url, { params: { email: emailText } });
      return await response.data.json();
    } catch (error) {
      return { isDuplicate: true };
    }
  },
});

// email의 조회 결과값이 emailResult에 저장된다.
// emailQuery는 실제적으로 외부로 노출되지 않으며 결과값만 받아온다고 생각
export const testEmailResult = atom<IEmailResult>({
  key: 'testEmailResult',
  default: testEmailQuery,
});
