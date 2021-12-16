import React from 'react';
export enum TAG_SIZE {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

export enum TAG_THEME {
  DEFAULT = 'DEFAULT',
  ROUNDED = 'ROUNDED',
  HASH = 'HASH',
  SQUARE = 'SQUARE',
}

export interface ITag {
  /**
   * tag label
   */
  label: string;
  /**
   * tag theme styled
   */
  theme: TAG_THEME;
  /**
   * font color style
   */
  color: string;
  /**
   *  background color style
   */

  backgroundColor: string;
  /**
   * tag can be closed
   */
  closable: true | false;
  /**
   * onClick event handler
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
