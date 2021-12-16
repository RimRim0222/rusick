import styled from '@emotion/styled';
import { Icon, ICON_LIST } from '@components/icon';
import { menuText } from './text';
import { useMenu } from './useMenu';
import { cssx } from '@src/theme/';

export function ServiceCenter() {
  const { t, serviceCenterItemProps } = useMenu();
  return (
    <ServiceCenterStyled>
      <ServiceCenterHead>{t(menuText.serviceCenterTitle)}</ServiceCenterHead>
      <MenuItemsWrapper>
        {serviceCenterItemProps.map((propsObj, idx) => {
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
      </MenuItemsWrapper>
    </ServiceCenterStyled>
  );
}

const ServiceCenterStyled = styled.div`
  padding: 33px 0;
  border-bottom: 1px solid #cacacb;
`;
const ServiceCenterHead = styled.div`
  ${(props) => props.theme.fonts.h2_B}
  margin: 0 0 20px;
`;
const MenuItemsWrapper = styled.div`
  ${cssx.flexStart}
  flex-wrap: wrap;
`;
const MenuItemStyled = styled.div`
  ${cssx.flexStart}
  width: 50%;
  padding-right: 20px;
  &:nth-of-type(2) ~ div {
    margin-top: 25px;
  }
`;
const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MenuTitle = styled.div`
  ${(props) => props.theme.fonts.bd3_R};
  height: content-fit;
`;
