import { LoginState } from '@store/LoginState';
import { Navigate, useNavigate, useLocation, RouteProps } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { RouteList } from './RouteList';

interface IAuthRouter extends RouteProps {
  redirectPath: string;
  children: JSX.Element;
}

/**
 * 본인인증 여부
 */
export function AuthRouter({ redirectPath, children }: IAuthRouter) {
  const { isAuth, isLogin } = useRecoilValue(LoginState);
  const location = useLocation();

  if (!isLogin) {
    return <Navigate to={RouteList.LOGIN} state={location.state} />;
  }

  if (!isAuth) {
    return <Navigate to={redirectPath} state={location.state} />;
  }
  return children;
}

AuthRouter.defaultProps = {
  redirectPath: RouteList.LOGIN,
};
