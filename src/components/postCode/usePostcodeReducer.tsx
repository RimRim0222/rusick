import { useReducer } from 'react';
import { IPostData, IAddressInfo } from './types';

type IAction =
  | { type: 'SEARCH'; data: IPostData }
  | { type: 'DETAIL'; data: string }
  | { type: 'GLOBALDETAIL'; data: IAddressInfo };

const initialize: IAddressInfo = {
  actionStep: 'SEARCH',
  addressInfo: {
    postCode: '',
    address: '',
    detailAddress: '',
  },
};

const reducer = (state: IAddressInfo, action: IAction): IAddressInfo => {
  switch (action.type) {
    case 'SEARCH':
      const { bname, roadAddress, jibunAddress, buildingName, userSelectedType, zonecode } =
        action.data;
      const extarAddr = `(${[bname, buildingName].filter(Boolean).join(', ')})`;
      const addressInfo = (userSelectedType === 'J' ? jibunAddress : roadAddress) + ' ' + extarAddr;
      return {
        actionStep: 'DETAIL',
        addressInfo: {
          postCode: zonecode,
          address: addressInfo,
          detailAddress: '',
        },
      };
    case 'DETAIL':
      return {
        actionStep: 'FINAL',
        addressInfo: {
          postCode: state.addressInfo.postCode,
          address: state.addressInfo.address,
          detailAddress: action.data,
        },
      };
    case 'GLOBALDETAIL':
      return {
        actionStep: 'FINAL',
        addressInfo: {
          postCode: action.data.addressInfo.postCode,
          address: action.data.addressInfo.address,
          detailAddress: action.data.addressInfo.detailAddress,
        },
      };
    default:
      return initialize;
  }
};

export function usePostcodeReducer() {
  const [address, dispatch] = useReducer(reducer, initialize);

  //주소검색 결과
  const onPostSearch = (data: IPostData): void => {
    dispatch({
      type: 'SEARCH',
      data,
    });
  };

  //상세주소 입력
  const onPostDetail = (data: string): void => {
    dispatch({
      type: 'DETAIL',
      data,
    });
  };

  const onPostGlobalDetail = (data: IAddressInfo): void => {
    dispatch({
      type: 'GLOBALDETAIL',
      data,
    });
  };

  return {
    address,
    onPostSearch,
    onPostDetail,
    onPostGlobalDetail,
  };
}
