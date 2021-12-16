import styled from '@emotion/styled';
import { WithdrawalForm, WithdrawalText } from '@src/features/membershipWithdrawal';

export function MembershipWithdrawalPage() {
  return (
    <MembershipWithdrawalPageStyled>
      <WithdrawalText />
      <WithdrawalForm />
    </MembershipWithdrawalPageStyled>
  );
}

const MembershipWithdrawalPageStyled = styled.div``;
