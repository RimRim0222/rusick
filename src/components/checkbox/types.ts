export interface ICheckbox {
  /**
   * default checkbox is checked?
   */
  isChecked: boolean;
  /**
   * checkbox label span right
   */
  label?: string;
  /**
   * checkbox is able?
   */
  disabled: boolean;
  /**
   * checkbox value
   */
  id: string;
  /**
   * click checkbox toggle
   */
  onClick: (value: string) => void;

  suffixIcon?: string;
  onClickSuffix?: () => void;
}

export interface IValue {
  checkValue: boolean;
}

export interface ICheckList {
  id: string;
  text: string;
  isRequired: boolean;
}

export interface IMasterCheckbox {
  /**
   * 체크 리스트에 들어갈 배열
   */
  options: ICheckList[];
  /**
   * 모두체크 체크박스 옆에 들어갈 라벨
   */
  allCheckLabel: string;
  /**
   * 필수값이 모두 체크되면 체크되어있는 객체의 value를 리턴
   * (필수가 아닌 항목은 체크가 없을수도 있음.)
   */
  onCheckIds: (value: string[]) => void;
  onClickItem: (id: string) => void;
}
