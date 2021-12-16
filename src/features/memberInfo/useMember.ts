import {
  memberBasicInfoModifyParams,
  memberBasicInfoModifyResult,
} from '@store/MemberBasicInfoState';
import { isNull, isEmpty, replace } from 'lodash';
import { useState, useEffect } from 'react';
import { IAddress } from '@components/postCode/types';
import { useMemberInfoFormReducer } from './memberInfoFormReducer';
import { MemberInfoForm } from './types';
import { useNavigate } from 'react-router';
import { RouteList } from '@src/routes/RouteList';
import { useRecoilValue } from 'recoil';
import { LoginState, LOGIN_TYPE } from '@store/LoginState';
import { useLoadable } from '@features/tester/useLoadable';
import {
  IMemberBasicInfo,
  memberBasicInfoParams,
  getMemberBasicInfoResult,
} from '@store/MemberBasicInfoState';

export function useMemeber() {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [memberAddress, setMemberAddress] = useState({});
  const [memberEmail, setMemberEmail] = useState('');
  const [memberPhone, setMemberPhone] = useState('');
  const { memberType, loginType } = useRecoilValue(LoginState);
  const { memberInfoReducer, dispatchReducer, checkValidation, hasError, canNext } =
    useMemberInfoFormReducer();
  const { memberName } = memberInfoReducer;

  const hasEmailChange: boolean = loginType === LOGIN_TYPE.EAMIL ? false : true;


  const {
    handleParams,
    isLoading: loadingMemeberInfo,
    result: memberInfoData,
  } = useLoadable<IMemberBasicInfo>(memberBasicInfoParams, getMemberBasicInfoResult, false);

  const {
    handleParams: memberInfoModify,
    isLoading: loadingMemberInfoModify,
    result: modfiyResult,
  } = useLoadable<IMemberBasicInfo>(
    memberBasicInfoModifyParams,
    memberBasicInfoModifyResult,
    false,
  );

  useEffect(() => {
    handleParams({
      tokenKey: '12345',
    });
  }, []);

  useEffect(() => {
    if (!loadingMemeberInfo && !isNull(memberInfoData)) {
      setMemberEmail(memberInfoData.memberEmail);
      setMemberPhone(memberInfoData.memberPhone);
      const postCodeDate = memberInfoData.memberAddress && memberInfoData.memberAddress.postCode;
      const addressDate = memberInfoData.memberAddress && memberInfoData.memberAddress.address;
      const detaiLAddressDate =
        memberInfoData.memberAddress && memberInfoData.memberAddress.detailAddress;
      setAddress(
        isEmpty(postCodeDate) ? '' : `[${postCodeDate}] ${addressDate} ${detaiLAddressDate}`,
      );
      changeMemberName(memberInfoData.memberName);
    }
  }, [loadingMemeberInfo, memberInfoData]);

  // useEffect(() => {
  //   if (!loadingMemberInfoModify && modfiyResult) {
  //     return navigate(RouteList.MODIFY_COMPLETE_PAYMENT, { replace: true });
  //   }
  // }, [modfiyResult]);

  const changeMemberName = (value: string) => {
    dispatchReducer({ type: MemberInfoForm.MEMBER_NAME, payload: value });
  };

  const onAddress = (val: IAddress, step: string) => {
    if (step === 'FINAL') {
      setAddress(`[${val.postCode}] ${val.address} ${val.detailAddress}`);
      setMemberAddress({
        postCode: val.postCode,
        address: val.address,
        detailAddress: val.detailAddress,
      });
    }
  };

  const onChangeMemberType = () => alert('인증변경하기');
  const onChangePhone = () => alert('pass 인증 API 호출예정');
  const onChangeEmail = () => alert('이메일 변경 폼 호출');
  const onMemeberInfoSubmit = () => {
    //필수값 체크하고 넘기기
    memberInfoModify({
      memberType: memberType,
      memberName: memberName.value,
      memberPhone: memberPhone,
      memberEmail: memberEmail,
      memberAddress: {
        postCode: '',
        address: '',
        detailAddress: '',
      },
    });
    return navigate(RouteList.MODIFY_COMPLETE_PAYMENT, { replace: true });
  };

  const loading = loadingMemeberInfo;

  return {
    memberType,
    memberName,
    memberPhone,
    memberEmail,
    address,
    hasEmailChange,
    loading,
    changeMemberName,
    onChangeMemberType,
    onChangePhone,
    onChangeEmail,
    onAddress,
    onMemeberInfoSubmit,
  };
}
