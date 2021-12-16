import styled from '@emotion/styled';
import { cssx } from '@src/theme/';
import { Icon, ICON_LIST } from '@src/components/icon';
import { CheckReserveTitle } from './CheckReserveTitle';

export function CheckProcess() {
  return (
    <CheckProcessWrap>
      <CheckReserveTitle label={'진행 상태'} />
      <CheckProcessStyled>
        <Icon icon={ICON_LIST['apple']} width="60px" />
        <dl>
          <dt>진료 대기 중</dt>
          <dd>
            진료의가 예약정보를 확인하고 있습니다. 예약 정보 확인 후 진료실 입장 요청 문자를
            보내드립니다.
          </dd>
        </dl>
      </CheckProcessStyled>
    </CheckProcessWrap>
  );
}

const CheckProcessWrap = styled.div``;

const CheckProcessStyled = styled.div`
  ${cssx.flexStart}
`;
