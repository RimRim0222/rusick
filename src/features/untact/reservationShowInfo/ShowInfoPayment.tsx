import styled from '@emotion/styled';
import { Icon, ICON_LIST } from '@src/components/icon';
import { cssx } from '@src/theme';

export function ShowInfoPayment() {
  const onClickHandler = () => {
    console.log('card change click');
  };

  return (
    <ShowInfoPaymentStyled>
      <TitleStyled>결제수단</TitleStyled>
      <ContentsWrapper>
        <div className="left">
          <Icon icon={ICON_LIST['order_03_on']} width="60px" />
          <span>KB국민</span>
        </div>
        <div className="right" onClick={onClickHandler}>
          카드변경
        </div>
      </ContentsWrapper>
    </ShowInfoPaymentStyled>
  );
}

const ShowInfoPaymentStyled = styled.div``;
const TitleStyled = styled.div``;
const ContentsWrapper = styled.div`
  ${cssx.flexBtw}
  > div {
    display: inline-flex;
    align-items: center;
  }
`;
