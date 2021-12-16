import { useMemo, useReducer } from 'react';

//single : 한개만 선택 가능
//multiple : 다중 선택 가능
type ActiveType = 'single' | 'multiple';

function reducer(state: string[], action: { type: ActiveType; id: string }) {
  switch (action.type) {
    case 'single':
      return [action.id];

    case 'multiple':
      const copyState = [...state];
      const index = state.indexOf(action.id);

      if (index > -1) {
        //잇으면 삭제
        copyState.splice(index, 1);
      } else {
        //없으면 제거
        copyState.push(action.id);
      }

      return copyState;

    default:
      return [...state];
  }
}

export function useCard(type: ActiveType) {
  const [activeIds, dispatch] = useReducer(reducer, []);

  const onActiveId = (id: string) => {
    dispatch({ type, id });
  };

  const activeId = useMemo(() => {
    switch (type) {
      case 'multiple':
        return activeIds as string[];

      default:
        return activeIds[0] as string;
    }
  }, [activeIds, type]);

  return {
    activeId,
    onActiveId,
  };
}
