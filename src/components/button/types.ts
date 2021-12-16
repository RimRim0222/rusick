export enum BUTTON_THEME {
  DEFAULT = 'DEFAULT',
  OUTLINE = 'OUTLINE',
  OUTLINE_GRAY = 'OUTLINE_GRAY',
  DOWNLOAD = 'DOWNLOAD',
  GHOST_DEFAULT = 'GHOST_DEFAULT',
  GHOST_BLACK = 'GHOST_BLACK',
}

export enum BUTTON_SIZE {
  XSSMALL = 'XSSMALL',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export enum BUTTON_ICON_THEME {
  DEFAULT = 'DEFAULT',
  OUTLINE = 'OUTLINE',
}

export enum BUTTON_ICON_SIZE {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export enum BUTTON_SHAPE {
  SQUARED = 'SQUARED',
  ROUNDED = 'ROUNDED',
}

export enum BUTTON_DISPLAY_TYPE {
  AUTO = 'AUTO',
  FULL = 'FULL',
}

export interface IButton {
  /**
   * Button Theme
   */
  theme: BUTTON_THEME;
  /**
   * Button shape for using Button Component
   */
  shape: BUTTON_SHAPE;
  /**
   * Button Size
   */
  size: BUTTON_SIZE;
  /**
   * displayType
   */
  displayType: BUTTON_DISPLAY_TYPE;
  /**
   * Button Contents
   */
  label: string;
  /**
   * font bold
   */
  isBold: boolean;
  /**
   * disabled
   */
  disabled?: boolean;
  /**
   * Optional Click handler
   */
  onClick: () => void;
}

export interface IButtonIcon {
  /**
   * Button Theme
   */
  theme: BUTTON_ICON_THEME;
  /**
   * Button shape for using Button Component
   */
  shape: BUTTON_SHAPE;
  /**
   * Set the size of button
   */
  size: BUTTON_ICON_SIZE;
  /**
   * Button Contents
   */
  lebal: string;
  /**
   * font bold
   */
  isBold: boolean;
  /**
   * iconNonActive
   */
  iconNonActive: string;
  /**
   * iconActive
   */
  iconActive: string;
  /**
   * icon location
   */
  isRightIcon?: boolean;
  /**
   * has active
   */
  disabled?: boolean;
  /**
   * Set the handler to handle click event
   */
  onClick: () => void;
}

export interface IButtonImagePreview {
  /**
   * component id
   */
  id: string;
  /**
   * set default image url
   */
  defaultImage: string;
  /**
   * reder change image file
   */
  onChange?: ({ id, file }: { id: string; file: File | null }) => void;
  /**
   * readonly
   */
  disabled: boolean;
}
