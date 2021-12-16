import styled from '@emotion/styled';
import { Tag, TAG_THEME } from '@src/components/tag';

export function DoctorInfoIntro() {
  return (
    <DoctorInfoIntroStyled>
      (사진) 김철수 의사
      <Tag label="소아청소년과" theme={TAG_THEME.DEFAULT} />
    </DoctorInfoIntroStyled>
  );
}

const DoctorInfoIntroStyled = styled.div`
  padding: 10px;
`;
