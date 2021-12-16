import styled from '@emotion/styled';
import { IMAGE_LIST } from '@src/components/images/imageList';
import { SwipSlider } from '@src/components/swipSlider';
import { Icon, ICON_LIST } from '@src/components/icon';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function MainTutorial() {
  const { t } = useTranslation();
  const [slidePage, setSlidePage] = useState(1);

  const slideImtes = [...Array(10)].map((obj, idx) => {
    return (
      <ImageWrapper key={idx}>
        <ImageStyled src={IMAGE_LIST.main_tutorial_01} alt="" />
        <SliderText>
          어디아파 스마트 문진으로 나와 가족의 <br />
          소중한 건강을 관리해 보세요.
        </SliderText>
      </ImageWrapper>
    );
  });

  const onPageHandler = (page: number) => {
    setSlidePage(page + 1);
  };

  return (
    <MainTutorialStyled>
      <TextStyled>
        어디아파 알아보기
        <Icon icon={ICON_LIST.arrow_24x24} width="8px" />
      </TextStyled>
      <SwipSlider
        items={slideImtes}
        onPage={onPageHandler}
        slidesPerView={1}
        centeredSlides={false}
        pagination={'bullets'}
      />
    </MainTutorialStyled>
  );
}

const MainTutorialStyled = styled.div`
  width: calc(100% + 2rem);
  padding: 45px 1rem 84px;
  margin: 60px -1rem 0;
  background-color: #f0f0f0;
`;

const TextStyled = styled.div`
  padding: 10px 0;
  text-align: center;
  ${(props) => props.theme.fonts.h2_1_B}
  img {
    vertical-align: middle;
    margin-left: 15px;
    width: 8px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const ImageStyled = styled.img`
  width: 215px;
`;

const SliderText = styled.div`
  margin-top: 45px;
  padding-bottom: 35px;
  ${(props) => props.theme.fonts.h3_1_R}
`;
