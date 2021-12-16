import { ActionMap, IValidOption } from '@src/utils/type';

export interface IReducerState {
  userName: IValidOption<string>;
  phone: IValidOption<string>;
  age: IValidOption<number>;
}

export enum EventForm {
  NAME = 'NAME',
  PHONE = 'PHONE',
  AGE = 'AGE',
}

export type ActionPayload = {
  [EventForm.NAME]: string;
  [EventForm.PHONE]: string;
  [EventForm.AGE]: number;
};

export type IUserFormAction = ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];
