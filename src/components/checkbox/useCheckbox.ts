import { useMemo, useState, useReducer, useEffect } from 'react';
import { ICheckList } from './types';

interface ICheckItem extends ICheckList {
  check: boolean;
}
type Action =
  | { type: 'ALLCHECK'; check: boolean }
  | { type: 'ONECHECK'; id: string }
  | { type: 'RESET'; initState: ICheckItem[] };

function reducer(state: ICheckItem[], action: Action): ICheckItem[] {
  switch (action.type) {
    case 'ALLCHECK':
      return state.map((obj) => ({ ...obj, check: action.check }));

    case 'ONECHECK':
      return state.map((obj) => (obj.id === action.id ? { ...obj, check: !obj.check } : obj));

    case 'RESET':
      return [...action.initState];

    default:
      throw new Error();
  }
}

export function useCheckbox(options: ICheckList[]) {
  const initialize = options.map((val, idx) => ({ ...val, check: false }));
  const [checkList, dispatch] = useReducer(reducer, initialize);
  const [allChecked, setAllChecked] = useState(false);
  const requiredSize = options.filter((obj) => obj.isRequired).length;

  //필수값 체크
  const requredCheck = useMemo(() => {
    const reqChecked = checkList.filter((obj) => obj.isRequired && obj.check);
    if (reqChecked.length >= requiredSize) {
      return reqChecked.map((obj) => obj.id);
    } else {
      return [];
    }
  }, [checkList]);

  const onCheckAll = (): void => {
    dispatch({
      type: 'ALLCHECK',
      check: !allChecked,
    });
  };

  const onCheckItem = (id: string): void => {
    dispatch({
      type: 'ONECHECK',
      id: id,
    });
  };

  const onReset = () => {
    dispatch({
      type: 'RESET',
      initState: initialize,
    });
  };

  useEffect(() => {
    const allCheckFilter = checkList.filter((obj) => obj.check);
    if (allCheckFilter.length === checkList.length) setAllChecked(true);
    else setAllChecked(false);
  }, [checkList]);

  useEffect(() => {
    onReset();
  }, [options]);

  return {
    checkList,
    requredCheck,
    allChecked,
    onCheckAll,
    onCheckItem,
  };
}
