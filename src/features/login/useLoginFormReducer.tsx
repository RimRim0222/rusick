import { checkFormNext, checkObject, checkFormError } from '@utils/form';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { ILoginReducerState, LoginForm, ILoginFormAction } from './types';
import { formEmail, formPassword } from '@src/components/form/FormList';

const initLoginFormReducer: ILoginReducerState = {
  email: formEmail,
  password: formPassword,
};

function loginFormReducer(state: ILoginReducerState, action: ILoginFormAction) {
  switch (action.type) {
    case LoginForm.EMAIL:
      return {
        ...state,
        email: checkObject(state.email, action.payload),
      };
    case LoginForm.PASSWORD:
      return {
        ...state,
        password: checkObject(state.password, action.payload),
      };
    default: {
      return state;
    }
  }
}

export function useLoginFormReducer() {
  const [loginReducer, dispatchReducer] = useReducer(loginFormReducer, initLoginFormReducer);
  const [hasError, setHasError] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const checkValidation = useCallback(() => {
    setHasError(checkFormError(loginReducer));
    setCanNext(checkFormNext(loginReducer));
  }, [loginReducer]);

  useEffect(() => {
    checkValidation();
  }, [loginReducer]);

  return {
    loginReducer,
    dispatchReducer,
    checkValidation,
    hasError,
    canNext,
  };
}
