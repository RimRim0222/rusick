import styled from '@emotion/styled';
import { MemeberInfo } from '@src/features/memberInfo';

export function MemberInfoPage() {
  return (
    <MemberInfoPageStyled>
      <MemeberInfo />
    </MemberInfoPageStyled>
  );
}

const MemberInfoPageStyled = styled.div``;
