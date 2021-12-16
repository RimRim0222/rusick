import { atom } from 'recoil';

interface IPopupState {
  id: string;
  isOpen: boolean;
  isLabel: boolean;
  label?: string;
  children: JSX.Element | null;
}

export const initPopupState: IPopupState = {
  id: '',
  isOpen: false,
  isLabel: false,
  children: null,
};

export const PopupState = atom({
  key: 'PopupState',
  default: initPopupState,
});
