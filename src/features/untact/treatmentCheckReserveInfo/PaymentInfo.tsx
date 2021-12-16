import styled from '@emotion/styled';
import { cssx } from '@src/theme/';
import { Icon, ICON_LIST } from '@src/components/icon';
import { CheckReserveTitle } from './CheckReserveTitle';

export function PaymentInfo() {
  return (
    <PaymentInfoWrap>
      <CheckReserveTitle label="결제수단 정보" />
      <div>
        <div className="left">
          <Icon icon={ICON_LIST['order_03_on']} width="60px" />
          <span>삼성카드</span>
        </div>
        <div className="right">카드변경</div>
      </div>
    </PaymentInfoWrap>
  );
}

const PaymentInfoWrap = styled.div`
  > div {
    ${cssx.flexBtw}
    > div {
      display: inline-flex;
      align-items: center;
    }
  }
`;
