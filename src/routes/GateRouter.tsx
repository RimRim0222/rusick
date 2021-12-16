import { useNavigate, RouteProps, useLocation, Navigate } from 'react-router-dom';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

export function GateRouter(props: RouteProps) {
  const { search } = useLocation();

  const parsedSearch = queryString.parse(search);
  const { snsType, providerId, isJoin, isAuth } = parsedSearch;

  // sns type, provider id에 대한 처리 필요
  // 전역 recoil에 넣던지, 약관 동의 페이지에 parameter로 전달해야 함

  // SNS 로그인 처리
  // 본인 인증
  // backend 처리시 였지만 frontend 에서 처리 로그인 / 인증
  if (isAuth === 'Y') {
    console.log('Pass Auth Success!!');
    return <Navigate to="/memberInfo" state={{ providerId }} />;
  }

  if (isJoin === 'Y') {
    // terms agree 페이지로 이동
    console.log('will redirect terms');
    return <Navigate to="/login" state={{ providerId }} />;
  }

  // 필요시 전역 state에 전달받은 값 설정
  console.log('will redirect main');
  return <Navigate to="/" state={{ providerId }} />;
}
