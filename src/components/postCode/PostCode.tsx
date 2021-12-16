import styled from '@emotion/styled';
import { useEffect } from 'react';
import { PostCodeDetailExpat } from './PostCodeDetailExpat';
import { PostCodeDetail } from './PostCodeDetail';
import { PostCodeSearch } from './PostCodeSearch';
import { IPostCode, IPostData, IAddressInfo } from './types';
import { usePostcodeReducer } from './usePostcodeReducer';
import { MEMBER_TYPE } from '@store/LoginState';
import { useLayer } from '../modal/useLayer';

export function PostCode({ memberType, onAddress }: IPostCode) {
  const { handleCloseClick } = useLayer(1);
  const { address, onPostSearch, onPostDetail, onPostGlobalDetail } = usePostcodeReducer();

  const handleSearch = (val: IPostData) => onPostSearch(val);
  const handleDetail = (val: string) => {
    return onPostDetail(val);
  };

  const onAGlobalAddressHandler = (val: IAddressInfo) => {
    onPostGlobalDetail(val);
    return handleCloseClick();
  };

  useEffect(() => {
    onAddress(address.addressInfo, address.actionStep);
  }, [address]);

  return (
    <>
      <PostCodeStyled>
        {memberType === MEMBER_TYPE.LOCAL ? (
          <>
            {address.actionStep === 'SEARCH' && <PostCodeSearch onSearch={handleSearch} />}
            {address.actionStep === 'DETAIL' && (
              <PostCodeDetail onDetail={handleDetail} address={address.addressInfo} />
            )}
          </>
        ) : (
          <PostCodeDetailExpat onAddress={onAGlobalAddressHandler} />
        )}
      </PostCodeStyled>
    </>
  );
}

PostCode.defaultProps = {
  userType: MEMBER_TYPE.EXPAT,
};

const PostCodeStyled = styled.div`
  height: 100%;
  width: 100%;
`;
