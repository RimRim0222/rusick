import styled from '@emotion/styled';
import { Join } from '@src/features/memberJoin';
import { cssx } from '@src/theme';

export function JoinPage() {
  return (
    <JoinPageStyled>
      <Join />
    </JoinPageStyled>
  );
}

const JoinPageStyled = styled.div`
  ${cssx.fullLayout}
`;
