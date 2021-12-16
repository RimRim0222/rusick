import styled from '@emotion/styled';
import { Button, BUTTON_DISPLAY_TYPE } from '@components/button';
import { Input, INPUT_TYPE, INPUT_SIZE, INPUT_THEME } from '@components/input';
import { FormItem } from '@components/form/FormItem';
import { usePassword } from './usePassword';
import { passwordSearchText } from './text';
import { useTranslation } from 'react-i18next';

export function PasswordChange() {
  const {
    password,
    passwordCheck,
    hasError,
    canNext,
    handleChangePassword,
    handleChangePasswordCheck,
    onPasswordChangeSubmit,
  } = usePassword();
  const { t } = useTranslation();

  return (
    <>
      <PasswordChangeTitleWrapper>
        {passwordSearchText.pwChangeTitle.map((str) => (
          <div key={str}>{t(str)}</div>
        ))}
      </PasswordChangeTitleWrapper>
      <PasswordChangeStyled>
        <FormItem {...password}>
          <Input
            type={INPUT_TYPE.PW}
            name="password"
            inputValue={password.value}
            size={INPUT_SIZE.SMALL}
            theme={INPUT_THEME.NONROUNDED}
            placeholder={t(passwordSearchText.placehoderPwNewRegister)}
            onChange={handleChangePassword}
          />
        </FormItem>
        <FormItem {...passwordCheck}>
          <Input
            type={INPUT_TYPE.PW}
            name="passwordCheck"
            inputValue={passwordCheck.value}
            size={INPUT_SIZE.SMALL}
            theme={INPUT_THEME.NONROUNDED}
            placeholder={t(passwordSearchText.placehoderPwNewRegisterCheck)}
            onChange={handleChangePasswordCheck}
          />
        </FormItem>
      </PasswordChangeStyled>
      <RegisterBtnWrapper>
        <Button
          label={t(passwordSearchText.btnSave)}
          disabled={!(!hasError && canNext)}
          onClick={onPasswordChangeSubmit}
          displayType={BUTTON_DISPLAY_TYPE.FULL}
        />
      </RegisterBtnWrapper>
    </>
  );
}

const PasswordChangeTitleWrapper = styled.div`
  padding-top: 47px;
  ${(props) => props.theme.fonts.bd2_R}
  color: #606060;
`;

const PasswordChangeStyled = styled.div`
  margin-top: 40px;
`;
const RegisterBtnWrapper = styled.div`
  margin-top: 47px;
`;
