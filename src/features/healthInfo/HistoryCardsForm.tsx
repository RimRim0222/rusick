import styled from '@emotion/styled';
import { useLoadableDefault } from '@src/features/tester/useLoadable';
import { RecoilState } from 'recoil';
import { Button, BUTTON_SIZE, BUTTON_THEME, BUTTON_SHAPE } from '@src/components/button';
import { Card } from '@src/components/cards/Card';
import { useCard } from '@src/components/cards';

import { useEffect, useState } from 'react';
export function HistoryCardsForm({
  query,
  url,
  page,
}: {
  query: RecoilState<any>;
  url: string;
  page: number;
}) {
  const { result, isLoading } = useLoadableDefault<string[]>(query, []);
  const { activeId, onActiveId } = useCard('multiple');

  const canNext = activeId.length;

  useEffect(() => {
    onActiveId('해당 사항 없음');
  }, []);
  const handleNextButton = () => {
    //선택 값 저장 후, 다음 페이지로 이동

    console.log(activeId);
    console.log(url);
  };
  const handleCardClick = (id: string) => {
    console.log(id);
    onActiveId(id);
  };

  return (
    <HistoryCardsFormStyled>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <CardsWrapper>
          {result &&
            result.map((symptom, idx) => {
              return (
                <Card
                  key={symptom}
                  onClick={() => handleCardClick(symptom)}
                  active={activeId.indexOf(symptom) > -1}
                >
                  {<ChildrenWrapper>{symptom}</ChildrenWrapper>}
                </Card>
              );
            })}
        </CardsWrapper>
      )}
      <ButtonWrapper>
        <Button
          label={`저장 후 다음 단계로 이동(${page}/4)`}
          size={BUTTON_SIZE.MEDIUM}
          theme={BUTTON_THEME.DEFAULT}
          shape={BUTTON_SHAPE.ROUNDED}
          disabled={!canNext}
          onClick={handleNextButton}
        />
      </ButtonWrapper>
    </HistoryCardsFormStyled>
  );
}

const HistoryCardsFormStyled = styled.div``;
const ChildrenWrapper = styled.div``;
const CardsWrapper = styled.div``;
const ButtonWrapper = styled.div``;
