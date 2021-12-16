import styled from '@emotion/styled';
import { initPopupState, PopupState } from '@src/store/PopupState';
import ReactModal from 'react-modal';
import { useRecoilState } from 'recoil';
import { Icon, ICON_LIST } from '@src/components/icon';

export function Popup() {
  const [popupState, setPopupState] = useRecoilState(PopupState);
  const { id, isOpen, isLabel, label, children } = popupState;

  const onCloseHandler = () => {
    setPopupState(initPopupState);
  };

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <PopupWrapper>
        <HeaderWrapper>
          {isLabel && <>{label}</>}
          <IconWrapper onClick={onCloseHandler}>
            <Icon icon={ICON_LIST.x_60x60} />
          </IconWrapper>
        </HeaderWrapper>
        <ContentsWrapper>{children}</ContentsWrapper>
      </PopupWrapper>
    </ReactModal>
  );
}

Popup.defaultProps = {
  isOpen: false,
  isLabel: false,
};

const PopupWrapper = styled.div``;

const HeaderWrapper = styled.div`
  text-align: center;
`;
const ContentsWrapper = styled.div``;

const IconWrapper = styled.span`
  float: right;
`;

const customStyles = {
  overlay: {
    overflow: 'auto',
    zIndex: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'block',
  },
  content: {
    top: '20%',
    left: '0',
    right: '0',
    bottom: '0',
    borderRadius: '14px 14px 0 0',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.16)',
    background: 'white',
    width: '100%',
    height: '80%',
  },
};
