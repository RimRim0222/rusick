export enum INPUT_TYPE {
  TEXT = 'text',
  PW = 'password',
}

export enum INPUT_THEME {
  DEFAULT = 'DEFAULT',
  ROUNDED = 'ROUNDED',
  NONROUNDED = 'NONROUNDED',
}

export enum INPUT_SIZE {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

export interface IInput {
  /**
   * INPUT TYPE
   */
  type: INPUT_TYPE;
  /**
   * INPUT Name
   */
  name?: string;
  /**
   * INPUT Size?
   */
  size: INPUT_SIZE;
  /**
   * INPUT theme
   */
  theme: INPUT_THEME;
  /**
   * INPUT theme
   */
  inputValue: string;
  /**
   * Display isRequired
   */
  isRequired: boolean;
  /**
   * error check
   */
  isError: boolean;
  /**
   * disabled
   */
  disabled?: boolean;
  /**
   * allowClear
   */
  allowClear?: boolean;
  /**
   * placeholder
   */
  placeholder?: string;
  /**
   * maxLength
   */
  maxLength?: number;
  /**
   * password value display
   */
  passwordShown?: boolean;
  /**
   * readOnly
   */
  readOnly?: boolean;
  /**
   * suffixIcon Item
   */
  suffixIcon?: string;
  /**
   * prefixIcon Item
   */
  prefixIcon?: string;
  /**
   * Optional change handler
   */
  onChange?: (value: string) => void;

  /**
   * Optional Suffix icon click handler
   */
  onClickSuffix?: () => void;
}
