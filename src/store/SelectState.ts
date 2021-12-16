import { atom, selectorFamily } from 'recoil';

export interface IOptionContents {
  id: string;
  text: string;
}

export interface ISelectState {
  id: string;
  isOpen: boolean;
  type: 'single' | 'multiple';
  layerSplit: '1' | '2' | '3';
  label: string;
  contents: IOptionContents[];
  selectId: string[];
  onClick?: (id: string) => void;
}

//text select state

export const initSelectState: ISelectState[] = [
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

export const SelectState = atom<ISelectState[]>({
  key: 'SelectState',
  default: initSelectState,
});

export const getSelectState = selectorFamily<ISelectState, string>({
  key: 'getSelectState',
  get:
    (id) =>
    ({ get }) => {
      const data: ISelectState[] = get(SelectState);
      const find = data.find((obj) => obj.id === id);
      if (find) {
        return find;
      } else {
        return data[0];
      }
    },
});

export const SelectFormValue = selectorFamily<IOptionContents, string>({
  key: 'SelectFormValue',
  get:
    (id) =>
    ({ get }) => {
      const getData = get(SelectState);
      const data = getData.find((obj) => obj.id === id);
      if (data) {
        const sid = data.contents.find((obj) => obj.id === data.selectId[0]);
        if (sid) {
          return sid;
        }
      }
      return { id: '', text: '' };
    },
});
