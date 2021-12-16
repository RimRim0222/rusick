import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { CARD_TAGS } from './types';
import { useTranslation } from 'react-i18next';
import { LNG_KEY } from '@src/i18n';
import { Tag, TAG_THEME } from '@src/components/tag';

interface PropTypes {
  type: CARD_TAGS;
}

export function SymptomTag({ type }: PropTypes) {
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = theme.colors;

  switch (type) {
    case CARD_TAGS.DISEASE:
      return (
        <Tag
          backgroundColor={colors.point_orange}
          color={colors.point_orange}
          label={t(LNG_KEY.CHRONIC_DISEASE)}
          theme={TAG_THEME.ROUNDED}
        />
      );

    case CARD_TAGS.SYMPTOM:
      return (
        <Tag
          backgroundColor={colors.maincolor_blue}
          color={colors.maincolor_blue}
          label={t(LNG_KEY.SYMPTOM)}
          theme={TAG_THEME.ROUNDED}
        />
      );
    default:
      return null;
  }
}

const SymptomTagStyled = styled.div``;
