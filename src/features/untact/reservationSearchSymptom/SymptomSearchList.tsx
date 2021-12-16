import { css } from '@emotion/react';

import styled from '@emotion/styled';
import { LNG_KEY } from '@src/i18n';
import { useTranslation } from 'react-i18next';
import { SymptomSearchListItems } from './SymptomSearchListItems';
import {
  ISymptomList,
  SymptomListQueryParam,
  symptomListQueryRefresh,
  SymptomListState,
} from '@src/store/SymptomState';
import { useLoadableRefresh } from '@src/features/tester/useLoadable';
import { CARD_TAGS } from '@src/components/cards';

export function SymptomSearchList() {
  const { t } = useTranslation();

  const { handleParams, result, isLoading, isError } = useLoadableRefresh<ISymptomList[]>(
    SymptomListQueryParam,
    SymptomListState,
    [],
    symptomListQueryRefresh,
  );

  const symptomList = result.filter((obj) => obj.tag === CARD_TAGS.SYMPTOM);
  const diseaseList = result.filter((obj) => obj.tag === CARD_TAGS.DISEASE);

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <SymptomSearchListStyled>
            <SubTitleStyles>{t(LNG_KEY.SYMPTOM)}</SubTitleStyles>
            {symptomList.map((item, idx) => (
              <SymptomSearchListItems key={idx} item={item} />
            ))}
          </SymptomSearchListStyled>
          <SymptomSearchListStyled>
            <SubTitleStyles>{t(LNG_KEY.DISEASE)}</SubTitleStyles>
            {diseaseList.map((item, idx) => (
              <SymptomSearchListItems key={idx} item={item} />
            ))}
          </SymptomSearchListStyled>
        </>
      )}
    </>
  );
}

const SymptomSearchListStyled = styled.div`
  :first-of-type {
    ${(props) => css`
      border-bottom: 1px solid ${props.theme.colors.border_stroke};
    `}
  }
`;

const SubTitleStyles = styled.div``;
