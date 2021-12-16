import { atom } from 'recoil';

export enum MEMBER_TYPE {
  LOCAL = 'LOCAL',
  EXPAT = 'EXPAT',
}

export enum LOGIN_TYPE {
  EAMIL = 'EAMIL',
  KAKAO = 'KAKAO',
  NAVER = 'NAVER',
  GOOGLE = 'GOOGLE',
  APPLE = 'APPLE',
}

interface ILoginState {
  isLogin: boolean;
  isAuth: boolean;
  loginType: LOGIN_TYPE;
  memberType: MEMBER_TYPE;
}

const initLoginState: ILoginState = {
  isLogin: false,
  isAuth: false,
  loginType: LOGIN_TYPE.EAMIL,
  memberType: MEMBER_TYPE.LOCAL,
};

export const LoginState = atom({
  key: 'LoginState',
  default: initLoginState,
});
