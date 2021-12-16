import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { loginText } from './text';
import logoIcon from '@assets/logo.svg';

export function LoginTitle() {
  const { t } = useTranslation();
  return (
    <LoginTitleWrapper>
      <LoginImgStyeld>
        <img src={logoIcon} alt="logoIcon" width="100px" />
      </LoginImgStyeld>
      <LoginNameStyled>
        {loginText.loginMainTitle.map((str) => (
          <div key={str}>{t(str)}</div>
        ))}
      </LoginNameStyled>
    </LoginTitleWrapper>
  );
}

const LoginTitleWrapper = styled.div``;
const LoginImgStyeld = styled.div`
  img {
    /* margin-top: 50px; */
  }
`;
const LoginNameStyled = styled.div`
  margin-top: 17px;
  text-align: left;
  ${(props) => props.theme.fonts.h0_B};
  color: ${(props) => props.theme.colors.maincolor_blue};
`;
