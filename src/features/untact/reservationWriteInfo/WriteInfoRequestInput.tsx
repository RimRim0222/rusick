import styled from '@emotion/styled';
import { TextArea } from '@src/components/textArea';
import { useState } from 'react';
import { WriteReservationSubTitle } from './WriteReservationSubTitle';

export function WriteInfoRequestInput() {
  const [textValue, setTextValue] = useState('');

  const onChangeHandler = (value: string) => {
    setTextValue(value);
  };

  return (
    <WriteInfoRequestInputStyled>
      <WriteReservationSubTitle label="증상내용 및 요청사항(필수사항)" />
      <WriteInfoRequestTextAreaWrapper>
        현재 증상 등 진료할 의료진에게 전달 내용이 있으면 입력해주세요.(250자 내외)
        <TextArea inputValue={textValue} onChange={onChangeHandler} />
      </WriteInfoRequestTextAreaWrapper>
    </WriteInfoRequestInputStyled>
  );
}

const WriteInfoRequestInputStyled = styled.div`
  padding: 10px 0;
`;

const WriteInfoRequestTextAreaWrapper = styled.div``;
