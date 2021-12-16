import styled from '@emotion/styled';
import { useState } from 'react';
import { cssx } from '@src/theme/';
import { ButtonImagePreview } from '@src/components/button';
import { TestInput } from '@src/components/button/TestInput';
import { WriteReservationSubTitle } from './WriteReservationSubTitle';

interface IImageUpload {
  id: string;
  file: File | null;
}

export function WriteInfoImageUpload() {
  const [images, setImages] = useState<IImageUpload[]>([]);

  const onChangeImage = ({ id, file }: { id: string; file: File | null }) => {
    setImages((prev) => prev.map((obj) => (obj.id === id ? { ...obj, file } : { ...obj })));
  };

  return (
    <WriteInfoImageUploadStyled>
      <WriteReservationSubTitle label="병변 이미지" />
      <WriteInfoImageUploadTitleStyled>
        증상과 관련된 이미지를 업로드 해주세요. (최대3장)
      </WriteInfoImageUploadTitleStyled>
      <WriteInfoImageUploadInputWrapper>
        {[...Array(3)].map((val, idx) => (
          <ButtonImagePreview key={idx} id={`image_${idx}`} onChange={onChangeImage} />
        ))}
      </WriteInfoImageUploadInputWrapper>
    </WriteInfoImageUploadStyled>
  );
}

const WriteInfoImageUploadStyled = styled.div`
  padding: 10px 0;
`;
const WriteInfoImageUploadTitleStyled = styled.div``;
const WriteInfoImageUploadInputWrapper = styled.ul`
  ${cssx.flexCenter}
`;
