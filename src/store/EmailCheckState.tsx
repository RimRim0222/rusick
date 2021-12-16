import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import api from '@src/api/Instance';
import { mock } from '@src/api/Mock';
import { isEmpty } from 'lodash';

const { url, results } = mock.email;

export type IEmailResult = typeof results;

const initEmailParams = '';

// 새로고침
export const emailParamsRequestID = atom({
  key: 'emailParamsRequestID',
  default: 0,
});

// parameter용 처리 조회를 원할때 params에 파라미터들을 주입한다
export const emailParams = atom<string>({
  key: 'emailState',
  default: initEmailParams,
});

// emailParams에 데이터가 주입되면 eamilQuery는 get을 수행한다(emailParams에 의존적)
const emailQuery = selector<IEmailResult>({
  key: 'emailQuery',
  get: async ({ get }) => {
    get(emailParamsRequestID);
    const emailText = get(emailParams);
    if (isEmpty(emailText)) {
      return { isDuplicate: false };
    }
    try {
      const response = await api.get(url, { params: { email: emailText } });
      return response.data;
    } catch (error) {
      return { isDuplicate: true };
    }
  },
});

// email의 조회 결과값이 emailResult에 저장된다.
// emailQuery는 실제적으로 외부로 노출되지 않으며 결과값만 받아온다고 생각
export const emailResult = atom<IEmailResult>({
  key: 'emailResult',
  default: emailQuery,
});
