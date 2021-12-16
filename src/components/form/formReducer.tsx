import { checkFormNext, checkObject, checkFormError } from '@utils/form';
import { LNG_KEY } from '@src/i18n';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { Form, IReducerState, IFormAction } from './types';

const initFormReducer: IReducerState = {
  inputValue: {
    value: '',
    isRequired: true,
    validation: (value: string) => {
      const verifyCheck = value.length > 5;
      return verifyCheck ? null : LNG_KEY.CHECK;
    },
    defaultSuccess: LNG_KEY.CHECK,
  },
};

function formReducer(state: IReducerState, action: IFormAction) {
  switch (action.type) {
    case Form.INPUT_VALUE:
      return {
        ...state,
        inputValue: checkObject(state.inputValue, action.payload),
      };
    default: {
      return state;
    }
  }
}

export function useFormReducer() {
  const [FormReducer, dispatchReducer] = useReducer(formReducer, initFormReducer);
  const [hasError, setHasError] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const checkValidation = useCallback(() => {
    setHasError(checkFormError(FormReducer));
    setCanNext(checkFormNext(FormReducer));
  }, [FormReducer]);

  useEffect(() => {
    checkValidation();
  }, [FormReducer]);

  return {
    FormReducer,
    dispatchReducer,
    checkValidation,
    hasError,
    canNext,
  };
}
