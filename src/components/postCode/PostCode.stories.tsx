import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PostCodeSearch } from './PostCodeSearch';
import { PostCode } from './PostCode';
import { IPostData, IAddress } from './types';
import { useState } from 'react';
import { MEMBER_TYPE } from '@store/LoginState';

export default {
  title: `components/PostCode`,
  component: PostCode,
} as ComponentMeta<typeof PostCode>;

const PostCodeWrapper = styled.div`
  width: 500px;
  height: 500px;
`;

interface showAddress {
  type: string;
  val: string;
}

const Template: ComponentStory<typeof PostCode> = (args) => {
  const [addr, setAddr] = useState('');

  const onAddressHandler = (val: IAddress, step: string) => {
    setAddr(`[${val.postCode}] ${val.address} ${val.detailAddress}`);
  };
  return (
    <>
      {addr}
      <PostCodeWrapper>
        <PostCode memberType={MEMBER_TYPE.LOCAL} onAddress={onAddressHandler} />
      </PostCodeWrapper>
    </>
  );
};

export const KorUser = Template.bind({});
KorUser.args = {};

export const GlobalUser = () => {
  const [addr, setAddr] = useState('');

  const onAddressHandler = (val: IAddress, step: string) => {
    setAddr(`[${val.postCode}] ${val.address} ${val.detailAddress}`);
  };
  return (
    <>
      {addr}
      <PostCodeWrapper>
        <PostCode memberType={MEMBER_TYPE.EXPAT} onAddress={onAddressHandler} />
      </PostCodeWrapper>
    </>
  );
};

export const Search = () => {
  const [addr, setAddr] = useState<showAddress[]>([]);

  const onSearchHandler = (val: IPostData) => {
    setAddr([
      { type: '동이름', val: val.bname },
      { type: '건물명', val: val.buildingName },
      { type: '우편번호', val: val.zonecode },
      { type: '지번주소', val: val.jibunAddress },
      { type: '도로명주소', val: val.roadAddress },
    ]);
  };

  return (
    <>
      {addr.length > 0 &&
        addr.map((obj, idx) => (
          <p key={idx}>
            {obj.type}:{obj.val}
          </p>
        ))}
      <PostCodeWrapper>
        <PostCodeSearch onSearch={onSearchHandler} />
      </PostCodeWrapper>
    </>
  );
};

// export const Detail = () => {
//   const [detail, setDetail] = useState('');
//   const onDetailHandler = (val: string) => {
//     setDetail(val);
//   };

//   return (
//     <>
//       detail : {detail}
//       <PostCodeWrapper>
//         <PostCodeDetail onDetail={onDetailHandler} address={} />
//       </PostCodeWrapper>
//     </>
//   );
// };
