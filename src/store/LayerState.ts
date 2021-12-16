import { atom } from 'recoil';

export interface ILayerState {
  id: string;
  isOpen: boolean;
  title: string;
  usePrev: boolean;
  useClose: boolean;
  onClickPrev?: () => void;
  onClickClose?: () => void;
  contents: JSX.Element | JSX.Element[] | null;
}

export const initLayerState: ILayerState = {
  id: '',
  isOpen: false,
  title: '',
  usePrev: false,
  useClose: false,
  contents: null,
};

export const LayerState1 = atom({
  key: 'LayerState1',
  default: initLayerState,
});

export const LayerState2 = atom({
  key: 'LayerState2',
  default: initLayerState,
});

export const LayerState3 = atom({
  key: 'LayerState3',
  default: initLayerState,
});
