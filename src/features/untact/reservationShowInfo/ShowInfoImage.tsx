import styled from '@emotion/styled';
import { ButtonImagePreview } from '@src/components/button';
import { cssx } from '@src/theme';

export function ShowInfoImage() {
  return (
    <ShowInfoImageStyled>
      <TitleStyled>병변 이미지</TitleStyled>
      <ImageUploadInputWrapper>
        {[...Array(3)].map((val, idx) => (
          <ButtonImagePreview key={idx} id={`image_${idx}`} disabled={true} />
        ))}
      </ImageUploadInputWrapper>
    </ShowInfoImageStyled>
  );
}

const ShowInfoImageStyled = styled.div`
  padding: 10px 0;
`;

const TitleStyled = styled.div``;
const ImageUploadInputWrapper = styled.div`
  ${cssx.flexCenter}
`;
