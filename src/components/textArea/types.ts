export enum TEXTAREA_THEME {
  ROUNDED = 'ROUNDED',
  NONROUNDED = 'NONROUNDED',
}

export interface ITextArea {
  /**
   * TextArea theme
   */
  theme: TEXTAREA_THEME;
  /**
   * TextArea Value
   */
  inputValue: string;
  /**
   * The number of visible text lines for the control
   */
  row: number;
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
   * readOnly
   */
  readOnly?: boolean;
  /**
   * Optional change handler
   */
  onChange?: (value: string) => void;
}
