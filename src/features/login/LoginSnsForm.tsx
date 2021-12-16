import styled from '@emotion/styled';
import { LoginBtn } from '@src/components/loginBtn';
import { LOGIN_BTN_TYPE } from '@components/loginBtn/types';
import { useTranslation } from 'react-i18next';
import { loginText } from './text';
import { cssx } from '@src/theme/';
import { KakaoLoginBtn } from './kakao/KakaoLoginBtn';
export function LoginSnsForm() {
  const { t } = useTranslation();
  const handleLogin = () => {
    return true;
  };

  return (
    <LoginSnsFormStyled>
      <div>{t(loginText.loginSnsTitle)}</div>
      <SnsLoginWrapper>
        <KakaoLoginBtn />
        <LoginBtn type={LOGIN_BTN_TYPE.NAVER} onClick={handleLogin} />
        <LoginBtn type={LOGIN_BTN_TYPE.APPLE} onClick={handleLogin} />
        <LoginBtn type={LOGIN_BTN_TYPE.GOOGLE} onClick={handleLogin} />
      </SnsLoginWrapper>
    </LoginSnsFormStyled>
  );
}

const LoginSnsFormStyled = styled.div`
  padding: 34px 0px 0;
  text-align: center;
  > div {
    ${(props) => props.theme.fonts.bd2_R}
  }
`;

const SnsLoginWrapper = styled.div`
  ${cssx.flexCenter}
  margin-top: 22px;
`;
