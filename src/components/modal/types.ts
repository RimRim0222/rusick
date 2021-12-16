export interface IAlert {
  message: string | string[];
  useInput: boolean;
  isSingleBtn: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface ILayerLayout {
  isOpen: boolean;
  level: number;
  children: JSX.Element | JSX.Element[] | null;
}
