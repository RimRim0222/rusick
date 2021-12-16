import { checkFormNext, checkObject, checkFormError } from '@utils/form';
import { LNG_KEY } from '@src/i18n';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { MemberPwForm, IMemberPwReducerState, IMemberPwFormAction } from './types';
import { verifyPasswordAgree } from '@utils/validityCheck';
import { formPassword, formPasswordCheck } from '@src/components/form/FormList';

const ininMemberEmailFormReducer: IMemberPwReducerState = {
  password: formPassword,
  passwordCheck: formPasswordCheck,
};

function memberPwFormReducer(state: IMemberPwReducerState, action: IMemberPwFormAction) {
  switch (action.type) {
    case MemberPwForm.PW:
      return {
        ...state,
        password: checkObject(state.password, action.payload),
      };
    case MemberPwForm.PW_CHECK:
      return {
        ...state,
        passwordCheck: checkObject(state.passwordCheck, action.payload),
      };
    case MemberPwForm.SET_ERROR: {
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

export function useMemberPwFormReducer() {
  const [memberPwReducer, dispatchReducer] = useReducer(
    memberPwFormReducer,
    ininMemberEmailFormReducer,
  );
  const [hasError, setHasError] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const checkValidation = useCallback(() => {
    setHasError(checkFormError(memberPwReducer));
    setCanNext(checkFormNext(memberPwReducer));
  }, [memberPwReducer]);

  useEffect(() => {
    checkValidation();
  }, [memberPwReducer]);

  return {
    memberPwReducer,
    dispatchReducer,
    checkValidation,
    hasError,
    canNext,
  };
}
