import { MemberPwForm } from './types';
import { useMemberPwFormReducer } from './useMemberPwFormReducer';

export function useMemberPw() {
  const { memberPwReducer, dispatchReducer, checkValidation, hasError, canNext } =
    useMemberPwFormReducer();

  const { password, passwordCheck } = memberPwReducer;

  const changePassword = (value: string) => {
    dispatchReducer({ type: MemberPwForm.PW, payload: value });
    checkPassword();
  };

  const changePasswordCheck = (value: string) => {
    dispatchReducer({ type: MemberPwForm.PW_CHECK, payload: value });
    checkPassword();
  };

  const checkPassword = () => {
    dispatchReducer({
      type: MemberPwForm.SET_ERROR,
      payload: MemberPwForm.SET_ERROR,
    });
  };

  return {
    password,
    passwordCheck,
    hasError,
    canNext,
    checkValidation,
    changePassword,
    changePasswordCheck,
  };
}
