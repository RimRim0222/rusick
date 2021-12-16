import styled from '@emotion/styled';
import { cssx } from '@src/theme/';
import { Icon, ICON_LIST } from '@src/components/icon';
import { CheckReserveTitle } from './CheckReserveTitle';

export function ReservedPeople() {
  return (
    <ReservedPeopleWrappper>
      <CheckReserveTitle label={'진료 예약자'} />
      <People>
        <Icon icon={ICON_LIST['person_30x30']} width="60px" />
        <dl>
          <dt>홍길동</dt>
          <dd>내국인 회원</dd>
        </dl>
      </People>
    </ReservedPeopleWrappper>
  );
}

const ReservedPeopleWrappper = styled.div``;
const People = styled.div`
  ${cssx.flexStart}
`;
