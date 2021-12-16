import { CenterItem } from './CenterItem';
import { LeftItem } from './LeftItem';
import { RightItem } from './RightItem';
import { cssx } from '@src/theme';
import styled from '@emotion/styled';

export function TreatDetailPage() {
  // 진료실 페이지
  return (
    <>
      <TreatDetailPageStyled>
        {/* <LeftItem />
        <CenterItem /> */}
        <RightItem />
      </TreatDetailPageStyled>
    </>
  );
}

const TreatDetailPageStyled = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: flex-start;
  // width: 1200px;
  // height: 700px;
  // > div {
  //   display: inline-flex;
  //   flex: auto;
  //   width: 33.33%;
  //   height: 100%;
  //   border: 1px solid;
  // }
`;
