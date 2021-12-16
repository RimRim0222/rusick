import { ActionMap, IValidOption } from '@src/utils/type';
export interface ILoginForm {
  id: string;
}
export interface ILoginSnsForm {
  id: string;
}

export interface ILoginReducerState {
  email: IValidOption<string>;
  password: IValidOption<string>;
}

export enum LoginForm {
  EMAIL = 'EMAIL',
  PASSWORD = 'PASSWORD',
}

export type ActionPayload = {
  [LoginForm.EMAIL]: string;
  [LoginForm.PASSWORD]: string;
};

export type ILoginFormAction = ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];
