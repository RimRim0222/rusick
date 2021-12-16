import styled from '@emotion/styled';
import { IMAGE_LIST } from '@src/components/images/imageList';
import { SwipSlider } from '@src/components/swipSlider';
import { useState } from 'react';

const imageArr = ['mainbanner_01', 'mainbanner_02', 'mainbanner_03', 'mainbanner_04'];

export function MainBanner() {
  const [slidePage, setSlidePage] = useState(1);
  const onPageHandler = (page: number) => {
    setSlidePage(page + 1);
  };

  const items = imageArr.map((img, idx) => (
    <div key={idx}>
      <ImageStyled src={IMAGE_LIST[img]} alt={img} />
    </div>
  ));

  return (
    <MainBannerStyled>
      <SwipSlider items={items} onPage={onPageHandler} />
      <SlideNumberStyled>
        <span>{slidePage}</span>
        <i>/</i>4
      </SlideNumberStyled>
    </MainBannerStyled>
  );
}

const MainBannerStyled = styled.div`
  position: relative;
  box-sizing: border-box;
  width: calc(100% + 2rem);
  margin: 0 -1rem;
`;

const ImageStyled = styled.img`
  width: 100%;
`;

const SlideNumberStyled = styled.div`
  position: absolute;
  left: 7%;
  bottom: 12%;
  display: inline-block;
  padding: 6px 11px;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 15px;
  ${(props) => props.theme.fonts.p2_R}
  color: rgba(255,255,255,.6);
  span {
    color: rgba(255, 255, 255, 1);
  }
  i {
    padding: 0 4px;
  }
`;
