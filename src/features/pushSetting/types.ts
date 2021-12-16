export interface IPushListType {
  id: string;
  textId: string;
  toggle: boolean;
}

export interface IPushSingleType {
  id: string;
  labelId: string;
  agreeDate: string;
  textId: string;
  toggle: boolean;
}

export interface IPushList {
  id: string;
  text: string;
  toggle: boolean;
}

export interface IPushSingle {
  id: string;
  label: string;
  agreeDate: string;
  text: string;
  toggle: boolean;
}
