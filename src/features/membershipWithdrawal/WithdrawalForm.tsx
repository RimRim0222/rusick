import styled from '@emotion/styled';
import { Checkbox } from '@src/components/checkbox';
import { Button, BUTTON_SIZE, BUTTON_SHAPE } from '@src/components/button';

export function WithdrawalForm() {
  const handleCheck = () => {
    //isChecked 스테이트 연결
  };

  const handleWithdrawalButton = () => {
    //회원 탈퇴 API
  };
  return (
    <WithdrawalFormStyled>
      <Checkbox
        id={'withdrawal'}
        label={'안내 사항을 확인하였으며 탈퇴에 동의합니다.'}
        isChecked={false}
        disabled={true}
        onClick={handleCheck}
      />
      <Button
        label={'탈퇴하기'}
        size={BUTTON_SIZE.LARGE}
        shape={BUTTON_SHAPE.ROUNDED}
        disabled={true}
        onClick={handleWithdrawalButton}
      />
    </WithdrawalFormStyled>
  );
}

const WithdrawalFormStyled = styled.div`
  margin-top: 65px;
  color: #606060;
  > div {
    justify-content: center;
  }
  span {
    ${(props) => props.theme.fonts.bd2_B}
  }
`;
