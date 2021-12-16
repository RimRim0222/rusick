import styled from '@emotion/styled';
import { ButtonImagePreview } from '@src/components/button';

export function ShowInfoPassport() {
  return (
    <ShowInfoPassportStyled>
      <TitleStyled>여권 사진</TitleStyled>
      <PassportPreviewWrapper>
        <ButtonImagePreview id="passportUpload" disabled={true} />
      </PassportPreviewWrapper>
    </ShowInfoPassportStyled>
  );
}

const ShowInfoPassportStyled = styled.div`
  padding: 10px 0;
`;

const TitleStyled = styled.div``;
const PassportPreviewWrapper = styled.div``;
