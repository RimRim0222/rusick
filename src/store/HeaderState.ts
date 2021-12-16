import { atom } from 'recoil';
import { IHeaderState, HeaderStep } from '@src/layout/header/types';
import { RouteList } from '@src/routes/RouteList';

const initHeaderState: IHeaderState = {
  key: RouteList.MAIN,
  step: HeaderStep.STEP1,
};

export const HeaderParams = atom({
  key: 'HeaderParams',
  default: initHeaderState,
});
