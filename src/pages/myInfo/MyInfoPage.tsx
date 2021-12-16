import styled from '@emotion/styled';
import { MyInfoHeader, MainMenu, SubMenu } from '@src/features/myInfo';
export function MyInfoPage() {
  return (
    <MyInfoPageStyled>
      <MyInfoHeader />
      <MainMenu />
      <SubMenu />
    </MyInfoPageStyled>
  );
}

const MyInfoPageStyled = styled.div``;
