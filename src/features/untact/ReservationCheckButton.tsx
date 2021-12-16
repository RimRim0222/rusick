import styled from '@emotion/styled';
import { Button, BUTTON_DISPLAY_TYPE } from '@src/components/button';
import { ILNG, LNG_KEY } from '@src/i18n';
import { useTranslation } from 'react-i18next';

interface IPropTypes {
  label: ILNG;
  disabled: boolean;
  onClick: () => void;
}

export function ReservationCheckButton({ label, disabled, onClick }: IPropTypes) {
  const { t } = useTranslation();

  return (
    <CheckButtonStyled>
      <Button
        label={t(label)}
        onClick={onClick}
        displayType={BUTTON_DISPLAY_TYPE.FULL}
        disabled={disabled}
      />
    </CheckButtonStyled>
  );
}

ReservationCheckButton.defaultProps = {
  disabled: false,
  label: LNG_KEY.CHECK,
};

const CheckButtonStyled = styled.div``;
