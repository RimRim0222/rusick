import styled from '@emotion/styled';
import ReactModal from 'react-modal';
import { useRecoilState } from 'recoil';
import { ModalState } from '@store/ModalState';

export function Modal() {
  const [modalData, setModalState] = useRecoilState(ModalState);

  const { id, isOpen } = modalData;

  const handleCloseModal = () => {
    setModalState((prevState) => {
      return { ...prevState, isOpen: false };
    });
  };

  return (
    <ReactModal isOpen={isOpen}>
      <ModalInnerWrapper>
        <ModalCloseButton onClick={handleCloseModal}>닫기</ModalCloseButton>
      </ModalInnerWrapper>
    </ReactModal>
  );
}

const ModalInnerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  > div {
    position: relative;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.1);
  }
  &::before,
  &::after {
    flex: 0 0 30px;
    display: block;
    width: 100%;
    height: 30px;
    content: '';
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  span:last-of-type {
    font-size: 0;
    line-height: 0;
    vertical-align: top;
    text-indent: -9999px;
  }
`;
