import { ActionMap, IValidOption } from '@src/utils/type';

export interface IMemberExpatAuth {
  countryCode: string;
  phone: string;
  email: string;
  memberName: string;
  authCode: string;
}

export interface IMemberExpatAuthReducerState {
  countryCode: IValidOption<string>;
  phone: IValidOption<string>;
  email: IValidOption<string>;
  memberName: IValidOption<string>;
  authCode: IValidOption<string>;
}

export enum MemberExpatAuthForm {
  COUNTRY_CODE = 'COUNTRY_CODE',
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
  MEMBER_NAME = 'MEMBER_NAME',
  AUTH_CODE = 'AUTH_CODE',
}

type ActionPayload = {
  [MemberExpatAuthForm.COUNTRY_CODE]: string;
  [MemberExpatAuthForm.PHONE]: string;
  [MemberExpatAuthForm.EMAIL]: string;
  [MemberExpatAuthForm.MEMBER_NAME]: string;
  [MemberExpatAuthForm.AUTH_CODE]: string;
};

export type IMemberExpatAuthAction = ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];
