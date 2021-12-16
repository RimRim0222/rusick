import { LNG_KEY } from '@src/i18n';
import isEmpty from 'lodash/isEmpty';

import { IValidOption } from './type';

const requiredText = LNG_KEY.FORM_01;

export const checkObject = <T>(obj: IValidOption<T>, newValue: T): IValidOption<T> => {
  const { value, validation, isRequired, defaultError, defaultSuccess } = obj;

  if (isRequired && isEmpty(newValue)) {
    return {
      ...obj,
      value: newValue,
      isError: true,
      showMessage: defaultError ? defaultError : requiredText,
    };
  }

  if (validation && typeof validation === 'function') {
    const errorText = validation(newValue);
    if (!isEmpty(errorText)) {
      return {
        ...obj,
        value: newValue,
        isError: true,
        showMessage: errorText,
      };
    }
  }

  return {
    ...obj,
    value: newValue,
    isError: false,
    isDirty: true,
    showMessage: defaultSuccess,
  };
};

export const checkFormError = <T>(obj: T) => Object.values(obj).some((data) => data.isError);

export const checkFormNext = <T>(obj: T) =>
  !Object.values(obj).some((data) => {
    const { value, isRequired, validation } = data;
    if (isRequired && isEmpty(value)) {
      return true;
    }
    if (validation && typeof validation === 'function') {
      return !!validation(value);
    }
    return false;
  });
