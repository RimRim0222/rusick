import styled from '@emotion/styled';
import { HeaderStep, useHeaderState } from '@src/layout/header';
import { RESERVE_ENTER_TYPE } from '@src/store/UntactReservationState';
import { useEffect, useState } from 'react';
import { SubjectCards } from '.';
import { ReservationCheckButton } from '../ReservationCheckButton';
import { useReservation } from '../useReservation';

export function ChoiceSubjectFeatures() {
  const { contents, dispatch, onSave } = useReservation(RESERVE_ENTER_TYPE.SUBJECT);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const onClickSymptom = (cardId: string) => {
    dispatch({ type: 'enterValue', activeId: cardId });
  };

  const onClickNext = () => {
    onSave(HeaderStep.STEP2);
  };

  useEffect(() => {
    setBtnDisabled(!(contents.enterValue.length > 0));
  }, [contents.enterValue]);

  return (
    <ChoiceSubjectFeaturesStyled>
      <SubTitleStyled>진료과로 예약</SubTitleStyled>
      <SubjectCards activeId={contents.enterValue} onClick={onClickSymptom} />
      <ReservationCheckButton onClick={onClickNext} disabled={btnDisabled} />
    </ChoiceSubjectFeaturesStyled>
  );
}

const ChoiceSubjectFeaturesStyled = styled.div``;

const SubTitleStyled = styled.div`
  padding: 5px 0;
`;
