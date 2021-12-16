import { IOptionContents } from '@src/store/SelectState';
import { IOptionIconContents } from '@src/store/SelectIconState';
export enum SELECT_THEME {
  DEFAULT = 'DEFAULT',
  DIALOG = 'DIALOG',
}

export enum SELECT_STYLE_THEME {
  DEFAULT = 'DEFAULT',
  NONELINE = 'NONELINE',
}

export interface ISelect {
  id: string;
  theme: SELECT_THEME;
  styleTheme: SELECT_STYLE_THEME;
  layerSplit: '1' | '2' | '3';
  label: string;
  defaultValue: string;
  placeholder?: string;
  isReadOnly: boolean;
  onSelect: (value: string) => void;
  options: { [key: string]: string }[];
  OptionKeys: {
    id: string;
    text: string;
  };
}

export interface ISelectMulti {
  id: string;
  styleTheme: SELECT_STYLE_THEME;
  layerSplit: '1' | '2' | '3';
  label: string;
  defaultValue?: string;
  isReadOnly: boolean;
  onSelect: (value: string[]) => void;
  options: { [key: string]: string }[];
  OptionKeys: {
    id: string;
    text: string;
  };
}

export interface ISelectOptionData {
  label: string;
  layerSplit: '1' | '2' | '3';
  selectId: string[];
  contents: IOptionContents[];
}

export interface ISelectOptionDial {
  isOpen: boolean;
  optionData: ISelectOptionData;
  onClick: (id: string) => void;
  onClose: () => void;
}

export interface ISelectOptionDefault {
  isOpen: boolean;
  optionData: ISelectOptionData;
  onClick: (optionId: string) => void;
}

//icon select
export interface ISelectIcon {
  id: string;
  theme: SELECT_THEME;
  styleTheme: SELECT_STYLE_THEME;
  layerSplit: '1' | '2' | '3';
  label: string;
  defaultValue: string;
  placeholder?: JSX.Element;
  isReadOnly: boolean;
  onSelect: (value: string) => void;
  options: { id: string; icon: JSX.Element }[];
}

export interface ISelectIconOptionData {
  label: string;
  layerSplit: '1' | '2' | '3';
  selectId: string[];
  contents: IOptionIconContents[];
}
