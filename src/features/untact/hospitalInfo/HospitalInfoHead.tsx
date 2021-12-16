import styled from '@emotion/styled';
import { SwipSlider } from '@src/components/swipSlider';

export function HospitalInfoHead() {
  return (
    <HospitalInfoHeadStyled>
      {/* <SwipSlider items={items} onPage={onPageHandler} /> */}
    </HospitalInfoHeadStyled>
  );
}

const HospitalInfoHeadStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const ImageStyled = styled.img`
  width: 100%;
`;
