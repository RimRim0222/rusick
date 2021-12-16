import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { SettingListCard } from './SettingListCard';
import { SettingSingleCard } from './SettingSingleCard';

export function PushSetting() {
  const { t, i18n } = useTranslation();
  const title = t('PUSH_TITLE');
  return (
    <PushSettingStyled>
      <p>{title}</p>
      <SwitchWrapper>
        <SettingListCard />
        <SettingSingleCard />
      </SwitchWrapper>
    </PushSettingStyled>
  );
}

const PushSettingStyled = styled.div`
  p {
    ${(props) => props.theme.fonts.h3_B}
    padding: 10px 0;
  }
`;
const SwitchWrapper = styled.div``;
