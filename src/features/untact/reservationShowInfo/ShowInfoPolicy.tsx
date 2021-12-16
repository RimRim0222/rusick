import styled from '@emotion/styled';

export function ShowInfoPolicy() {
  return (
    <ShowInfoPolicyStyled>
      <PolicyItemStyled>비대면 진료 예약 변경 및 취소 정책 안내</PolicyItemStyled>
      <PolicyItemStyled>비대면 진료 진료비 안내</PolicyItemStyled>
      <PolicyItemStyled>예약 및 예약 취소 환불 정책 안내</PolicyItemStyled>
    </ShowInfoPolicyStyled>
  );
}

const ShowInfoPolicyStyled = styled.div`
  padding: 10px 0;
`;
const PolicyItemStyled = styled.div``;
