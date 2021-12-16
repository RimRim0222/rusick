import { ILNG } from '@src/i18n';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { AlertState } from '@src/store/AlertState';
import {
  IMemberExpatAuthCodeSend,
  IMemberExpatAuthCodeSendCheck,
  memberExpathAuthCodeSendID,
  memberExpathAuthCodeCheckID,
  memberExpatAuthCodeSendParams,
  memberExpatAuthCodeSendResult,
  memberExpatAuthCodeCheckParams,
  memberExpatAuthCodeCheckResult,
  SEND_TYPE,
} from '@src/store/MemberExpatAuth';

import { useLoadableRefresh } from '../tester/useLoadable';

export function useMemberExpatAuth() {
  const setAlertState = useSetRecoilState(AlertState);
  const requestID = useRecoilValue(memberExpathAuthCodeSendID);
  const requestCheckId = useRecoilValue(memberExpathAuthCodeCheckID);

  const {
    handleParams: handleParamsSend,
    isLoading: sendLoading,
    result: expathAuthData,
  } = useLoadableRefresh<IMemberExpatAuthCodeSend>(
    memberExpatAuthCodeSendParams,
    memberExpatAuthCodeSendResult,
    { authKey: null },
    memberExpathAuthCodeSendID,
  );

  const {
    handleParams: handleParamsSendCheck,
    isLoading: sendCheckLoding,
    result: expathAuthCheckData,
  } = useLoadableRefresh<IMemberExpatAuthCodeSendCheck>(
    memberExpatAuthCodeCheckParams,
    memberExpatAuthCodeCheckResult,
    { authResult: null },
    memberExpathAuthCodeCheckID,
  );

  const hasLoading = sendLoading || sendCheckLoding;

  const handleAlert = (message: ILNG) => {
    setAlertState((prevState) => {
      return {
        ...prevState,
        isOpen: true,
        message: message,
        useInput: false,
        isSingleBtn: true,
      };
    });
  };

  const onAuthCodeSend = (
    countryCode: string,
    phone: string,
    email: string,
    memberName: string,
    sendType: SEND_TYPE,
  ) => {
    return handleParamsSend({
      phone: `${countryCode}-${phone}`,
      email: email,
      memberName: memberName,
      sendType: sendType,
    });
  };

  const onAuthCodeCheckSend = (authKey: string, authCode: string) => {
    return handleParamsSendCheck({
      authKey: authKey,
      authCode: authCode,
    });
  };

  const onSubmitAuth = (
    authKey: string,
    authCode: string,
    phone: string,
    email: string,
    memberName: string,
  ) => {
    console.log({
      authKey: authKey,
      authCode: authCode,
      phone: phone,
      email: email,
      memberName: memberName,
    });
  };

  return {
    requestID,
    requestCheckId,
    expathAuthData,
    expathAuthCheckData,
    hasLoading,
    onAuthCodeSend,
    onAuthCodeCheckSend,
    onSubmitAuth,
    handleAlert,
  };
}
