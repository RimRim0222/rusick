import styled from '@emotion/styled';
import { Button, BUTTON_SIZE, BUTTON_THEME, BUTTON_DISPLAY_TYPE } from '@components/button';
import { Input, INPUT_TYPE, INPUT_SIZE, INPUT_THEME } from '@components/input';
import ReactModal from 'react-modal';
import { useAlert } from './useAlert';
import { useTranslation } from 'react-i18next';
import AlertText from './text';
import { Translate } from '@src/features/i18n/Translate';
import { Autoplay } from 'swiper';

export function Alert() {
  const {
    message,
    isOpen,
    inputValue,
    useInput,
    isSingleBtn,
    handleConfirm,
    handleCancel,
    handleInputChange,
  } = useAlert();

  const { t } = useTranslation();

  const isMultiLineMessage = Array.isArray(message);

  const singleButtonSize = isSingleBtn ? BUTTON_SIZE.SMALL : BUTTON_SIZE.SMALL;
  const singleButtonLabel = isSingleBtn ? AlertText.check : AlertText.yes;

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <AlertContainer useInput={useInput}>
        <TextWrapper>
          {!isMultiLineMessage && t(message)}
          {isMultiLineMessage && message.map((str) => <div key={str}>{t(str)}</div>)}
        </TextWrapper>
        {useInput && (
          <Input
            type={INPUT_TYPE.TEXT}
            theme={INPUT_THEME.ROUNDED}
            size={INPUT_SIZE.MEDIUM}
            inputValue={inputValue}
            maxLength={100}
            onChange={handleInputChange}
            placeholder={'email@naver.com'}
          />
        )}
        <BtnBorder />
        <ButtonWrapper>
          <Button
            label={t(singleButtonLabel)}
            size={singleButtonSize}
            theme={BUTTON_THEME.GHOST_DEFAULT}
            displayType={BUTTON_DISPLAY_TYPE.FULL}
            onClick={handleConfirm}
          />

          {!isSingleBtn && (
            <>
              <BtnPartition />
              <Button
                label={t(AlertText.no)}
                size={BUTTON_SIZE.SMALL}
                theme={BUTTON_THEME.GHOST_BLACK}
                displayType={BUTTON_DISPLAY_TYPE.FULL}
                onClick={handleCancel}
              />
            </>
          )}
        </ButtonWrapper>
      </AlertContainer>
    </ReactModal>
  );
}

const AlertContainer = styled.div<{ useInput: boolean | undefined }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding-top: ${(props) => (props.useInput ? '0' : '45px')};
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BtnBorder = styled.div`
  position: absolute;
  left: 0px;
  height: 0px;
  width: 100%;
  top: 75%;
  border-top: 1px solid #d8d8d8;
`;
const BtnPartition = styled.div`
  position: absolute;
  height: 16.4%;
  left: 50%;
  bottom: 0%;
  border-left: 1px solid #d8d8d8;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${(props) => props.theme.fonts.h0_B};
`;

const customStyles = {
  overlay: {
    overflow: 'auto',
    zIndex: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'block',
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px 20px 0 20px',
    border: '0 none',
    borderRadius: '14px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.16)',
    background: 'white',
    width: '270px',
    height: '170px',
  },
};

const ModalInnerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div {
    position: relative;
    width: 322px;
    border-radius: 8px;
    background-color: #fff;
    /* box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.1); */
  }
  &::before,
  &::after {
    flex: 10 10;
    display: inline-block;
    width: 100%;
    height: 30px;
    content: '';
  }
`;

const AlertcontentWrapper = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #212529;
  text-align: center;
`;

const ModalButtonWrapper = styled.div`
  padding-top: 24px;
  font-size: 0;
  text-align: center;
  button + button {
    margin-left: 8px;
  }
`;
