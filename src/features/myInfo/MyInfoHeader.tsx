import styled from '@emotion/styled';
import { Icon, ICON_LIST } from '@src/components/icon';
import { Button, BUTTON_SHAPE, BUTTON_SIZE, BUTTON_THEME } from '@src/components/button';
import { cssx } from '@src/theme/';
import { useMyInfo } from './useMyInfo';
export function MyInfoHeader() {
  const { t, userName, authButtonLabel, isLogin, loginButtonLabel, handleVerify, handleLogin } =
    useMyInfo();

  return (
    <MyInfoHeaderStyled>
      <NameWrapper>
        <Icon icon={ICON_LIST['person_30x30']} width={'25px'} />
        <UserNameWrap>
          <UserName>{userName}</UserName>님
        </UserNameWrap>
      </NameWrapper>

      <ButtonWrapper>
        {isLogin && (
          <Button
            label={t(authButtonLabel)}
            size={BUTTON_SIZE.XSSMALL}
            theme={BUTTON_THEME.OUTLINE_GRAY}
            shape={BUTTON_SHAPE.ROUNDED}
            onClick={handleVerify}
          />
        )}
        <Button
          label={t(loginButtonLabel)}
          size={BUTTON_SIZE.XSSMALL}
          theme={BUTTON_THEME.OUTLINE_GRAY}
          shape={BUTTON_SHAPE.ROUNDED}
          onClick={handleLogin}
        />
      </ButtonWrapper>
    </MyInfoHeaderStyled>
  );
}

const MyInfoHeaderStyled = styled.div`
  ${cssx.flexBtw}
`;
const NameWrapper = styled.div`
  ${cssx.flexStart}
`;
const UserNameWrap = styled.div`
  margin-left: 5px;
  ${(props) => props.theme.fonts.bd1_R}
  line-height: 100%;
`;
const ButtonWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-content: center;
  button + button {
    margin-left: 11px;
  }
`;
const UserName = styled.span`
  ${(props) => props.theme.fonts.h3_B}
  line-height: 100%;
`;
