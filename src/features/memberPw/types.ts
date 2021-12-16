import { ActionMap, IValidOption } from '@src/utils/type';

export interface IMemberPwReducerState {
  password: IValidOption<string>;
  passwordCheck: IValidOption<string>;
}

export enum MemberPwForm {
  PW = 'PW',
  PW_CHECK = 'PW_CHECK',
  SET_ERROR = 'SETERROR',
}

export type ActionPayload = {
  [MemberPwForm.PW]: string;
  [MemberPwForm.PW_CHECK]: string;
  [MemberPwForm.SET_ERROR]: MemberPwForm;
};

export type IMemberPwFormAction = ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];
