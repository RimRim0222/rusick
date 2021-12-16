import { atom, selector } from 'recoil';
import api from '@src/api/Instance';
import { mock } from '@src/api/Mock';
import { IAddress } from '@src/components/postCode/types';

export interface IMember {
  tokenKey: string;
}

export interface IMemberBasicInfo {
  memberType: string;
  memberName: string;
  memberPhone: string;
  memberEmail: string;
  memberAddress: IAddress;
}

const initMemberBasicInfoParams = {
  tokenKey: '12345',
};

export const memberBasicInfoParams = atom({
  key: 'memberBasicInfoParams',
  default: initMemberBasicInfoParams,
});

const getMemberBasicInfoQuery = selector<IMemberBasicInfo>({
  key: 'getMemberBasicInfoQuery',
  get: async ({ get }) => {
    const params = get(memberBasicInfoParams);
    try {
      const response = await api.get(mock.memberBasicInfo.url, { params: params });
      const dataResult = response.data.payload;
      return dataResult;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
});

export const getMemberBasicInfoResult = atom<IMemberBasicInfo>({
  key: 'getMemberBasicInfoResult',
  default: getMemberBasicInfoQuery,
});

const initMemberBasicInfoModifyParams = {
  result: true,
};

export const memberBasicInfoModifyParams = atom({
  key: 'memberBasicInfoModifyParams',
  default: initMemberBasicInfoModifyParams,
});

const memberBasicInfoModifyQuery = selector<{ result: boolean }>({
  key: 'memberBasicInfoModifyQuery',
  get: async ({ get }) => {
    const params = get(memberBasicInfoModifyParams);
    try {
      const response = await api.get(mock.memberBasicInfoModify.url, { params: params });
      const dataResult = response.data.payload;
      return dataResult;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
});

export const memberBasicInfoModifyResult = atom({
  key: 'memberBasicInfoModifyResult',
  default: memberBasicInfoModifyQuery,
});
