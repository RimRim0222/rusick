import styled from '@emotion/styled';
import { ButtonImagePreview } from '@src/components/button';
import { TestInput } from '@src/components/button/TestInput';
import { WriteReservationSubTitle } from './WriteReservationSubTitle';

export function WriteInfoPassportUpload() {
  const onChangeImage = ({ file }: { file: File | null }) => {
    console.log(file);
  };

  return (
    <WriteInfoPassportUploadStyled>
      <WriteReservationSubTitle label="여권 사진 이미지 (재외국민 회원 필수)" />
      <WriteInfoPassportUploadTitleStyled>
        <br />
        진료시 예약자 본인임을 증명할 수 있는 여권사진을 첨부해 주세요.
      </WriteInfoPassportUploadTitleStyled>
      <WriteInfoPassportUploadWrapper>
        <ButtonImagePreview id="passportUpload" onChange={onChangeImage} />
      </WriteInfoPassportUploadWrapper>
    </WriteInfoPassportUploadStyled>
  );
}

const WriteInfoPassportUploadStyled = styled.div`
  padding: 10px 0;
`;
const WriteInfoPassportUploadTitleStyled = styled.div``;
const WriteInfoPassportUploadWrapper = styled.ul``;
