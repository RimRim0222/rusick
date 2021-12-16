import { checkFormNext, checkObject, checkFormError } from '@utils/form';
import { LNG_KEY } from '@src/i18n';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { PasswordForm, IReducerState, IPasswordChangeFormAction } from './types';
import { verifyPasswordAgree } from '@utils/validityCheck';
import { formPassword, formPasswordCheck } from '@src/components/form/FormList';

const initPasswordChangeFormReducer: IReducerState = {
  password: formPassword,
  passwordCheck: formPasswordCheck,
};

function passwordChangeFormReducer(state: IReducerState, action: IPasswordChangeFormAction) {
  switch (action.type) {
    case PasswordForm.PW:
      return {
        ...state,
        password: checkObject(state.password, action.payload),
      };
    case PasswordForm.PW_CHECK:
      return {
        ...state,
        passwordCheck: checkObject(state.passwordCheck, action.payload),
      };
    case PasswordForm.SET_ERROR: {
      if (state.password.value.length <= 0 || state.passwordCheck.value.length <= 8) return state;
      const errorCheck = !verifyPasswordAgree(
        String(state.password.value),
        String(state.passwordCheck.value),
      );
      return {
        ...state,
        passwordCheck: {
          ...state.passwordCheck,
          isError: errorCheck,
          showMessage: errorCheck ? LNG_KEY.VALIDITY_CHECK_PASSWORD_AGREE : null,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export function usePasswordChangeFormReducer() {
  const [passwordChangeReducer, dispatchReducer] = useReducer(
    passwordChangeFormReducer,
    initPasswordChangeFormReducer,
  );
  const [hasError, setHasError] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const checkValidation = useCallback(() => {
    setHasError(checkFormError(passwordChangeReducer));
    setCanNext(checkFormNext(passwordChangeReducer));
  }, [passwordChangeReducer]);

  useEffect(() => {
    checkValidation();
  }, [passwordChangeReducer]);

  return {
    passwordChangeReducer,
    dispatchReducer,
    checkValidation,
    hasError,
    canNext,
  };
}
