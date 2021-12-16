import { LNG_KEY } from '@src/i18n';
import {
  verifyEmail,
  verifyPassword,
  verifyName,
  verifyPostCode,
  verifyAuthCode,
} from '@utils/validityCheck';

export const formEmail = {
  value: '',
  label: LNG_KEY.EMAIL,
  isRequired: true,
  validation: (value: string) => {
    const verifyCheck = verifyEmail(value);
    return verifyCheck ? null : LNG_KEY.VALIDITY_CHECK_EAMIL;
  },
};

export const formEmailCheck = {
  value: true,
  isRequired: true,
  validation: (value: boolean) => {
    return value ? LNG_KEY.EMAIL_DUPLICATE_CHECK_PASS : LNG_KEY.EMAIL_DUPLICATE_CHECK_FAIL;
  },
};

export const formPassword = {
  value: '',
  label: LNG_KEY.LABEL_PW,
  isRequired: true,
  validation: (value: string) => {
    const verifyCheck = verifyPassword(value);
    return verifyCheck ? null : LNG_KEY.USER_PW_TITLE_02;
  },
  defaultSuccess: LNG_KEY.CHECK,
};

export const formPasswordCheck = {
  value: '',
  label: LNG_KEY.LABEL_PW,
  isRequired: true,
  validation: (value: string) => {
    const verifyCheck = verifyPassword(value);
    return verifyCheck ? null : LNG_KEY.VALIDITY_CHECK_PASSWORD_AGREE;
  },
};

export const formName = {
  value: '',
  label: LNG_KEY.USER_NAME,
  isRequired: true,
  validation: (value: string) => {
    const verifyCheck = verifyName(value);
    return verifyCheck ? null : LNG_KEY.VALIDITY_CHECK_USER_NAME;
  },
  defaultSuccess: LNG_KEY.CHECK,
};

export const formPostCode = {
  value: '',
  isRequired: true,
  validation: (value: string) => {
    const verifyCheck = verifyPostCode(value);
    return verifyCheck ? null : LNG_KEY.VALIDITY_CHECK_POST_CODE;
  },
  defaultSuccess: LNG_KEY.CHECK,
};

export const formAddress = {
  value: '',
  isRequired: true,
  validation: (value: string) => {
    const verifyCheck = value.length >= 0;
    return verifyCheck ? null : LNG_KEY.VALIDITY_CHECK_ADDRESS;
  },
  defaultSuccess: LNG_KEY.CHECK,
};

export const formDetailAddress = {
  value: '',
  isRequired: true,
  validation: (value: string) => {
    const verifyCheck = value.length >= 0;
    return verifyCheck ? null : LNG_KEY.VALIDITY_CHECK_ADDRESS_DETAIL;
  },
  defaultSuccess: LNG_KEY.CHECK,
};

export const formAuthCode = {
  value: '',
  label: LNG_KEY.LABEL_AUTH_CODE,
  isRequired: true,
  validation: (value: string) => {
    const verifyCheck = verifyAuthCode(value);
    return verifyCheck ? null : LNG_KEY.VALIDITY_CHECK_AUTH_CODE;
  },
};
