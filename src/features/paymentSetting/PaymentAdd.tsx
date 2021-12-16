import styled from '@emotion/styled';
import {
  Button,
  BUTTON_SHAPE,
  BUTTON_SIZE,
  BUTTON_ICON_THEME,
  BUTTON_THEME,
} from '@src/components/button';

export function PaymentAdd() {
  const handlePaymentAddButton = () => {
    //결제 카드 추가 팝업
  };

  return (
    <PaymentAddStyled>
      <PaymentAddHead>결제수단</PaymentAddHead>
      <Button
        label={'결제 카드 추가하기 +'}
        size={BUTTON_SIZE.LARGE}
        theme={BUTTON_THEME.OUTLINE_GRAY}
        shape={BUTTON_SHAPE.ROUNDED}
        onClick={handlePaymentAddButton}
      />
    </PaymentAddStyled>
  );
}

const PaymentAddStyled = styled.div``;
const PaymentAddHead = styled.div``;
