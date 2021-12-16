import styled from '@emotion/styled';
import { Icon, ICON_LIST } from '@src/components/icon';
import { WriteReservationSubTitle } from './WriteReservationSubTitle';

export function WriteInfoMemberInfo() {
  return (
    <WriteInfoMemberInfoStyled>
      <WriteReservationSubTitle label="진료 예약자" />

      <WriteInfoMemberInfoCardStyled>
        <IconWrapper>
          <Icon icon={ICON_LIST.profile_01} width="40px" />
        </IconWrapper>
        <ProfileWrapper>
          이름(성별/나이_세)
          <br />
          (내국인 / 재외국민)
        </ProfileWrapper>
      </WriteInfoMemberInfoCardStyled>
    </WriteInfoMemberInfoStyled>
  );
}

const WriteInfoMemberInfoStyled = styled.div`
  padding: 10px 0;
`;
const WriteInfoMemberInfoCardStyled = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const IconWrapper = styled.span`
  padding: 0 5px;
`;
const ProfileWrapper = styled.span``;
