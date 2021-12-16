export enum LOGIN_BTN_TYPE {
  KAKAO = 'KAKAO',
  NAVER = 'NAVER',
  APPLE = 'APPLE',
  GOOGLE = 'GOOGLE',
}

export enum LOGIN_BTN_SIZE {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

export interface ILoginBtn {
  /**
   * Login Type Setting
   */
  type: LOGIN_BTN_TYPE;
  /**
   * Login Btn Size Setting
   */
  size: LOGIN_BTN_SIZE;

  /**
   * onClick handler
   */
  onClick: (e: string) => void;
}
