import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import KakaoLogin from 'react-kakao-login';
import { LoginBtn } from '@src/components/loginBtn';
import { LOGIN_BTN_TYPE } from '@components/loginBtn/types';
import { IKakaoLoginSuccess, KakaoError } from './types';
import { useRecoilState } from 'recoil';
import { LoginState, LOGIN_TYPE } from '@store/LoginState';
import { RouteList } from '@src/routes/RouteList';

export const KakaoLoginBtn = () => {
  const token = process.env.REACT_APP_LOGIN_KAKAO_TOKEN;
  const navigate = useNavigate();
  const [loginState, setLoginState] = useRecoilState(LoginState);

  const handleSuccess = (res: IKakaoLoginSuccess) => {
    setLoginState((prevState) => {
      return { ...prevState, isLogin: !prevState.isLogin, loginType: LOGIN_TYPE.KAKAO };
    });
  };

  const handleFail = (res: KakaoError) => {
    console.log(res);
  };

  useEffect(() => {
    if (loginState.isLogin && loginState.loginType === LOGIN_TYPE.KAKAO) {
      navigate(RouteList.MAIN);
    }
  }, [loginState]);

  if (token)
    return (
      <KakaoLogin
        token={token}
        onSuccess={(res) => handleSuccess(res)}
        onFail={(res) => handleFail(res)}
        render={({ onClick }) => {
          return <LoginBtn type={LOGIN_BTN_TYPE.KAKAO} onClick={onClick} />;
        }}
      />
    );
  return <></>;
};

export default KakaoLoginBtn;
