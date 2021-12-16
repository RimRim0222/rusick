import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mock } from '@src/api/Mock';
import { CARD_TAGS } from '@src/components/cards';
import { SymptomTag } from '@src/components/cards/SymptomTag';

export function SymptomSearchListItems({ item }: { item: any }) {
  const { idx, id, symptom, image, tag } = item;

  return (
    <SymptomSearchListItemsStyled>
      <SymptomNameStyled>{symptom}</SymptomNameStyled>
      <TagWrapper>
        <SymptomTag type={tag === 'DISEASE' ? CARD_TAGS.DISEASE : CARD_TAGS.SYMPTOM} />
      </TagWrapper>
    </SymptomSearchListItemsStyled>
  );
}

const SymptomSearchListItemsStyled = styled.div`
  ${(props) =>
    css`
      border: 1px solid ${props.theme.colors.border_stroke};
    `};
  padding: 5px;
`;

const SymptomNameStyled = styled.span`
  display: inline-block;
  width: 80px;
`;
const TagWrapper = styled.span`
  padding: 10px;
`;
