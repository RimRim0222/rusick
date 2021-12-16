import styled from '@emotion/styled';

export function ShowInfoBasic() {
  return (
    <ShowInfoBasicStyled>
      기본정보
      <ContentsWrapper>
        <ul>
          <BasicItemStyled>
            <span>주민번호</span>
            <span>123456</span>
          </BasicItemStyled>
          <BasicItemStyled>
            <span>진료의</span>
            <span>김철수</span>
          </BasicItemStyled>
          <BasicItemStyled>
            <span>병원명</span>
            <span>부민병원</span>
          </BasicItemStyled>
          <BasicItemStyled>
            <span>예약일</span>
            <span>2021년 10월 12일</span>
          </BasicItemStyled>
          <BasicItemStyled>
            <span>진료유형</span>
            <span>비대면 음성진료</span>
          </BasicItemStyled>
        </ul>
      </ContentsWrapper>
    </ShowInfoBasicStyled>
  );
}

const ShowInfoBasicStyled = styled.div`
  padding: 10px 0;
`;

const BasicItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
`;

const ContentsWrapper = styled.div``;
