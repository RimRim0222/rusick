import { ActionMap, IValidOption } from '@src/utils/type';

export interface IMemberEmailReducerState {
  email: IValidOption<string>;
}

export enum EmailForm {
  EMAIL = 'EMAIL',
  EMAIL_CHECK = 'EMAIL_CHECK',
}

export type ActionPayload = {
  [EmailForm.EMAIL]: string;
  [EmailForm.EMAIL_CHECK]: boolean;
};

export type IEmailFormAction = ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];
