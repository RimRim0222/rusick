import styled from '@emotion/styled';

export function ShowInfoRequire() {
  return (
    <ShowInfoRequireStyled>
      <h4>증상내용 및 요청사항</h4>
      <ContentsWrapper>증상내용 및 요청사항 입력 란</ContentsWrapper>
    </ShowInfoRequireStyled>
  );
}

const ShowInfoRequireStyled = styled.div`
  padding: 10px 0;
`;

const ContentsWrapper = styled.div`
  overflow: hidden;
  word-wrap: break-word;
`;
