import { LNG_KEY } from '@src/i18n';
import { useTranslation } from 'react-i18next';
import { PasswordSearchForm } from './types';
import { usePasswordSearchReducer } from './usePasswordSearchReducer';

export function usePasswordSearch() {
  const { passwordSearchReducer, dispatchReducer, checkValidation, hasError, canNext } =
    usePasswordSearchReducer();

  const { email } = passwordSearchReducer;

  const handleChangeEmail = (value: string) => {
    dispatchReducer({ type: PasswordSearchForm.EAMIL, payload: value });
  };

  const onAuthEmailSubmit = () => {
    checkValidation();
  };

  return {
    email,
    hasError,
    canNext,
    handleChangeEmail,
    onAuthEmailSubmit,
  };
}
