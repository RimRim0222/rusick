import styled from '@emotion/styled';
import { SubjectCard, useCard } from '@src/components/cards';
import { useLoadable } from '@src/features/tester/useLoadable';
import { ISubject, SubjectQueryParam, SubjectState } from '@src/store/SubjectState';

interface IPropTypes {
  activeId: string[];
  onClick: (cardId: string) => void;
}

export function SubjectCards({ activeId, onClick }: IPropTypes) {
  const { result, isLoading } = useLoadable<ISubject[]>(SubjectQueryParam, SubjectState, []);

  const onClickCard = (cardId: string) => {
    onClick(cardId);
  };

  return (
    <SubjectCardsStyled>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        result.map((item: ISubject) => {
          return (
            <CardWrapper key={item.id}>
              <SubjectCard
                key={item.id}
                id={item.id}
                text={item.symptom}
                image={item.image}
                active={activeId.indexOf(item.id) > -1}
                onClick={() => onClickCard(item.id)}
              />
            </CardWrapper>
          );
        })
      )}
    </SubjectCardsStyled>
  );
}

const SubjectCardsStyled = styled.div``;

const CardWrapper = styled.div`
  width: 50%;
  box-sizing: border-box;
  :nth-of-type(2n-1) {
    float: left;
    padding: 10px 5px 0 0;
  }
  :nth-of-type(2n) {
    float: right;
    padding: 10px 0 0 5px;
  }
`;
