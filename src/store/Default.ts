import { atom, selector } from 'recoil';

interface DefaultStateProps {
  testArray: string[];
  testNumber: number;
  optional?: boolean;
}

const initOrderState: DefaultStateProps[] = [
  {
    testArray: ['test', 'render'],
    testNumber: 0,
    optional: false,
  },
];

export const defaultState = atom({
  key: 'defaultState',
  default: initOrderState,
});

export const getFirstString = selector({
  key: 'getFirstString',
  get: ({ get }) => {
    const defaultStateValue = get(defaultState);
    // const firstValue = defaultStateValue?.testArray[0] ? '' : ''
    return defaultStateValue[0].testArray[0];
  },
  set: ({ set }, id) => {
    set(defaultState, (prevState) =>
      prevState.map((prev) => (prev.testNumber !== id ? prev : { ...prev, optional: true })),
    );
  },
});

// export const getDefaultState =
