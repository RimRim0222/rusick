import styled from '@emotion/styled';
import { useLoadable } from '@src/features/tester/useLoadable';
import { HeaderStep } from '@src/layout/header';
import { ISymptomImage, SymptomImageQueryParam, SymptomImageState } from '@src/store/SymptomState';
import { RESERVE_ENTER_TYPE } from '@src/store/UntactReservationState';
import { useEffect, useState } from 'react';
import { SymptomCards, SymptomSearchCondition } from '.';
import { ReservationCheckButton } from '../ReservationCheckButton';
import { useReservation } from '../useReservation';

export function ChoiceSymptomFeatures() {
  const { contents, dispatch, onSave } = useReservation(RESERVE_ENTER_TYPE.SYMPTOM);
  const { handleParams, result, isLoading, isError } = useLoadable<ISymptomImage[]>(
    SymptomImageQueryParam,
    SymptomImageState,
    [],
  );
  const [btnDisabled, setBtnDisabled] = useState(true);

  const onClickSymptom = (cardId: string) => {
    dispatch({ type: 'enterValue', activeId: cardId });
  };

  const onClickNext = () => {
    onSave(HeaderStep.STEP2);
  };

  useEffect(() => {
    setBtnDisabled(contents.enterValue.length > 0 ? false : true);
  }, [contents.enterValue]);

  return (
    <ChoiceSymptomFeaturesStyled>
      {/* <SymptomSearchInput /> */}
      <CardWrapper>
        <SymptomSearchCondition />
        {isLoading ? (
          <div>loading...</div>
        ) : (
          <SymptomCards
            cardData={result}
            activeValues={contents.enterValue}
            onClick={onClickSymptom}
          />
        )}
      </CardWrapper>
      <ReservationCheckButton onClick={onClickNext} disabled={btnDisabled} />
    </ChoiceSymptomFeaturesStyled>
  );
}

const ChoiceSymptomFeaturesStyled = styled.div``;

const CardWrapper = styled.div`
  width: 100%;
`;
