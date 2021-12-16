import styled from '@emotion/styled';
import { cssx } from '@src/theme/';
import { Icon, ICON_LIST } from '@src/components/icon';
import { CheckReserveTitle } from './CheckReserveTitle';
import { FileUploader } from './FileUploader';

export function ImageDesease() {
  return (
    <ImageDeseaseWrap>
      <CheckReserveTitle label={'병변 이미지'} />
      <FileUploader />
    </ImageDeseaseWrap>
  );
}

const ImageDeseaseWrap = styled.div``;
