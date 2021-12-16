import styled from '@emotion/styled';
import { LoginEmailForm } from './LoginEmailForm';
import { LoginFind } from './LoginFind';
import { LoginTitle } from './LoginTitle';
import { LoginSnsForm } from './LoginSnsForm';
import { useLocation } from 'react-router';

export function Login() {
  const location = useLocation();
  const { state } = location;
  const { nextUrl } = state;
  return (
    <LoginStyled>
      <LoginTitle />
      <LoginEmailForm />
      <LoginFind />
      <LoginSnsForm />
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  padding-top: 47px;
`;
