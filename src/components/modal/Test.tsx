import styled from '@emotion/styled';

import { useSetRecoilState, useRecoilState } from 'recoil';
import { Button } from '@components/button';
import { ModalState } from '@src/store/ModalState';
import { AlertState } from '@src/store/AlertState';
import { IAlert } from './types';
import { useLayer } from './useLayer';

import { useNavigate } from 'react-router-dom';
import { PopupState } from '@src/store/PopupState';

export function Test({ message, useInput, isSingleBtn }: IAlert) {
  const setModalState = useSetRecoilState(ModalState);
  const [alertState, setAlertState] = useRecoilState(AlertState);
  const { onOpenLayer } = useLayer();
  const [popupState, setPopupState] = useRecoilState(PopupState);

  const { inputValue } = alertState;

  const navigate = useNavigate();

  const handleAlert = () => {
    setAlertState((prevState) => {
      return { ...prevState, isOpen: true, message, useInput, isSingleBtn };
    });
  };

  const handleModal = () => {
    setModalState((prevState) => {
      return { ...prevState, isOpen: true };
    });
  };

  const onLayerHandler = (level: number) => {
    onOpenLayer({
      level: level,
      contents: {
        id: `layer${level}`,
        isOpen: true,
        title: `layer${level}`,
        usePrev: true,
        useClose: true,
        contents: <div style={{ textAlign: 'center' }}>컨텐츠 영역</div>,
      },
    });
  };

  const onPopupHandler = () => {
    setPopupState({
      id: 'popup1',
      isOpen: true,
      isLabel: true,
      label: 'popup title',
      children: <div>컨텐츠 영역</div>,
    });
  };

  return (
    <>
      <Button label={'open Modal'} onClick={handleModal} />
      <Button label={'open Alert'} onClick={handleAlert} />
      <Button label={'open Layer1'} onClick={() => onLayerHandler(1)} />
      <Button label={'open Layer2'} onClick={() => onLayerHandler(2)} />
      <Button label={'open Layer3'} onClick={() => onLayerHandler(3)} />
      <Button label={'open popup'} onClick={onPopupHandler} />
      <TempDisplayEmail>email : {inputValue}</TempDisplayEmail>
    </>
  );
}

const TempDisplayEmail = styled.div``;
