//https://www.npmjs.com/package/react-daum-postcode
import styled from '@emotion/styled';
import { DaumPostcode, Address } from 'react-daum-postcode';
import { IPostSearch } from './types';

export function PostCodeSearch({ onSearch }: IPostSearch) {
  const handleComplete = (data: Address) => {
    return onSearch({
      sido: data.sido,
      sigungu: data.sigungu,
      bname: data.bname,
      buildingName: data.buildingName,
      jibunAddress: data.jibunAddress,
      roadAddress: data.roadAddress,
      userSelectedType: data.userSelectedType,
      zonecode: data.zonecode,
    });
  };

  return (
    <PostCodeSearchStyled>
      <DaumPostcode style={postCodeStyle} onComplete={handleComplete} autoClose={false} />
    </PostCodeSearchStyled>
  );
}

//iframe size
const postCodeStyle: { [key: string]: string } = {
  display: 'block',
  position: 'relative',
  width: '100%',
  height: '100%',
  padding: '0',
};

const PostCodeSearchStyled = styled.div`
  width: 100%;
  height: 100%;
`;
