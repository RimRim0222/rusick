import styled from '@emotion/styled';
import { Button, BUTTON_DISPLAY_TYPE } from '@components/button';
import { Input, INPUT_TYPE, INPUT_SIZE, INPUT_THEME } from '@components/input';
import { FormItem } from '@components/form/FormItem';
import { usePasswordSearch } from './usePasswordSearch';
import { passwordText } from './text';
import { useTranslation } from 'react-i18next';

// 임시 인터페이스
interface IPasswordSearch {
  memberId: string;
}

export function PasswordSearch(props: IPasswordSearch) {
  const { email, hasError, canNext, handleChangeEmail, onAuthEmailSubmit } = usePasswordSearch();
  const { t } = useTranslation();

  return (
    <>
      <PasswordSearchTitleWrapper>
        {passwordText.passwordSearchTitle.map((str) => (
          <div key={str}>{t(str)}</div>
        ))}
      </PasswordSearchTitleWrapper>
      <PasswordSearchStyled>
        <FormItem {...email}>
          <Input
            type={INPUT_TYPE.TEXT}
            name="email"
            inputValue={email.value}
            size={INPUT_SIZE.SMALL}
            theme={INPUT_THEME.NONROUNDED}
            placeholder={t(passwordText.placehoderEmail)}
            allowClear={true}
            onChange={handleChangeEmail}
          />
        </FormItem>
      </PasswordSearchStyled>
      <RegisterBtnWrapper>
        <Button
          label={t(passwordText.btnAuthEmail)}
          disabled={!(!hasError && canNext)}
          onClick={onAuthEmailSubmit}
          displayType={BUTTON_DISPLAY_TYPE.FULL}
        />
      </RegisterBtnWrapper>
    </>
  );
}

const PasswordSearchTitleWrapper = styled.div`
  padding-top: 47px;
  ${(props) => props.theme.fonts.bd2_R}
  color: #606060;
`;

const PasswordSearchStyled = styled.div`
  margin-top: 40px;
`;

const RegisterBtnWrapper = styled.div`
  margin-top: 80px;
`;
