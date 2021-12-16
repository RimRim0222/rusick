import { useEffect, useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import isEmpty from 'lodash/isEmpty';

import { useLoadableRefresh } from '../tester/useLoadable';
import {
  emailResult,
  emailParams,
  emailParamsRequestID,
  IEmailResult,
} from '@src/store/EmailCheckState';
import { AlertState } from '@src/store/AlertState';

import { IValidOption } from '@src/utils/type';
import { checkObject } from '@src/utils/form';
import { formEmail } from '@src/components/form';

import { emailText } from './emailText';

export function useEmailUpdate() {
  const { handleParams, result } = useLoadableRefresh<IEmailResult>(
    emailParams,
    emailResult,
    { isDuplicate: false },
    emailParamsRequestID,
  );

  const [formObject, setFormObject] = useState<IValidOption<string>>(formEmail);
  const setAlertState = useSetRecoilState(AlertState);

  const handleOnChange = (value: string) => {
    //이메일 형식 확인, inputValue 업데이트
    setFormObject((prevState) => {
      const newformObject = checkObject(prevState, value);
      // 이메일이 한 번이라도 입력된 이후 필수값을 입력해달라는 에러메시지를 표시 할 필요가 있나
      // 확인 후 필요시 아래 내용 수정
      return isEmpty(value)
        ? { ...newformObject, isError: false, showMessage: undefined }
        : newformObject;
    });
  };

  useEffect(() => {
    if (!isEmpty(formObject.value)) {
      const formObjOptions = !result.isDuplicate
        ? { isError: false, showMessage: emailText.checkPass }
        : { isError: true, showMessage: emailText.checkFail };

      setFormObject((prevState) => {
        return { ...prevState, ...formObjOptions };
      });
    }
  }, [result]);

  const handleDuplicateCheck = () => {
    if (!formObject.isError && !isEmpty(formObject.value)) {
      const email = formObject.value;

      handleParams(email);
    }
  };

  const handleConfirm = () => {
    //이메일 수정 api
    const message =
      formObject.showMessage === emailText.checkPass
        ? emailText.emailUpdateComplete
        : emailText.emailDuplicateCheck;

    setAlertState((prevState) => {
      return {
        ...prevState,
        isOpen: true,
        message,
        useInput: false,
        isSingleBtn: true,
      };
    });
  };

  return { formObject, handleOnChange, handleDuplicateCheck, handleConfirm };
}
