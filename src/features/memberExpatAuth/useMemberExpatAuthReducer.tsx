import { useCallback, useEffect, useReducer, useState } from 'react';
import { IMemberExpatAuthAction, IMemberExpatAuthReducerState, MemberExpatAuthForm } from './types';
import { LNG_KEY } from '@src/i18n';
import { formEmail, formName, formAuthCode } from '@src/components/form/FormList';
import { checkFormNext, checkObject, checkFormError } from '@src/utils/form';

const initMemberExpatAuthReducer: IMemberExpatAuthReducerState = {
  countryCode: {
    value: '',
    isRequired: false,
  },
  phone: {
    value: '',
    label: LNG_KEY.USER_PHONE,
    isRequired: true,
    validation: (value: string) => {
      const verifyCheck = true;
      return verifyCheck ? null : LNG_KEY.CHECK;
    },
  },
  email: formEmail,
  memberName: formName,
  authCode: formAuthCode,
};

function memberExpatAuthFormReducer(
  state: IMemberExpatAuthReducerState,
  action: IMemberExpatAuthAction,
) {
  switch (action.type) {
    case MemberExpatAuthForm.COUNTRY_CODE:
      return {
        ...state,
        countryCode: checkObject(state.countryCode, action.payload),
      };
    case MemberExpatAuthForm.PHONE:
      return {
        ...state,
        phone: checkObject(state.phone, action.payload),
      };
    case MemberExpatAuthForm.EMAIL:
      return {
        ...state,
        email: checkObject(state.email, action.payload),
      };
    case MemberExpatAuthForm.MEMBER_NAME:
      return {
        ...state,
        memberName: checkObject(state.memberName, action.payload),
      };
    case MemberExpatAuthForm.AUTH_CODE:
      return {
        ...state,
        authCode: checkObject(state.authCode, action.payload),
      };
    default:
      return state;
  }
}

export function useMemberExpatAuthReducer() {
  const [memberExpatAuthReducer, dispatchReducer] = useReducer(
    memberExpatAuthFormReducer,
    initMemberExpatAuthReducer,
  );

  const [hasError, setHasError] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const checkValidation = useCallback(() => {
    setHasError(checkFormError(memberExpatAuthReducer));
    setCanNext(checkFormNext(memberExpatAuthReducer));
  }, [memberExpatAuthReducer]);

  const changeCountryCode = (value: string) => {
    dispatchReducer({ type: MemberExpatAuthForm.COUNTRY_CODE, payload: value });
  };
  const changePhoneNumber = (value: string) => [
    dispatchReducer({ type: MemberExpatAuthForm.PHONE, payload: value }),
  ];
  const changeEmail = (value: string) => {
    dispatchReducer({ type: MemberExpatAuthForm.EMAIL, payload: value });
  };
  const changeMemberName = (value: string) => {
    dispatchReducer({ type: MemberExpatAuthForm.MEMBER_NAME, payload: value });
  };
  const changeAuthCode = (value: string) => {
    dispatchReducer({ type: MemberExpatAuthForm.AUTH_CODE, payload: value });
  };

  useEffect(() => {
    checkValidation();
  }, [memberExpatAuthReducer]);

  return {
    memberExpatAuthReducer,
    dispatchExpatAuthReducer: {
      changeCountryCode,
      changePhoneNumber,
      changeEmail,
      changeMemberName,
      changeAuthCode,
    },
    checkValidation,
    hasError,
    canNext,
  };
}
