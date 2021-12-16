import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon, ICON_LIST } from '@src/components/icon';
import { RouteList } from '@src/routes/RouteList';
import { useTranslation } from 'react-i18next';
import { LNG_KEY } from '@src/i18n';

export function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAllMenu = () => {
    navigate(RouteList.ALL_MENU);
  };

  const handleMyInfoClick = () => {
    navigate(RouteList.MEMBER_MYINFO);
  };

  return (
    <>
      {location.pathname !== RouteList.MAIN ? (
        <></>
      ) : (
        <FooterStyled>
          <TitleStyled onClick={handleAllMenu}>
            <Icon icon={ICON_LIST['menu']} width="50px" />
            <div>{t(LNG_KEY.ALL_MENU)}</div>
          </TitleStyled>
          <TitleStyled onClick={handleMyInfoClick}>
            <Icon icon={ICON_LIST['na_myinfor_off']} width="50px" />
            <div>{t(LNG_KEY.MYINFO)}</div>
          </TitleStyled>
          <TitleStyled>
            <Icon icon={ICON_LIST['na_home_off']} width="50px" />
            <div>{t(LNG_KEY.HOME)}</div>
          </TitleStyled>
        </FooterStyled>
      )}
    </>
  );
}

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  text-align: center;
  background-color: aquamarine;
`;

const TitleStyled = styled.button`
  > div {
    margin-top: 5px;
  }
`;
