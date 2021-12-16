import { ActionMap, IValidOption } from '@src/utils/type';
import { MEMBER_TYPE } from '@store/LoginState';

// export enum USER_TYPE {
//   LOCAL = 'LOCAL',
//   EXPAT = 'EXPAT',
// }

export interface IPostData {
  /**
   * 시/도 단위
   */
  sido: string;
  /**
   * 구 단위
   */
  sigungu: string;
  /**
   * 동 단위
   */
  bname: string;
  /**
   * 도로명 주소
   */
  roadAddress: string;
  /**
   * 지번 주소
   */
  jibunAddress: string;
  /**
   * 건물명
   */
  buildingName: string;
  /**
   * 사용자가 선택한 주소타입 (J: 지번 / R: 도로명)
   */
  userSelectedType: 'J' | 'R';
  /**
   * 우편번호
   */
  zonecode: string;
}

export interface IAddress {
  /**
   * 조합한 주소의 객체
   */
  /**
   * 우편번호
   */
  postCode: string;
  /**
   * 도로명주소
   */
  address: string;
  /**
   * 상세주소(동, 호수)
   */
  detailAddress: string;
}

export interface IPostSearch {
  /**
   * daumpost에서 리턴받은 값 처리
   */
  onSearch: (val: IPostData) => void;
}

export interface IPostDetail {
  /**
   * 선택한 주소
   */
  address: IAddress;
  /**
   * 상세주소 입력 처리
   */
  onDetail: (val: string) => void;
}

export interface IGlobalPostInput {
  /**
   * 텍스트로 전체주소 입력
   */
  onAddress: (val: IAddressInfo) => void;
}

export interface IPostCode {
  /**
   * 사용자 계정이 내국인지 외국인지
   */
  memberType: MEMBER_TYPE;
  /**
   * 조합한 전체 주소를 상위 컴포넌트에 전달
   */
  onAddress: (val: IAddress, step: string) => void;
}

// **************************

export interface IAddressInfo {
  actionStep: 'SEARCH' | 'DETAIL' | 'GLOBALDETAIL' | 'FINAL';
  addressInfo: IAddress;
}

export interface IGlobalPostReducerState {
  postCode: IValidOption<string>;
  address: IValidOption<string>;
  detailAddress: IValidOption<string>;
}
export interface IGlobalPost {
  /**
   * 우편번호
   */
  postCode: string;
  /**
   * 도로명주소
   */
  address: string;
  /**
   * 상세주소(동, 호수)
   */
  detailAddress: string;
}

type IINITPOST = Omit<IGlobalPost, 'detailAddress'>;

export enum GlobalPostForm {
  INIT = 'INIT',
  POST_CODE = 'POST_CODE',
  ADDRESS = 'ADDRESS',
  DETAIL_ADDRESS = 'DETAIL_ADDRESS',
}
export type ActionPayload = {
  [GlobalPostForm.INIT]: IINITPOST;
  [GlobalPostForm.POST_CODE]: string;
  [GlobalPostForm.ADDRESS]: string;
  [GlobalPostForm.DETAIL_ADDRESS]: string;
};

export type IGlobalPostFormAction = ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];
