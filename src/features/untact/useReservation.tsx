import { HeaderStep, useCurrentStep, useHeaderState } from '@src/layout/header';
import { RouteList } from '@src/routes/RouteList';
import {
  initReservation,
  IReservation,
  IReservationInfo,
  RESERVE_ENTER_TYPE,
  untactReservationState,
} from '@src/store/UntactReservationState';
import { useEffect, useReducer } from 'react';
import { useRecoilState } from 'recoil';

type Action =
  | { type: 'enterType'; enterType: RESERVE_ENTER_TYPE }
  | { type: 'enterValue'; activeId: string }
  | { type: 'reservationAgree'; value: boolean }
  | { type: 'paymentAgree'; value: boolean }
  | { type: 'doctorValue'; payload: { doctorId: string; memberId: string } }
  | { type: 'infoValue'; value: IReservationInfo };

function reducer(state: IReservation, action: Action): IReservation {
  switch (action.type) {
    case 'enterType':
      //진입경로 : 질환 or 진료과
      return { ...state, enterType: action.enterType };

    case 'enterValue':
      //질환 or 진료과 선택 values
      //card toggle
      const tmp: string[] = [...state.enterValue];
      const index = tmp.indexOf(action.activeId);
      index < 0 ? tmp.push(action.activeId) : tmp.splice(index, 1);
      return { ...state, enterValue: tmp };

    case 'reservationAgree':
      //비대면진료 약관 동의
      return { ...state, reservationAgree: action.value };

    case 'doctorValue':
      //진료 의사 value
      return { ...state, doctorValue: action.payload.doctorId, memberId: action.payload.memberId };

    case 'infoValue':
      //예약정보 입력
      return { ...state, infoValue: action.value };

    default:
      return { ...state };
  }
}

export function useReservation(enterType?: RESERVE_ENTER_TYPE) {
  const currentStep = useCurrentStep(RouteList.UNTACT_RESERVATION_SYMPTOM);
  const [reserveState, setReserveState] = useRecoilState<IReservation>(untactReservationState);
  const [contents, dispatch] = useReducer(reducer, reserveState);
  const { setHeaderStep } = useHeaderState();

  const onWriteInfo = () => {
    // userId: string;
    // useSocialNumber: boolean; //주민번호 수집 동읠
    // socialNumber: string; //주민번호
    // requestValue: string; //추가 요구사항
    // images: File[]; //병변이미지
    // passportImage?: File[]; //여권사진 (재외국민일 경우에만)
    // paymentType: string; //결제수단
  };

  const onSave = (nextStep?: HeaderStep) => {
    //확인버튼 눌렀을 때 입력값 저장
    setReserveState({ ...contents });
    if (nextStep) setHeaderStep(nextStep);
  };

  const onClear = () => {
    setReserveState(initReservation);
  };

  useEffect(() => {
    console.log(reserveState);
  }, [reserveState]);

  //step별 초기값 지정
  useEffect(() => {
    if (currentStep === HeaderStep.STEP1 && enterType) {
      setReserveState((prev) => ({ ...prev, enterType }));
    }
    if (currentStep === HeaderStep.STEP3) {
      setReserveState((prev) => ({ ...prev, reservationAgree: false }));
    }
  }, [currentStep]);

  return {
    contents,
    dispatch,
    onSave,
    onClear,
  };
}
