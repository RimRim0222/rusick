import styled from '@emotion/styled';
import { cssx } from '@src/theme/';
import { Icon } from '@src/components/icon';
import { useMyInfo } from './useMyInfo';

export function MainMenu() {
  const { t, mainMenuItemProps } = useMyInfo();

  return (
    <MainMenuStyled>
      {mainMenuItemProps.map((propsObj, idx) => {
        const { image, title, onClick } = propsObj;
        return (
          <ItemWrapper key={idx} onClick={onClick}>
            <IconWrapper>
              <Icon icon={image} width={'60px'} />
            </IconWrapper>
            <TextWrapper>{t(title)}</TextWrapper>
          </ItemWrapper>
        );
      })}
    </MainMenuStyled>
  );
}

const MainMenuStyled = styled.div`
  ${cssx.flexCenter}
  justify-content: space-evenly;
  margin-top: 17px;
  padding: 20px;
  background: #f4f4f4;
`;
const ItemWrapper = styled.div`
  text-align: center;
`;
const IconWrapper = styled.div``;
const TextWrapper = styled.div`
  margin-top: 11px;
  ${(props) => props.theme.fonts.bd3_R}
`;
