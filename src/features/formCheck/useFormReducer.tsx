import { checkFormNext, checkObject, checkFormError } from '@utils/form';
import { LNG_KEY } from '@src/i18n';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { EventForm, IReducerState, IUserFormAction } from './type';

const initTestFormReducer: IReducerState = {
  userName: {
    value: '',
    isRequired: true,
  },
  phone: {
    value: '',
    isRequired: true,
  },
  age: {
    value: 39,
    isRequired: true,
    validation: (value) => {
      return value < 100 ? LNG_KEY.LOGIN_MAIN_TITLE_01 : null;
    },
    defaultError: LNG_KEY.CHECK,
  },
};

function testFormReducer(state: IReducerState, action: IUserFormAction) {
  switch (action.type) {
    case EventForm.NAME: {
      return {
        ...state,
        userName: checkObject(state.userName, action.payload),
      };
    }
    case EventForm.PHONE: {
      return {
        ...state,
        phone: checkObject(state.phone, action.payload),
      };
    }
    case EventForm.AGE: {
      return {
        ...state,
        age: checkObject(state.age, action.payload),
      };
    }
    default: {
      return state;
    }
  }
}

export function useFormReducer() {
  const [testReducer, dispatchReducer] = useReducer(testFormReducer, initTestFormReducer);
  const [hasError, setHasError] = useState<boolean>(false);
  const [canNext, setCanNext] = useState<boolean>(false);

  const checkValidation = useCallback(() => {
    setHasError(checkFormError(testReducer));
    setCanNext(checkFormNext(testReducer));
  }, [testReducer]);

  useEffect(() => {
    checkValidation();
  }, [testReducer]);

  return {
    testReducer,
    dispatchReducer,
    checkValidation,
    hasError,
    canNext,
  };
}
