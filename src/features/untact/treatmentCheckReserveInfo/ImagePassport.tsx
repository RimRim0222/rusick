import styled from '@emotion/styled';
import { cssx } from '@src/theme/';
import { Icon, ICON_LIST } from '@src/components/icon';
import { CheckReserveTitle } from './CheckReserveTitle';
import { FileUploader } from './FileUploader';

export function ImagePassport() {
  return (
    <ImagePassportWrap>
      <CheckReserveTitle label={'여권사진 이미지'} />
      <FileUploader />
    </ImagePassportWrap>
  );
}

const ImagePassportWrap = styled.div``;
