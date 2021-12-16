import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { LoginState, LOGIN_TYPE } from '@store/LoginState';
import { LoginForm } from './types';
import { useLoginFormReducer } from './useLoginFormReducer';
import { useLocation, useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { RouteList } from '@src/routes/RouteList';

export function useLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginState, setLoginState] = useRecoilState(LoginState);
  const btnText = loginState.isLogin ? 'logout' : 'login';

  useEffect(() => {
    if (loginState.isLogin && loginState.loginType === LOGIN_TYPE.EAMIL) {
      if (!isEmpty(location.state)) {
        return navigate(location.state);
      } else {
        return navigate(RouteList.MAIN, { state: '' });
      }
    }
  }, [loginState]);

  const handleLogin = () => {
    checkValidation();
    setLoginState((prevState) => {
      return { ...prevState, isLogin: !prevState.isLogin };
    });
  };

  const { loginReducer, dispatchReducer, checkValidation, hasError, canNext } =
    useLoginFormReducer();

  const { email, password } = loginReducer;

  const handleChangeEmail = (value: string) => {
    dispatchReducer({ type: LoginForm.EMAIL, payload: value });
  };

  const handleChangePassword = (value: string) => {
    dispatchReducer({ type: LoginForm.PASSWORD, payload: value });
  };

  return {
    btnText,
    email,
    password,
    hasError,
    canNext,
    handleLogin,
    handleChangeEmail,
    handleChangePassword,
  };
}
