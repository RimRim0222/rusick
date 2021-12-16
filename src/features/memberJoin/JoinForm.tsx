import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Button } from '@src/components/button';
import {
  BUTTON_SIZE,
  BUTTON_THEME,
  BUTTON_SHAPE,
  BUTTON_DISPLAY_TYPE,
} from '@src/components/button/types';
import { Input, INPUT_TYPE, INPUT_SIZE, INPUT_THEME } from '@components/input';
import { FormItem } from '@components/form/FormItem';
import text from './text';

import { useNavigate } from 'react-router';
import { useMemberEmail } from '@src/features/memberEmail/useMemberEmail';
import { useMemberPw } from '@src/features/memberPw/useMemberPw';
import { RouteList } from '@src/routes/RouteList';
import { LoginState } from '@src/store/LoginState';
import { useSetRecoilState } from 'recoil';

export function JoinForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const setLoginState = useSetRecoilState(LoginState);

  const {
    email,
    hasError: emailHasError,
    canNext: emailCanNext,
    result: emailCheckValue,
    isLoading: emailLoading,
    checkValidation: emailCheckValidation,
    changeEmail,
    duplicationCheck,
  } = useMemberEmail();

  const {
    password,
    passwordCheck,
    hasError: pwHasError,
    canNext: pwCanNext,
    checkValidation: pwCheckValidation,
    changePassword,
    changePasswordCheck,
  } = useMemberPw();

  const userRegisterSubmit = () => {
    emailCheckValidation();
    pwCheckValidation();
    setLoginState((prevState) => {
      return { ...prevState, isLogin: !prevState.isLogin };
    });
    navigate(RouteList.JOIN_COMPLETE);
  };

  const hasError = emailCheckValue || emailHasError || pwHasError; // true 안댐
  const canNext = emailCanNext && pwCanNext; // true 통과

  return (
    <>
      {emailLoading ? (
        <div>loading..............</div>
      ) : (
        <JoinFormWrapper>
          <FormItem {...email} isRequiredDisplay={false}>
            <Input
              type={INPUT_TYPE.TEXT}
              name="email"
              inputValue={email.value}
              size={INPUT_SIZE.SMALL}
              theme={INPUT_THEME.NONROUNDED}
              placeholder={t(text.placehoderEmail)}
              allowClear={true}
              onChange={changeEmail}
            />
            <DuplicateCheckBtnStyled>
              <Button
                label={t(text.duplicateCheck)}
                size={BUTTON_SIZE.XSSMALL}
                theme={BUTTON_THEME.OUTLINE_GRAY}
                shape={BUTTON_SHAPE.ROUNDED}
                // disabled={!isNil(email.value)}
                onClick={duplicationCheck}
              />
            </DuplicateCheckBtnStyled>
          </FormItem>

          <FormItem {...password} isRequiredDisplay={false}>
            <Input
              type={INPUT_TYPE.PW}
              name="password"
              inputValue={password.value}
              size={INPUT_SIZE.SMALL}
              theme={INPUT_THEME.NONROUNDED}
              placeholder={t(text.placehoderPw)}
              allowClear={false}
              onChange={changePassword}
            />
          </FormItem>
          <FormItem {...passwordCheck} isRequiredDisplay={false}>
            <Input
              type={INPUT_TYPE.PW}
              name="passwordCheck"
              size={INPUT_SIZE.SMALL}
              theme={INPUT_THEME.NONROUNDED}
              inputValue={passwordCheck.value}
              placeholder={t(text.placehoderPwCheck)}
              onChange={changePasswordCheck}
            />
          </FormItem>
          <RegisterBtnWrapper>
            <Button
              label={t(text.check)}
              displayType={BUTTON_DISPLAY_TYPE.FULL}
              disabled={!(!hasError && canNext)}
              onClick={userRegisterSubmit}
            />
          </RegisterBtnWrapper>
        </JoinFormWrapper>
      )}
    </>
  );
}

const JoinFormWrapper = styled.div`
  margin-top: 40px;
`;

const DuplicateCheckBtnStyled = styled.div``;

const RegisterBtnWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`;
