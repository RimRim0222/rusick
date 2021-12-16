import { atom, selector } from 'recoil';
import api from '@src/api/Instance';
import { mock } from '@src/api/Mock';
import { IBasicFormReducerState } from '@src/features/healthInfo/types';

//증상 카드 가져오기
const HistorySymptomQuery = selector({
  key: 'historySymptomState',
  get: async () => {
    const response = await api.get(mock.getHistorySymptom.url, {});
    return response.data.data;
  },
});

const FamilySymptomQuery = selector({
  key: 'familySymptomState',
  get: async () => {
    const response = await api.get(mock.getFamilySymptom.url, {});
    return response.data.data;
  },
});

export const HistorySymptomResult = atom({
  key: 'historySymptomResult',
  default: HistorySymptomQuery,
});

export const FamilySymptomResult = atom({
  key: 'familySymptomResult',
  default: FamilySymptomQuery,
});

// 회원 건강 정보 가져오기
interface ISocialHistory {
  drinkingOrnot: string;
  drinkingAmount: string;
  smokingOrNot: string;
  smokingAmount: string;
}
export interface IUserHealthInfo {
  basic: IBasicFormReducerState;
  medicalHistory: string[];
  familyHistory: string[];
  socialHistory: ISocialHistory;
}

export const UserHealthInfoParam = atom<typeof mock.getUserHealthInfo.params>({
  key: 'userHealthInfoParam',
  default: mock.getUserHealthInfo.params,
});
const UserHealthInfoQuery = selector<IUserHealthInfo>({
  key: 'getUserHealthInfo',
  get: async ({ get }) => {
    const params = get(UserHealthInfoParam);
    //새로운 건강정보 추가시 상태값 초기화
    if (params.userId === 'init') {
      return {
        basic: {
          name: '',
          relation: '',
          profileImage: '',
          sexuality: '',
          birthDate: '',
          height: '',
          weight: '',
          bloodType: '',
        },
        medicalHistory: [],
        familyHistory: [],
        socialHistory: {
          dirinkingOrNot: '음주안함',
          drinkingAmount: '',
          smokingOrNot: '흡연안함',
          smokingAmount: '',
        },
      };
    }
    const response = await api.get(mock.getUserHealthInfo.url, {
      params,
    });

    return response.data;
  },
});

export const UserHealthInfoResult = atom<IUserHealthInfo>({
  key: 'userHealthInfoResult',
  default: UserHealthInfoQuery,
});
