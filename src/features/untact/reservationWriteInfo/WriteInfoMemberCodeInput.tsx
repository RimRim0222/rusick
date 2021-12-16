import styled from '@emotion/styled';
import { Input } from '@src/components/input';
import { WriteReservationSubTitle } from './WriteReservationSubTitle';

export function WriteInfoMemberCodeInput() {
  return (
    <WriteInfoMemberCodeInputStyled>
      <WriteReservationSubTitle label="주민등록번호 (필수사항)" />

      <InputWrapper>
        <InputStyled>
          <Input inputValue={''} />
        </InputStyled>
        <InputStyled>
          <Input inputValue={''} />
        </InputStyled>
      </InputWrapper>
      <CheckWrapper>
        주민등록번호 처리에 동의합니다.
        <br />* 주민등록번호는 병원 예약시 필수 입력 정보로서 의료진이 환자등록 및 조회 외에 용도로
        수집 및 사용되지 않습니다.
      </CheckWrapper>
    </WriteInfoMemberCodeInputStyled>
  );
}

const WriteInfoMemberCodeInputStyled = styled.div`
  padding: 10px 0;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const InputStyled = styled.span`
  padding: 0 5px;
`;
const CheckWrapper = styled.div``;
