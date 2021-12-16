import { ActionMap } from '@src/utils/type';

//type for BasicFormReduce
export interface IBasicFormReducerState {
  name: string;
  relation: string;
  profileImage: string;
  sexuality: string;
  birthDate: string;
  height: string;
  weight: string;
  bloodType: string;
}

export enum BasicForm {
  BASIC_INFO_INIT = 'BASIC_INFO_INIT',
  BASIC_INFO_NAME = 'BASIC_INFO_NAME',
  BASIC_INFO_RELATION = 'BASIC_INFO_RELATION',
  BASIC_INFO_IMAGE = 'BASIC_INFO_IMAGE',
  BASIC_INFO_SEX = 'BASIC_INFO_SEX',
  BASIC_INFO_BIRTH = 'BASIC_INFO_BIRTH',
  BASIC_INFO_HEIGHT = 'BASIC_INFO_HEIGHT',
  BASIC_INFO_WEIGHT = 'BASIC_INFO_WEIGHT',
  BASIC_INFO_BLOOD = 'BASIC_INFO_BLOOD',
}

export type BasicFormActionPayload = {
  [BasicForm.BASIC_INFO_INIT]: IBasicFormReducerState;
  [BasicForm.BASIC_INFO_NAME]: string;
  [BasicForm.BASIC_INFO_RELATION]: string;
  [BasicForm.BASIC_INFO_IMAGE]: string;
  [BasicForm.BASIC_INFO_SEX]: string;
  [BasicForm.BASIC_INFO_BIRTH]: string;
  [BasicForm.BASIC_INFO_HEIGHT]: string;
  [BasicForm.BASIC_INFO_WEIGHT]: string;
  [BasicForm.BASIC_INFO_BLOOD]: string;
};

export type IBasicFormAction =
  ActionMap<BasicFormActionPayload>[keyof ActionMap<BasicFormActionPayload>];

//type for setBirthDate
export interface IBirthDateState {
  year: null | string;
  month: null | string;
  day: null | string;
}
