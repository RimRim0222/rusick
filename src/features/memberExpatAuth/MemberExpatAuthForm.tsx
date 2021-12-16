import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { FormItem, FORM_LAYOUT_THEME } from '@components/form';
import { Input, INPUT_TYPE, INPUT_SIZE, INPUT_THEME } from '@components/input';
import { Button } from '@src/components/button';
import {
  BUTTON_SIZE,
  BUTTON_THEME,
  BUTTON_SHAPE,
  BUTTON_DISPLAY_TYPE,
} from '@src/components/button/types';
import { Select, SELECT_STYLE_THEME, SELECT_THEME } from '@components/select';
import { memberExpat } from './text';
import { Timer } from '@src/components/timer';
import { useTimer } from '@components/timer/useTimer';
import { useMemberExpatAuth } from './useMemberExpatAuth';
import { isNull } from 'lodash';

import { countryCode as countryCodeData } from './countryCode';
import { useMemberExpatAuthReducer } from './useMemberExpatAuthReducer';
import { useRecoilState } from 'recoil';
import { LoginState } from '@store/LoginState';
import { RouteList } from '@src/routes/RouteList';
import { useNavigate } from 'react-router';
import { SEND_TYPE } from '@src/store/MemberExpatAuth';

export function MemberExpatAuthForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [readOnly, setReadOnly] = useState(false);
  const [authCheck, setAuthCheck] = useState(false);
  const [isSend, setIsSend] = useState(false); // 클릭 여부 체크
  const [loginState, setLoginState] = useRecoilState(LoginState); //임시 인증처리
  const {
    requestID,
    requestCheckId,
    expathAuthData,
    expathAuthCheckData,
    hasLoading,
    onAuthCodeSend,
    onAuthCodeCheckSend,
    onSubmitAuth,
    handleAlert,
  } = useMemberExpatAuth();

  const { memberExpatAuthReducer, dispatchExpatAuthReducer, checkValidation, hasError, canNext } =
    useMemberExpatAuthReducer();
  const { phone, email, memberName, authCode, countryCode } = memberExpatAuthReducer;

  const { timerState, reset, handleTimerStart, handleTimerStop, handleTimerResend, handleTimeOut } =
    useTimer();

  useEffect(() => {
    if (loginState.isAuth) navigate(RouteList.MEMBER_INFO);
  }, [loginState]);

  useEffect(() => {
    if (!isNull(expathAuthData.authKey)) {
      setIsSend(true);
      setReadOnly(true);
      handleTimerStart();
    }
  }, [expathAuthData, requestID]);

  useEffect(() => {
    if (!isNull(expathAuthCheckData.authResult) && !timerState) {
      return handleAlert(t(memberExpat.alertAuthCodeOverTime));
    }
    if (!isNull(expathAuthCheckData.authResult) && !expathAuthCheckData) {
      return handleAlert(t(memberExpat.alertAuthCodeFail));
    }
    if (!isNull(expathAuthCheckData.authResult) && expathAuthCheckData) {
      handleTimerStop();
      setAuthCheck(true);
    }
  }, [requestCheckId, expathAuthCheckData.authResult]);

  const handleAuthCodeReSend = () => {
    setIsSend(false);
    handleAuthCodeSend();
    handleTimerResend();
  };

  const handleSubmitAuth = () => {
    checkValidation();
    const phoneValue = `${countryCode.value}-${phone.value}`;
    onSubmitAuth(expathAuthData.authKey, authCode.value, phoneValue, email.value, memberName.value);
    setLoginState((prevState) => {
      return { ...prevState, isAuth: !prevState.isAuth };
    });
  };

  const handleAuthCodeSend = () => {
    return onAuthCodeSend(
      countryCode.value,
      phone.value,
      email.value,
      memberName.value,
      SEND_TYPE.ALL,
    );
  };

  const handleAuthCodeCheckSend = () => {
    return onAuthCodeCheckSend(expathAuthData.authKey, authCode.value);
  };

  return (
    <>
      {hasLoading ? (
        <div>Loading................</div>
      ) : (
        <>
          <MemeberExpatAuthFormWrapper>
            <MemeberExpatAuthFormStyled>
              <FormItem
                label={memberExpat.memberPhone}
                isError={phone.isError}
                showMessage={phone.showMessage}
                isRequired={true}
                isRequiredDisplay={false}
                formTheme={FORM_LAYOUT_THEME.LABEL_VERTICAL}
              >
                <Select
                  id="countryCode"
                  defaultValue={countryCodeData[0].value}
                  options={countryCodeData}
                  theme={SELECT_THEME.DIALOG}
                  styleTheme={SELECT_STYLE_THEME.NONELINE}
                  onSelect={dispatchExpatAuthReducer.changeCountryCode}
                  OptionKeys={{ id: 'value', text: 'text' }}
                  isReadOnly={readOnly}
                />
                <Input
                  type={INPUT_TYPE.TEXT}
                  name="memberPhone"
                  inputValue={phone.value}
                  size={INPUT_SIZE.SMALL}
                  theme={INPUT_THEME.NONROUNDED}
                  placeholder={t(memberExpat.placehoderMemberPhone)}
                  onChange={dispatchExpatAuthReducer.changePhoneNumber}
                  readOnly={readOnly}
                />
              </FormItem>
              <FormItem {...email} isRequiredDisplay={false}>
                <Input
                  type={INPUT_TYPE.TEXT}
                  name="memberEmail"
                  inputValue={email.value}
                  size={INPUT_SIZE.SMALL}
                  theme={INPUT_THEME.NONROUNDED}
                  placeholder={t(memberExpat.placehoderEmail)}
                  onChange={dispatchExpatAuthReducer.changeEmail}
                  readOnly={readOnly}
                />
              </FormItem>
              <FormItem {...memberName} isRequiredDisplay={false}>
                <Input
                  type={INPUT_TYPE.TEXT}
                  name="memberName"
                  inputValue={memberName.value}
                  size={INPUT_SIZE.SMALL}
                  theme={INPUT_THEME.NONROUNDED}
                  placeholder={t(memberExpat.placehoderMemberName)}
                  onChange={dispatchExpatAuthReducer.changeMemberName}
                  readOnly={readOnly}
                />
              </FormItem>

              <FormItem {...authCode} isRequiredDisplay={false}>
                <Input
                  type={INPUT_TYPE.TEXT}
                  name="authCode"
                  inputValue={authCode.value}
                  size={INPUT_SIZE.SMALL}
                  theme={INPUT_THEME.NONROUNDED}
                  placeholder={t(memberExpat.placehoderAuthCode)}
                  onChange={dispatchExpatAuthReducer.changeAuthCode}
                  readOnly={authCheck}
                />
                {isSend && !authCheck ? (
                  <AuthCodeCheckTimerStyled>
                    <Timer
                      limitTime={2}
                      timerState={timerState}
                      onTimeout={handleTimeOut}
                      isReset={reset}
                    />
                  </AuthCodeCheckTimerStyled>
                ) : (
                  <></>
                )}
                <AuthCodeBtnStyled>
                  {!isSend && !authCheck && (
                    <Button
                      label={t(memberExpat.authCodeSend)}
                      size={BUTTON_SIZE.XSSMALL}
                      theme={BUTTON_THEME.OUTLINE_GRAY}
                      shape={BUTTON_SHAPE.ROUNDED}
                      onClick={handleAuthCodeSend}
                    />
                  )}
                  {isSend && !authCheck && (
                    <Button
                      label={t(memberExpat.btnAuth)}
                      size={BUTTON_SIZE.XSSMALL}
                      theme={BUTTON_THEME.OUTLINE_GRAY}
                      shape={BUTTON_SHAPE.ROUNDED}
                      onClick={handleAuthCodeCheckSend}
                    />
                  )}
                  {!timerState && authCheck && <span style={{ color: '#4AC6FF' }}>인증완료</span>}
                </AuthCodeBtnStyled>
              </FormItem>
              {!authCheck && isSend && (
                <Button
                  label={t(memberExpat.authCodeReSend)}
                  size={BUTTON_SIZE.XSSMALL}
                  theme={BUTTON_THEME.GHOST_BLACK}
                  shape={BUTTON_SHAPE.SQUARED}
                  displayType={BUTTON_DISPLAY_TYPE.FULL}
                  onClick={handleAuthCodeReSend}
                />
              )}
            </MemeberExpatAuthFormStyled>
            <AuthBtnWrapper>
              <Button
                label={t(memberExpat.btnAuth)}
                size={BUTTON_SIZE.MEDIUM}
                displayType={BUTTON_DISPLAY_TYPE.FULL}
                disabled={!(!hasError && canNext && authCheck)}
                onClick={handleSubmitAuth}
              />
            </AuthBtnWrapper>
          </MemeberExpatAuthFormWrapper>
        </>
      )}
    </>
  );
}

const MemeberExpatAuthFormWrapper = styled.div``;
const MemeberExpatAuthFormStyled = styled.div``;
const AuthCodeCheckTimerStyled = styled.div``;
const AuthCodeBtnStyled = styled.div``;
const AuthBtnWrapper = styled.div`
  margin-top: 30px;
`;
