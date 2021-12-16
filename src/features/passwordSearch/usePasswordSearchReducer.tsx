import { checkFormNext, checkObject, checkFormError } from '@utils/form';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { PasswordSearchForm, IReducerState, IPasswordSearchAction } from './types';
import { formEmail } from '@src/components/form/FormList';

const initPasswordSearchReducer: IReducerState = {
  email: formEmail,
};

function passwordSearchFormReducer(state: IReducerState, action: IPasswordSearchAction) {
  switch (action.type) {
    case PasswordSearchForm.EAMIL:
      return {
        ...state,
        email: checkObject(state.email, action.payload),
      };
    default: {
      return state;
    }
  }
}

export function usePasswordSearchReducer() {
  const [passwordSearchReducer, dispatchReducer] = useReducer(
    passwordSearchFormReducer,
    initPasswordSearchReducer,
  );
  const [hasError, setHasError] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const checkValidation = useCallback(() => {
    setHasError(checkFormError(passwordSearchReducer));
    setCanNext(checkFormNext(passwordSearchReducer));
  }, [passwordSearchReducer]);

  useEffect(() => {
    checkValidation();
  }, [passwordSearchReducer]);

  return {
    passwordSearchReducer,
    dispatchReducer,
    checkValidation,
    hasError,
    canNext,
  };
}
