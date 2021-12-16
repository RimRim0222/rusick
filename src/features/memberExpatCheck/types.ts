import { NATION_TYPE } from '@src/components/cards';

interface IUserExpatInfo {
  type: NATION_TYPE;
  id: string;
  active: boolean;
}
export interface ICardReducerState {
  LOCAL: IUserExpatInfo;
  EXPAT: IUserExpatInfo;
}
