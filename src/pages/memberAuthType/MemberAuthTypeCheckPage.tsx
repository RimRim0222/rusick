import styled from '@emotion/styled';
import { MemberExpatCheckText, SelectCardInForm } from '@src/features/memberExpatCheck';

export function MemberAuthTypeCheckPage() {
  return (
    <MemberAuthTypeCheckPageStyled>
      <MemberExpatCheckText />
      <SelectCardInForm />
    </MemberAuthTypeCheckPageStyled>
  );
}

const MemberAuthTypeCheckPageStyled = styled.div``;
