import styled from '@emotion/styled';
import { Button } from '@src/components/button';
import { LoginState } from '@store/LoginState';
import { useRecoilState } from 'recoil';

export function AuthPage() {
  const [authState, setAuthState] = useRecoilState(LoginState);
  const handleAuth = () => {
    setAuthState((prevState) => {
      return { ...prevState, isAuth: !prevState.isAuth };
    });
  };

  const btnText = authState.isAuth ? 'auth out' : 'isAuth';
  return (
    <AuthPageStyled>
      <Button label={btnText} onClick={handleAuth} />
    </AuthPageStyled>
  );
}

const AuthPageStyled = styled.div``;
