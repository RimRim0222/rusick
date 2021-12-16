import styled from '@emotion/styled';

export function WithdrawalText() {
  return (
    <WithdrawalTextStyled>
      <WithdrawalMainTitle>어디아파 회원탈퇴 안내</WithdrawalMainTitle>
      <WithdrawalMainDesc>
        어디아파를 탈퇴하시기 전에 안내사항을 꼭 확인하시고 진행해 주시기 바랍니다.
      </WithdrawalMainDesc>
      <WithdrawalTermTitle01>1.개인정보 및 이용기록 삭제 안내</WithdrawalTermTitle01>
      <WithdrawalTermDesc01>
        개인정보와 회원님의 이용기록은 모두 삭제되며 동의 후 삭제된 계정은
        <br />
        복구할 수 없습니다. (단 관련 법령에 의거하여 일정 기간 동안 개인정보
        <br />를 보유할 필요가 있을 경우, 법이 정한 기간동안 개인정보를 보유할 수 있<br />
        습니다.)
        <br />
        (1) 개인정보:이메일 주소, SNS, 이름, 생년월일, 성별, 주소, 이벤트 참여
        <br />시 입력한 개인정보 (2) 본인인증 정보:휴대폰 본인인증 내역, 이름, 생년
        <br />
        월일, 성별, 전화번호 (3) 서비스 이용기록:이벤트 신청, 좋아요, 알림
        <br />
        내역, 찜한병원, 찜한 약국, 찜한 의사
      </WithdrawalTermDesc01>
      <WithdrawalTermTitle02>2.개인 게시물 정보 처리 안내</WithdrawalTermTitle02>
      <WithdrawalTermDesc02>
        공용 게시판에 등록된 댓글, 후기 등 게시물은 탈퇴 후에도 삭제되지 않고
        <br />
        유지되나 탈퇴 전 삭제하시기 바랍니다.
      </WithdrawalTermDesc02>
    </WithdrawalTextStyled>
  );
}

const WithdrawalTextStyled = styled.div``;
const WithdrawalMainTitle = styled.div`
  margin-top: 47px;
  ${(props) => props.theme.fonts.h1_B}
`;
const WithdrawalMainDesc = styled.div`
  margin-top: 15px;
  ${(props) => props.theme.fonts.bd2_R}
  color: #606060;
`;
const WithdrawalTermTitle01 = styled.div`
  margin-top: 40px;
  ${(props) => props.theme.fonts.bd2_B}
  color: #606060;
`;
const WithdrawalTermDesc01 = styled.div`
  margin-top: 5px;
  ${(props) => props.theme.fonts.p1_R}
  color: #606060;
`;
const WithdrawalTermTitle02 = styled.div`
  margin-top: 14px;
  ${(props) => props.theme.fonts.bd2_B}
  color: #606060;
`;
const WithdrawalTermDesc02 = styled.div`
  margin-top: 5px;
  ${(props) => props.theme.fonts.p1_R}
  color: #606060;
`;
