export enum TOGGLE_SIZE {
  W100 = 'W100',
  W80 = 'W80',
  W50 = 'W50',
}

export enum TOGGLE_COLOR {
  DEFAULT = 'DEFAULT',
  RED = 'RED',
}

export interface IToggle {
  /**
   * toggle key
   */
  id: string;
  /**
   * default true or false
   */
  checked: boolean;
  /**
   * onChange event
   */
  onChange: (id: string) => void;
  /**
   * switch block
   */
  disabled: boolean;
  /**
   * size
   */
  size: TOGGLE_SIZE;
  color: TOGGLE_COLOR;
}

export interface ISwitch {
  /**
   * 스타일에 사용할 props
   */
  checked?: boolean;
  size: TOGGLE_SIZE;
  color?: TOGGLE_COLOR;
}

export interface ILabelToggle extends IToggle {
  label: string;
  icon?: string;
}
