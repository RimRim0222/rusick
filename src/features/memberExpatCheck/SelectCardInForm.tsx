import styled from '@emotion/styled';
import { LNG_KEY } from '@src/i18n';
import { useTranslation } from 'react-i18next';
import { Button, BUTTON_DISPLAY_TYPE, BUTTON_SIZE } from '@components/button';
import { useSelectCard } from './useSelectCard';
import { ExpatCard, NATION_TYPE } from '@src/components/cards';
import { isNil } from 'lodash';

export function SelectCardInForm() {
  const { t } = useTranslation();
  const { activeId, handleAuthSubmit, handleCardOnClick } = useSelectCard();
  return (
    <SelectCardInFormStyled>
      {CARD_DATA.map((card) => {
        const isActive = card.id === activeId;
        return (
          <CardWrapper key={card.id}>
            <ExpatCard
              type={card.type}
              id={card.id}
              active={isActive}
              onClick={handleCardOnClick}
            />
          </CardWrapper>
        );
      })}
      <Button
        label={t(LNG_KEY.BTN_USER_VERIFY_CONTINUE)}
        size={BUTTON_SIZE.MEDIUM}
        displayType={BUTTON_DISPLAY_TYPE.FULL}
        disabled={isNil(activeId)}
        onClick={handleAuthSubmit}
      />
    </SelectCardInFormStyled>
  );
}

const SelectCardInFormStyled = styled.div``;
const CardWrapper = styled.div`
  margin-bottom: 10px;
`;

const CARD_DATA = [
  {
    type: NATION_TYPE.LOCAL,
    id: 'LOCAL',
  },
  {
    type: NATION_TYPE.EXPAT,
    id: 'EXPAT',
  },
];
