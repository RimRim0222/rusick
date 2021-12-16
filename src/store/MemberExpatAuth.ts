import { atom, selector } from 'recoil';
import api from '@src/api/Instance';
import { mock } from '@src/api/Mock';
import { isEmpty } from 'lodash';

// 인증번호 전송 요청
export interface IMemberExpatAuthCodeSend {
  authKey: string;
}
export interface IMemberExpatAuthCodeSendCheck {
  authResult: string;
}

export enum SEND_TYPE {
  ALL = 'ALL',
  SMS = 'SMS',
  EMAIL = 'EMAIL',
}

export const memberExpathAuthCodeSendID = atom({
  key: 'memberExpathAuthCodeSendID',
  default: 0,
});

const initMemberExpatAuthCodeSendParams = {
  phone: '',
  email: '',
  memberName: '',
  sendType: SEND_TYPE.ALL,
};

export const memberExpatAuthCodeSendParams = atom({
  key: 'memberExpatAuthCodeSendParams',
  default: initMemberExpatAuthCodeSendParams,
});

const memberExpatAuthCodeSendQuery = selector<IMemberExpatAuthCodeSend>({
  key: 'memberExpatAuthCodeSendQuery',
  get: async ({ get }) => {
    const params = get(memberExpatAuthCodeSendParams);
    if (isEmpty(params.phone)) {
      return {
        authKey: null,
      };
    }
    try {
      const response = await api.get(mock.memberExpatAuthCodeSend.url, { params: params });
      const dataResult = response.data.payload;
      return {
        authKey: dataResult.authKey,
      };
    } catch (error) {
      return {
        authKey: null,
      };
    }
  },
});

export const memberExpatAuthCodeSendResult = atom<IMemberExpatAuthCodeSend>({
  key: 'memberExpatAuthCodeSendResult',
  default: memberExpatAuthCodeSendQuery,
});

// 인증번호 인증

export const memberExpathAuthCodeCheckID = atom({
  key: 'memberExpathAuthCodeCheckID',
  default: 0,
});

const initMemberExpatAuthCodeCheckParams = {
  authKey: '',
  authCode: '',
};

export const memberExpatAuthCodeCheckParams = atom({
  key: 'memberExpatAuthCodeCheckParams',
  default: initMemberExpatAuthCodeCheckParams,
});

const memberExpatAuthCodeCheckQuery = selector({
  key: 'memberExpatAuthCodeCheckQuery',
  get: async ({ get }) => {
    const params = get(memberExpatAuthCodeCheckParams);
    if (isEmpty(params.authCode)) {
      return {
        authResult: null,
      };
    }
    try {
      const response = await api.get(mock.memberExpatAuthCheck.url, { params: params });
      const dataResult = response.data.payload;
      return {
        authResult: dataResult.authResult,
      };
    } catch (error) {
      return {
        authResult: null,
      };
    }
  },
});

export const memberExpatAuthCodeCheckResult = atom({
  key: 'memberExpatAuthCodeCheckResult',
  default: memberExpatAuthCodeCheckQuery,
});
