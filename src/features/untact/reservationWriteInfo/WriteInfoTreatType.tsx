import styled from '@emotion/styled';
import { Checkbox } from '@src/components/checkbox';
import { useState } from 'react';
import { WriteReservationSubTitle } from './WriteReservationSubTitle';

export function WriteInfoTreatType() {
  const [checked, setChecked] = useState('');

  const onClickHandler = (val: string) => {
    setChecked(val);
  };

  return (
    <WriteInfoTreatTypeStyled>
      <WriteReservationSubTitle label="진료유형" />
      <CheckboxWrapper>
        <Checkbox
          label="화상진료"
          id={'faceTalk'}
          onClick={onClickHandler}
          isChecked={checked === 'faceTalk'}
        />
        <Checkbox
          label="음성진료"
          id={'voiceTalk'}
          onClick={onClickHandler}
          isChecked={checked === 'voiceTalk'}
        />
      </CheckboxWrapper>
    </WriteInfoTreatTypeStyled>
  );
}

const WriteInfoTreatTypeStyled = styled.div`
  padding: 10px 0;
`;
const CheckboxWrapper = styled.div``;
