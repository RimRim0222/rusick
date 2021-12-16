import styled from '@emotion/styled';
import { Button, BUTTON_DISPLAY_TYPE } from '@components/button';
import { Input, INPUT_TYPE, INPUT_SIZE, INPUT_THEME } from '@components/input';
import { FormItem } from '@components/form/FormItem';
import { useLogin } from './useLogin';
import { useTranslation } from 'react-i18next';
import { loginText } from './text';
export function LoginEmailForm() {
  const { t } = useTranslation();

  const {
    btnText,
    email,
    password,
    hasError,
    canNext,
    handleLogin,
    handleChangeEmail,
    handleChangePassword,
  } = useLogin();

  return (
    <LoginFormStyled>
      <>
        <FormItem {...email} isRequiredDisplay={false}>
          <Input
            type={INPUT_TYPE.TEXT}
            name="email"
            inputValue={email.value}
            size={INPUT_SIZE.SMALL}
            theme={INPUT_THEME.NONROUNDED}
            placeholder={t(loginText.placehoderEmail)}
            allowClear={true}
            onChange={handleChangeEmail}
          />
        </FormItem>
        <FormItem {...password} isRequiredDisplay={false}>
          <Input
            type={INPUT_TYPE.PW}
            name="password"
            inputValue={password.value}
            size={INPUT_SIZE.SMALL}
            theme={INPUT_THEME.NONROUNDED}
            placeholder={t(loginText.placehoderPw)}
            onChange={handleChangePassword}
          />
        </FormItem>
        <LoginBtnWrapper>
          <Button
            label={btnText}
            disabled={!(!hasError && canNext)}
            onClick={handleLogin}
            displayType={BUTTON_DISPLAY_TYPE.FULL}
          />
        </LoginBtnWrapper>
      </>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  margin-top: 44px;
`;

const LoginBtnWrapper = styled.div`
  padding-top: 35px;
`;
