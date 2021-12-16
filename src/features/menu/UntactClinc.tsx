import styled from '@emotion/styled';
import { cssx } from '@src/theme/';
import { useMenu } from './useMenu';
import { Icon } from '@components/icon';
import { menuText } from './text';

export function UntactClinc() {
  const { t, untactItemProps } = useMenu();

  return (
    <UntactClincStyled>
      <UntactClincHead>{t(menuText.untactClinicTitle)}</UntactClincHead>
      {untactItemProps.map((propsObj, idx) => {
        const { image, title, desc, onClick } = propsObj;
        return (
          <MenuItemStyled key={idx} onClick={onClick}>
            <ImgWrapper>
              <Icon icon={image} width="45px" />
            </ImgWrapper>
            <TextWrapper>
              <MenuTitle>{t(title)}</MenuTitle>
              <MenuDesc>{t(desc)}</MenuDesc>
            </TextWrapper>
          </MenuItemStyled>
        );
      })}
    </UntactClincStyled>
  );
}

const UntactClincStyled = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #cacacb;
`;
const UntactClincHead = styled.div`
  ${(props) => props.theme.fonts.h2_B}
  margin: 45px 0 20px;
`;

const MenuItemStyled = styled.div`
  ${cssx.flexStart}
  height: 53px;
  & + div {
    margin-top: 20px;
  }
`;
const ImgWrapper = styled.div`
  /* width: 55px;
  height: 55px; */
  border: 1px solid #bcb8b8;
  border-radius: 50%;
  margin-right: 13px;
  > img {
    margin: 4px;
    border-radius: 50%;
    background-color: #f4f6fa;
  }
`;
const TextWrapper = styled.div`
  ${cssx.flexStartR}
`;
const MenuTitle = styled.div`
  ${(props) => props.theme.fonts.h4_B};
`;
const MenuDesc = styled.div`
  ${(props) => props.theme.fonts.bd3_R};
  color: #656666;
  margin-top: 2px;
`;
