import styled from '@emotion/styled';
import { ILoginBtn, LOGIN_BTN_SIZE } from './types';
import { Icon, ICON_LIST } from '@src/components/icon';
import { MouseEvent } from 'react';

export function LoginBtn({ type, size, onClick }: ILoginBtn) {
  const sizeStyle = loginBtnStyle[size];
  const iconStyle = loginBtnIconStyle[type];

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    return onClick(type);
  };

  return (
    <LoginBtnStyled onClick={handleClick}>
      <Icon icon={iconStyle} width={sizeStyle} />
    </LoginBtnStyled>
  );
}

LoginBtn.defaultProps = {
  size: LOGIN_BTN_SIZE.MEDIUM,
};

const loginBtnStyle = {
  [LOGIN_BTN_SIZE.LARGE]: '100px',
  [LOGIN_BTN_SIZE.MEDIUM]: '50px',
  [LOGIN_BTN_SIZE.SMALL]: '25px',
};

export const loginBtnIconStyle = {
  [`APPLE`]: ICON_LIST.apple,
  [`GOOGLE`]: ICON_LIST.google,
  [`KAKAO`]: ICON_LIST.kakao,
  [`NAVER`]: ICON_LIST.naver,
};

const LoginBtnStyled = styled.div`
  margin: auto;
`;
