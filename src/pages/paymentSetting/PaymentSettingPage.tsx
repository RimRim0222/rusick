import styled from '@emotion/styled';
import { PaymentAdd, PaymentSettingMenu } from '@src/features/paymentSetting';
export function PaymentSettingPage() {
  return (
    <PaymentSettingPageStyled>
      <PaymentAdd />
      <PaymentSettingMenu />
    </PaymentSettingPageStyled>
  );
}

const PaymentSettingPageStyled = styled.div``;
