import { useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { pushListData, pushSingleData } from './push.data';
import { IPushList, IPushSingle } from './types';

interface Istate {
  list: IPushList[];
  single: IPushSingle[];
}
interface IAction {
  type: 'list' | 'single';
  id: string;
}

function reducer(state: Istate, action: IAction) {
  const data = state[action.type].map((obj) =>
    obj.id === action.id ? { ...obj, toggle: !obj.toggle } : obj,
  );

  return { ...state, [action.type]: data };
}

export function usePushSetting() {
  const { t, i18n } = useTranslation();
  const initialize = {
    list: [...pushListData].map((item) => ({ ...item, text: t([item.textId]) })),
    single: [...pushSingleData].map((item) => ({
      ...item,
      label: t([item.labelId]),
      text: t([item.textId]),
    })),
  };
  const [toggleData, dispatch] = useReducer(reducer, initialize);

  const onToggleList = (id: string): void => {
    dispatch({ type: 'list', id });
  };

  const onToggleSingle = (id: string): void => {
    dispatch({ type: 'single', id });
  };

  return {
    pushList: toggleData.list,
    pushSingle: toggleData.single,
    onToggleList,
    onToggleSingle,
  };
}
