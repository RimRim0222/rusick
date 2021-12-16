import styled from '@emotion/styled';

interface IDoctorCareerData {
  data: {
    id: string;
    label: string;
    contents: string[];
  };
}

export function DoctorCareerItem({ data }: IDoctorCareerData) {
  return (
    <DoctorCareerItemStyled>
      <h4>{data.label}</h4>
      <ContentsWrapper>
        {data.contents.map((str, idx) => (
          <p key={idx}>{str}</p>
        ))}
      </ContentsWrapper>
    </DoctorCareerItemStyled>
  );
}

const DoctorCareerItemStyled = styled.div``;
const ContentsWrapper = styled.div``;
