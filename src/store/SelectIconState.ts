import { atom, selectorFamily } from 'recoil';

export interface IOptionIconContents {
  id: string;
  icon: JSX.Element | null;
}

export interface ISelectIconState {
  id: string;
  isOpen: boolean;
  type: 'single' | 'multiple';
  layerSplit: '1' | '2' | '3';
  label: string;
  contents: IOptionIconContents[];
  selectId: string[];
  onClick?: (id: string) => void;
}

export const initIconSelectState: ISelectIconState[] = [
  {
    id: '',
    isOpen: false,
    type: 'single',
    layerSplit: '1',
    label: '',
    contents: [],
    selectId: [],
  },
];

export const IconSelectState = atom<ISelectIconState[]>({
  key: 'SelectState',
  default: initIconSelectState,
});

export const getIconSelectState = selectorFamily<ISelectIconState, string>({
  key: 'getSelectState',
  get:
    (id) =>
    ({ get }) => {
      const data: ISelectIconState[] = get(IconSelectState);
      const find = data.find((obj) => obj.id === id);
      if (find) {
        return find;
      } else {
        return data[0];
      }
    },
});

export const IconSelectFormValue = selectorFamily<IOptionIconContents, string>({
  key: 'SelectFormValue',
  get:
    (id) =>
    ({ get }) => {
      const getData = get(IconSelectState);
      const data = getData.find((obj) => obj.id === id);
      if (data) {
        const sid = data.contents.find((obj) => obj.id === data.selectId[0]);
        if (sid) {
          return sid;
        }
      }
      return { id: '', icon: null };
    },
});
