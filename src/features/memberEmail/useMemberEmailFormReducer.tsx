import { checkFormNext, checkObject, checkFormError } from '@utils/form';
import { LNG_KEY } from '@src/i18n';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { EmailForm, IMemberEmailReducerState, IEmailFormAction } from './types';
import { formEmail } from '@src/components/form/FormList';
import { isEmpty } from 'lodash';

const ininMemberEmailFormReducer: IMemberEmailReducerState = {
  email: formEmail,
};

function memberEmailFormReducer(state: IMemberEmailReducerState, action: IEmailFormAction) {
  switch (action.type) {
    case EmailForm.EMAIL:
      const emailCheck = checkObject(state.email, action.payload);
      return isEmpty(state.email.value)
        ? {
            ...state,
            email: {
              ...emailCheck,
              isError: false,
              showMessage: undefined,
            },
          }
        : {
            ...state,
            email: emailCheck,
          };
    case EmailForm.EMAIL_CHECK: {
      return {
        ...state,
        email: {
          ...state.email,
          isError: action.payload,
          showMessage: action.payload
            ? LNG_KEY.EMAIL_DUPLICATE_CHECK_FAIL
            : LNG_KEY.EMAIL_DUPLICATE_CHECK_PASS,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export function useMemberEmailFormReducer() {
  const [memberEmailReducer, dispatchReducer] = useReducer(
    memberEmailFormReducer,
    ininMemberEmailFormReducer,
  );
  const [hasError, setHasError] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const checkValidation = useCallback(() => {
    setHasError(checkFormError(memberEmailReducer));
    setCanNext(checkFormNext(memberEmailReducer));
  }, [memberEmailReducer]);

  useEffect(() => {
    checkValidation();
  }, [memberEmailReducer]);

  return {
    memberEmailReducer,
    dispatchReducer,
    checkValidation,
    hasError,
    canNext,
  };
}
