import { ILNG, LNG_KEY } from '@src/i18n';

export type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined ? { type: Key } : { type: Key; payload: M[Key] };
};

export interface IValidOption<T> {
  value: T;
  label?: ILNG | null;
  showMessage?: ILNG | null;
  validation?: (value: T) => ILNG | null;
  isRequired?: boolean;
  isDirty?: boolean;
  isError?: boolean;
  defaultError?: ILNG | null;
  defaultSuccess?: ILNG | null;
}
