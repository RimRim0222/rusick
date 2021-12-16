import { atom, selector } from 'recoil';
import api from '@src/api/Instance';
import { mock } from '@src/api/Mock';

export interface IDoctorParams {
  userId?: number | null;
  tab: string;
  condition: string;
  location: string;
}

//api 명세확인 후 수정 필요
export interface IDoctor {
  name: string;
  hospital: string;
  location: number;
  like: number;
  reserv: string;
  tag: string;
  active: boolean;
  onClick: () => void;
}
export const initDoctorParams = {
  userId: null,
  tab: 'normal',
  condition: 'location',
  location: 'locationData',
};

export const DoctorParams = atom<IDoctorParams>({
  key: 'DoctorParams',
  default: initDoctorParams,
});

export const GetDoctorQuery = selector<IDoctor[]>({
  key: 'GetDoctorState',
  get: async ({ get }) => {
    //추후 DoctorParams를 api params로 넘겨주기
    const params = get(DoctorParams);
    const response = await api.get(mock.getDoctor.url, { params: { ...mock.getDoctor.params } });
    return response.data.data;
  },
});

export const DoctorResult = atom<IDoctor[]>({
  key: 'DoctorResult',
  default: GetDoctorQuery,
});
