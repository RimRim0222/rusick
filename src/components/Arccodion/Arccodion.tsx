import styled from '@emotion/styled';
import { IArccodion } from './types';
import { useState, useRef, useEffect } from 'react';

export function Arccodion({ title, content, setContainerHeight }: IArccodion) {
  //setContainerHeight : 외부 컨테이너의 높이 확장하는 것을 API조회로 대체?

  const [isOpen, setArccodion] = useState(false);

  const buttonHandler = () => {
    //아코디언 열기,닫기
    setArccodion((prevState) => !prevState);

    //선택된 요소의 offsetTop만큼 전체 컨테이너 높이 확장
    if (titleBox.current) {
      /*
      Tofix
      가장 최근에 클릭한 요소를 기준으로 페이지 높이가 변경됨 -> 상단의 아코디언을 클릭했을때 footer와 겹침
      */
      const titleOffsetTop = titleBox.current.offsetTop;
      console.log(titleOffsetTop);
      setContainerHeight(`${500 + titleOffsetTop}px`);
    }
  };

  useEffect(() => {
    //아코디언이 열린 후  스크롤 위치 이동
    if (isOpen && titleBox.current) {
      window.scrollTo(0, titleBox.current.offsetTop);
    }
  }, [isOpen]);

  const contentHeight = isOpen ? '100px' : '0';
  const contentDisplay = isOpen ? 'block' : 'none';
  const titleBox = useRef<HTMLDivElement | null>(null);
  const contentBox = useRef<HTMLDivElement>(null);

  return (
    <ArccodionStyled>
      <ItemWrapper>
        <Title ref={titleBox}>{title}</Title>
        <ArccodionButton onClick={buttonHandler}>버튼</ArccodionButton>
      </ItemWrapper>
      <ContentWrapper height={contentHeight} ref={contentBox}>
        <Content display={contentDisplay}>{content}</Content>
      </ContentWrapper>
    </ArccodionStyled>
  );
}

interface IContentWrapper {
  height: string;
}
interface IContent {
  display: string;
}

const ArccodionStyled = styled.div``;
const ItemWrapper = styled.div`
  border: solid 1px black;
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 3px;
`;
const Title = styled.div``;
const ArccodionButton = styled.button``;
const ContentWrapper = styled.div<IContentWrapper>`
  width: 150px;
  height: ${(props) => props.height};

  background-color: yellow;
  transition-duration: 0.5s;
`;
const Content = styled.div<IContent>`
  display: ${(props) => props.display};
`;
