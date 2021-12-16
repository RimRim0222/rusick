import { useEffect } from 'react';
import { EmailForm } from './types';
import { useMemberEmailFormReducer } from './useMemberEmailFormReducer';
import {
  IEmailResult,
  emailResult,
  emailParams,
  emailParamsRequestID,
} from '@src/store/EmailCheckState';
import { useLoadableRefresh } from '@src/features/tester/useLoadable';
import { isEmpty } from 'lodash';

export function useMemberEmail() {
  const { memberEmailReducer, dispatchReducer, checkValidation, hasError, canNext } =
    useMemberEmailFormReducer();

  const { email } = memberEmailReducer;

  const changeEmail = (value: string) => {
    dispatchReducer({ type: EmailForm.EMAIL, payload: value });
  };

  const { handleParams, result, isLoading } = useLoadableRefresh<IEmailResult>(
    emailParams,
    emailResult,
    { isDuplicate: false },
    emailParamsRequestID,
  );

  useEffect(() => {
    if (!isEmpty(email.value)) {
      dispatchReducer({
        type: EmailForm.EMAIL_CHECK,
        payload: result.isDuplicate,
      });
    }
  }, [result]);

  const duplicationCheck = () => {
    if (!email.isError && !isEmpty(email.value)) {
      handleParams(email.value);
    }
  };

  return {
    email,
    hasError,
    canNext,
    isLoading,
    result: result.isDuplicate,
    checkValidation,
    changeEmail,
    duplicationCheck,
  };
}
