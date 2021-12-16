import { HeaderStep } from '@src/layout/header';
import { atom, selector } from 'recoil';

export enum RESERVE_ENTER_TYPE {
  SYMPTOM = 'SYMPTOM',
  SUBJECT = 'SUBJECT',
}

export interface IReservationInfo {
  useSocialNumber: boolean; //주민번호 수집 동읠
  socialNumber: string; //주민번호
  requestValue: string; //추가 요구사항
  images: File[]; //병변이미지
  passportImage?: File[]; //여권사진 (재외국민일 경우에만)
  paymentType: string; //결제수단
}

export interface IReservation {
  memberId: string;
  code: string;
  enterType: RESERVE_ENTER_TYPE; //질환선택인지, 진료과 선택인지
  enterValue: string[]; //질환 or 진료과 선택 value
  reservationAgree: boolean; //비대면 예약 약관 동의
  doctorValue: string; //선택한 의사 id
  infoValue: IReservationInfo; //예약정보 입력 내용
}

const initReservationInfo: IReservationInfo = {
  useSocialNumber: false,
  socialNumber: '',
  requestValue: '',
  images: [],
  passportImage: [],
  paymentType: '',
};

export const initReservation: IReservation = {
  memberId: '',
  code: '',
  enterType: RESERVE_ENTER_TYPE.SYMPTOM,
  enterValue: [],
  reservationAgree: false,
  doctorValue: '',
  infoValue: initReservationInfo,
};

export const untactReservationState = atom({
  key: 'untactReservationState',
  default: initReservation,
});

//값으로
export const getNowStep = selector({
  key: 'getNowStep',
  get: ({ get }) => {
    return HeaderStep.STEP1;
  },
});
