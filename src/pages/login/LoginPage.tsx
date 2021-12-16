import styled from '@emotion/styled';
import { LoginEmailForm, LoginFind, LoginTitle, LoginSnsForm } from '@src/features/login';

export function LoginPage() {
  return (
    <LoginPageStyled>
      <LoginTitle />
      <LoginEmailForm />
      <LoginFind />
      <LoginSnsForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  /* padding: 0px 20px; */
`;
