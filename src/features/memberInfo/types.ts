import { ActionMap, IValidOption } from '@src/utils/type';
import { IAddress } from '@components/postCode/types';
import { MEMBER_TYPE } from '@store/LoginState';

export interface IMemeberInfo {
  memberType: MEMBER_TYPE;
  memberName: string;
  memberPw: string;
  memberPhone: string;
  memberEmail: string;
  memberAddress: string;
}
export interface IMemeberPost {
  memberType: MEMBER_TYPE;
  onChangeAddress: () => void;
  onAddress: (val: IAddress, step: string) => void;
  address: string;
  // layerAddressState: boolean;
}
export interface IMemberPassword {
  onChangePassword: () => void;
}

export interface IMemberInfoReducerState {
  // memberType: MEMBER_TYPE;
  memberName: IValidOption<string>;
  // memberPw: IValidOption<string>;
  // memberPhone: IValidOption<string>;
  // memberEmail: IValidOption<string>;
}

export enum MemberInfoForm {
  MEMBER_TYPE = 'MEMBER_TYPE',
  MEMBER_NAME = 'MEMBER_NAME',
  MEMBER_PW = 'MEMBER_PW',
  MEMBER_PHONE = 'MEMBER_PHONE',
  MEMBER_EMAIL = 'MEMBER_EMAIL',
  MEMBER_ADDRESS = 'MEMBER_ADDRESS',
}

export type ActionPayload = {
  [MemberInfoForm.MEMBER_NAME]: string;
};

export type IMemberInfoFormAction = ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];
