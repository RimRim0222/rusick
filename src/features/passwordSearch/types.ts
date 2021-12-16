import { ActionMap, IValidOption } from '@src/utils/type';

export interface IReducerState {
  email: IValidOption<string>;
}

export enum PasswordSearchForm {
  EAMIL = 'EAMIL',
}

export type ActionPayload = {
  [PasswordSearchForm.EAMIL]: string;
};

export type IPasswordSearchAction = ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];
