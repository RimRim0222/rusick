import styled from '@emotion/styled';
import { Icon, ICON_LIST } from '@src/components/icon';

export function PaymentSettingMenu() {
  const menuTitles = ['결제 비밀번호 변경', '이용약관'];
  return (
    <PaymentSettingMenuStyled>
      {menuTitles.map((title, idx) => (
        <PaymentSettingMenuItem key={idx}>
          {title}
          <Icon icon={ICON_LIST['arrow_58x58']} />
        </PaymentSettingMenuItem>
      ))}
    </PaymentSettingMenuStyled>
  );
}

const PaymentSettingMenuStyled = styled.div``;
const PaymentSettingMenuItem = styled.div``;
