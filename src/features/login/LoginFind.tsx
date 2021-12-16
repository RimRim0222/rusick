import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { loginText } from './text';
import { RouteList } from '@src/routes/RouteList';

export function LoginFind() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onRegisterMember = () => {
    navigate(RouteList.MEMBER_JOIN);
  };

  return (
    <LoginFindStyled>
      <FindItemStyled>{t(loginText.searchPw)}</FindItemStyled>
      <FindItemStyled>
        <span onClick={onRegisterMember}>{t(loginText.registerMember)}</span>
      </FindItemStyled>
    </LoginFindStyled>
  );
}

const LoginFindStyled = styled.div`
  display: block;
  text-align: center;
  margin-top: 20px;
`;

const FindItemStyled = styled.div`
  position: relative;
  display: inline-block;
  ${(props) => props.theme.fonts.bd3_R}
  color: #6A6A6A;
  + div {
    padding-left: 20px;
  }
  + div::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 10px;
    width: 1px;
    height: 12px;
    border-radius: 0.5px;
    background-color: #6a6a6a;
  }
`;
