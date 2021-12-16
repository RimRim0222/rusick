import styled from '@emotion/styled';
import { Header } from '@src/layout/header';
import { Navigator } from '@src/layout/navigator';
import { useLocation } from 'react-router-dom';

const naviPathList = ['/'];

export function HeaderRouter() {
  const { pathname } = useLocation();

  const isNavigator = naviPathList.includes(pathname);

  // 네비게이션이 표시될 헤더 영역에 대한 정의
  return (
    <HeaderRouterStyled>
      {isNavigator && <Navigator />}
      {!isNavigator && <Header />}
    </HeaderRouterStyled>
  );
}

// header가 플로팅 되어야 함
const HeaderRouterStyled = styled.div``;
