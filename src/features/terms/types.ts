export enum TERMS_ITEM_TYPE {
  TOS = 'testKey1',
  PRIVACY = 'testKey2',
  PRIVACYAGREE = 'testKey3',
  LOCATION = 'testKey4',
  EFT = 'testKey5',
  MARKETING = 'testKey6',
}

export interface TermsProps {
  /**
   * 동의하고 계속진행 버튼, 필수값을 모두 체크한 후 선택 가능
   */
  onClickAgree: () => void;
}

export interface ITermsInfoLayer {
  type: string;
  onClose: () => void;
}

// export interface ITermsText {
//   /**
//    * 다국어 텍스트 타입
//    */
//   [textProp: string]: string;
// }

export interface ITermsList {
  id: string;
  textId: string;
  isRequired: boolean;
}
