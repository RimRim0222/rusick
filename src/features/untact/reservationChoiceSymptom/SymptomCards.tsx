import styled from '@emotion/styled';
import { SymptomCard } from '@src/components/cards';
import { ISymptomCards } from './types';

export function SymptomCards({ cardData, activeValues, onClick }: ISymptomCards) {
  const onClickHandler = (id: string) => {
    onClick(id);
  };

  return (
    <CardsWrapper>
      {cardData.map((obj) => (
        <CardStyles key={obj.id}>
          <SymptomCard
            id={obj.id}
            text={obj.symptom}
            type={obj.tag}
            active={activeValues.indexOf(obj.id) > -1}
            image={obj.image}
            onClick={onClickHandler}
          />
        </CardStyles>
      ))}
    </CardsWrapper>
  );
}

const CardStyles = styled.div`
  width: 50%;
  float: left;
  box-sizing: border-box;
  :nth-of-type(2n-1) {
    padding: 10px 5px 0 0;
  }
  :nth-of-type(2n) {
    padding: 10px 0 0 5px;
  }
`;

const CardsWrapper = styled.div``;
