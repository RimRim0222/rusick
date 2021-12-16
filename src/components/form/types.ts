import { ActionMap, IValidOption } from '@src/utils/type';

export enum FORM_LAYOUT_THEME {
  LABEL_HORIZONTAL = 'LABEL_HORIZONTAL',
  LABEL_VERTICAL = 'LABEL_VERTICAL',
}

type FormItem<T> = Omit<IValidOption<T>, 'value'>;

export interface IFormItem<T> extends FormItem<T> {
  /**
   * Form layout theme
   */
  formTheme: FORM_LAYOUT_THEME;
  /**
   * input layout theme
   */
  border: boolean;
  /**
   * RequireItem display?
   */
  isRequiredDisplay: boolean;
  /**
   * showMessage dispaly?
   */
  isMessageDisplay: boolean;
  /**
   * Jsx.element item
   */
  children: JSX.Element | JSX.Element[];
}

export interface IReducerState {
  inputValue: IValidOption<string>;
}

export enum Form {
  INPUT_VALUE = 'INPUT_VALUE',
}

export type ActionPayload = {
  [Form.INPUT_VALUE]: string;
};

export type IFormAction = ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];
