import { useRecoilState } from 'recoil';
import { AlertState } from '@store/AlertState';

export function useAlert() {
  const [alertState, setAlertState] = useRecoilState(AlertState);

  const { id, message, isOpen, isSingleBtn, useInput, onConfirm, onCancel, inputValue } =
    alertState;

  const handleCloseAlert = () => {
    setAlertState((prevState) => {
      return { ...prevState, isOpen: false };
    });
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    handleCloseAlert();
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    handleCloseAlert();
  };
  // input form 연결 후 수정
  const handleInputChange = (str: string) => {
    setAlertState((prevState) => {
      return { ...prevState, inputValue: str };
    });
  };

  return {
    message,
    isOpen,
    inputValue,
    useInput,
    isSingleBtn,
    handleCloseAlert,
    handleConfirm,
    handleCancel,
    handleInputChange,
  };
}
