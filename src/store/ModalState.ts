import { atom, selector } from 'recoil';
import { JsxEmit } from 'typescript';

interface IModalState {
  id: string;
  isOpen: boolean;
}

const initModalState: IModalState = {
  id: '',
  isOpen: false,
};

export const ModalState = atom({
  key: 'ModalState',
  default: initModalState,
});
