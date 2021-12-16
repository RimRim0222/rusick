import styled from '@emotion/styled';
import { Button } from '@src/components/button';
import { LNG_KEY } from '@src/i18n/i18n';
import { AlertState } from '@store/AlertState';
import { ModalState } from '@store/ModalState';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState } from 'recoil';
import { Icon, ICON_LIST } from '@src/components/icon';

export function Navigator() {
  const { t, i18n } = useTranslation();
  const setModalState = useSetRecoilState(ModalState);
  const setAlertState = useSetRecoilState(AlertState);

  const handleModalOpen = () => {
    const id = nanoid();
    setModalState({ id, isOpen: true });
  };

  const handleAlertOpen = () => {
    const id = nanoid();
    setAlertState((prevState) => {
      return {
        ...prevState,
        id,
        isOpen: true,
        onConfirm: () => {
          console.log('test confirm');
        },
        message: [t(LNG_KEY.ALERT_01), t(LNG_KEY.ALERT_01)],
      };
    });
  };

  return (
    <NavigatorStyled>
      {/* <Button label={'Modal'} onClick={handleModalOpen} />
      <Button label={'Alert'} onClick={handleAlertOpen} /> */}
      <NavigatorItemStyled>
        <Icon icon={ICON_LIST['main_home']} width={'40px'} />
      </NavigatorItemStyled>
      <NavigatorItemStyled>
        <Icon icon={ICON_LIST['inform_03']} width={'30px'} />
      </NavigatorItemStyled>
    </NavigatorStyled>
  );
}

const NavigatorStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr 30px;
  padding: 0px 20px;
  height: 50px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border_stroke};
  ${(props) => props.theme.fonts.h2_1_B};
`;

const NavigatorItemStyled = styled.div`
  margin: auto 0px;
`;
