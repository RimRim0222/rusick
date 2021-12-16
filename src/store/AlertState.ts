import { atom } from 'recoil';

interface IAlertState {
  id: string;
  isOpen: boolean;
  message: string | string[];
  isSingleBtn?: boolean;
  useInput?: boolean;
  inputValue: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const initAlertState: IAlertState = {
  id: '',
  isOpen: false,
  message: '',
  inputValue: '',
};

export const AlertState = atom({
  key: 'AlertState',
  default: initAlertState,
});
