import { useLayer } from '@src/components/modal/useLayer';
import { PasswordForm } from './types';
import { usePasswordChangeFormReducer } from './usePasswordChangeFormReducer';

export function usePassword() {
  const { passwordChangeReducer, dispatchReducer, checkValidation, hasError, canNext } =
    usePasswordChangeFormReducer();
  const { password, passwordCheck } = passwordChangeReducer;

  const { handleCloseClick } = useLayer(1);

  const handleChangePassword = (value: string) => {
    dispatchReducer({ type: PasswordForm.PW, payload: value });
    handleCheckPassword();
  };
  const handleChangePasswordCheck = (value: string) => {
    dispatchReducer({ type: PasswordForm.PW_CHECK, payload: value });
    handleCheckPassword();
  };
  const handleCheckPassword = () => {
    dispatchReducer({
      type: PasswordForm.SET_ERROR,
      payload: PasswordForm.SET_ERROR,
    });
  };

  const onPasswordChangeSubmit = () => {
    checkValidation();
    handleCloseClick();
  };

  return {
    password,
    passwordCheck,
    hasError,
    canNext,
    handleChangePassword,
    handleChangePasswordCheck,
    onPasswordChangeSubmit,
  };
}
