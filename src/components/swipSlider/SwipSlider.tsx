// https://swiperjs.com/demos#effect-fade

import styled from '@emotion/styled';
import { ISwipSlider } from './types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';

// import SwiperCore from 'swiper/core';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([EffectFade, Navigation, Pagination]);
export function SwipSlider({
  items,
  onPage,
  slidesPerView,
  centeredSlides,
  pagination,
}: ISwipSlider) {
  const onSlideChange = (e: SwiperCore) => {
    if (onPage) {
      //현재 페이지 번호
      onPage(e.realIndex);
    }
  };

  return (
    <>
      <SwipSliderStyled>
        <Swiper
          className="mySwiper"
          speed={400}
          loop={true}
          spaceBetween={14}
          slidesPerView={slidesPerView}
          onSlideChange={onSlideChange}
          centeredSlides={centeredSlides}
          updateOnWindowResize={true}
          pagination={{ type: pagination }}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>{item}</SwiperSlide>
          ))}
        </Swiper>
      </SwipSliderStyled>
    </>
  );
}

SwipSlider.defaultProps = {
  slidesPerView: 1,
  centeredSlides: true,
};

const SwipSliderStyled = styled.div`
  width: 100%;
  height: 100%;
  .mySwiper {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-bullet {
    width: 5px;
    height: 5px;
    background: #cacacb;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #424243;
  }
`;
