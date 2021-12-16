import { ActionMap, IValidOption } from '@src/utils/type';

export interface IReducerState {
  password: IValidOption<string>;
  passwordCheck: IValidOption<string>;
}

export enum PasswordForm {
  PW = 'PW',
  PW_CHECK = 'PW_CHECK',
  SET_ERROR = 'SETERROR',
}

export type ActionPayload = {
  [PasswordForm.PW]: string;
  [PasswordForm.PW_CHECK]: string;
  [PasswordForm.SET_ERROR]: PasswordForm;
};

export type IPasswordChangeFormAction = ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];
