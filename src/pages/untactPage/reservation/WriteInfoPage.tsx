import styled from '@emotion/styled';

import { WriteInfoFeatures } from '@src/features/untact/reservationWriteInfo/WriteInfoFeatures';

export function WriteInfoPage() {
  return (
    <WriteInfoPageStyled>
      <WriteInfoFeatures />
    </WriteInfoPageStyled>
  );
}

const WriteInfoPageStyled = styled.div``;
