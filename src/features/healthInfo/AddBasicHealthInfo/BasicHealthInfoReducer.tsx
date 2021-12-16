import { useState, useReducer, useEffect } from 'react';
import { IBasicFormReducerState } from '../types';
import { BasicForm, IBasicFormAction } from '../types';
import { IUserHealthInfo } from '@src/store/HealthInfoState';

const initBasicFormReducer: IBasicFormReducerState = {
  name: '',
  relation: '',
  profileImage: '',
  sexuality: '',
  birthDate: '',
  height: '',
  weight: '',
  bloodType: '',
};

function basicFormReducer(state: IBasicFormReducerState, action: IBasicFormAction) {
  switch (action.type) {
    case BasicForm.BASIC_INFO_INIT:
      return {
        ...action.payload,
      };
    case BasicForm.BASIC_INFO_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case BasicForm.BASIC_INFO_RELATION:
      return {
        ...state,
        relation: action.payload,
      };
    case BasicForm.BASIC_INFO_IMAGE:
      return {
        ...state,
        profileImage: action.payload,
      };
    case BasicForm.BASIC_INFO_SEX:
      return {
        ...state,
        sexuality: action.payload,
      };
    case BasicForm.BASIC_INFO_BIRTH:
      return {
        ...state,
        birthDate: action.payload,
      };
    case BasicForm.BASIC_INFO_HEIGHT:
      return {
        ...state,
        height: action.payload,
      };
    case BasicForm.BASIC_INFO_WEIGHT:
      return {
        ...state,
        weight: action.payload,
      };
    case BasicForm.BASIC_INFO_BLOOD:
      return {
        ...state,
        bloodType: action.payload,
      };
    default: {
      return state;
    }
  }
}

export function useBasicFormReducer() {
  const [BasicFormReducer, dispatchReducer] = useReducer(basicFormReducer, initBasicFormReducer);
  const [canNext, setCanNext] = useState(false);

  const checkValidation = () => {
    const isCanNext = Object.values(BasicFormReducer).filter((value) => value).length;
    setCanNext(isCanNext === 8);
  };
  useEffect(() => {
    checkValidation();
  }, [BasicFormReducer]);

  const setInitState = (val: IUserHealthInfo) => {
    dispatchReducer({ type: BasicForm.BASIC_INFO_INIT, payload: val.basic });
  };
  const changeUserName = (val: string) => {
    dispatchReducer({ type: BasicForm.BASIC_INFO_NAME, payload: val });
  };
  const changeUserRelation = (val: string) => {
    dispatchReducer({ type: BasicForm.BASIC_INFO_RELATION, payload: val });
  };
  const changeProfileImage = (val: string) => {
    dispatchReducer({ type: BasicForm.BASIC_INFO_IMAGE, payload: val });
  };
  const changeUserSexuality = (val: string) => {
    dispatchReducer({ type: BasicForm.BASIC_INFO_SEX, payload: val });
  };
  const changeFullBirthDate = (val: string) => {
    dispatchReducer({ type: BasicForm.BASIC_INFO_BIRTH, payload: val });
  };

  const changeUserHeight = (val: string) => {
    dispatchReducer({ type: BasicForm.BASIC_INFO_HEIGHT, payload: val });
  };
  const changeUserWeight = (val: string) => {
    dispatchReducer({ type: BasicForm.BASIC_INFO_WEIGHT, payload: val });
  };
  const changeUserBloodtype = (val: string) => {
    dispatchReducer({ type: BasicForm.BASIC_INFO_BLOOD, payload: val });
  };

  return {
    BasicFormReducer,
    basicInfoDispatchReducer: {
      setInitState,
      changeUserName,
      changeUserRelation,
      changeProfileImage,
      changeUserSexuality,
      changeFullBirthDate,
      changeUserHeight,
      changeUserWeight,
      changeUserBloodtype,
    },
    canNext,
    checkValidation,
  };
}
