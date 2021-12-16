import styled from '@emotion/styled';
import { Icon, ICON_LIST } from '@components/icon';
import { useMenu } from './useMenu';
import { menuText } from './text';
import { cssx } from '@src/theme/';

export function Settings() {
  const { SettingItemProps, noticeCenterOnClick, t } = useMenu();

  return (
    <SettingsStyled>
      <NoticeCenterWrapper>
        <MenuItemStyled onClick={noticeCenterOnClick}>
          <ImgWrapper>
            <Icon icon={ICON_LIST['inform']} width="25px" />
          </ImgWrapper>
          <TextWrapper>
            <MenuTitle>{t(menuText.noticeCenterTitle)}</MenuTitle>
            <MenuDesc>{t(menuText.noticeCenterDesc)}</MenuDesc>
          </TextWrapper>
        </MenuItemStyled>
      </NoticeCenterWrapper>
      <SettingsWrapper>
        {SettingItemProps.map((propsObj, idx) => {
          const { image, title, onClick } = propsObj;
          return (
            <MenuItemStyled key={idx} onClick={onClick}>
              <ImgWrapper>
                <Icon icon={image} width="25px" />
              </ImgWrapper>
              <TextWrapper>
                <MenuTitle>{t(title)}</MenuTitle>
              </TextWrapper>
            </MenuItemStyled>
          );
        })}
      </SettingsWrapper>
    </SettingsStyled>
  );
}

const SettingsStyled = styled.div``;

const NoticeCenterWrapper = styled.section`
  padding: 20px 0;
  border-bottom: 1px solid #cacacb;
`;

const MenuItemStyled = styled.div`
  ${cssx.flexStart}
`;

const ImgWrapper = styled.div`
  margin-right: 15px;
`;

const TextWrapper = styled.div``;

const MenuTitle = styled.div`
  margin-bottom: 4px;
  ${(props) => props.theme.fonts.bd3_R};
`;

const MenuDesc = styled.div`
  ${(props) => props.theme.fonts.p1_R};
  color: #999999;
`;

const SettingsWrapper = styled.section`
  ${cssx.flexStart}
  padding: 20px 0;
  > div {
    ${cssx.flexStart}
    width: 50%;
    padding-right: 20px;
  }
`;
