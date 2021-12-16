import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IImage } from './types';

export function Image({ image, width, height }: IImage) {
  return (
    <>
      <ImageStyled src={image} width={width} height={height} alt="" />
    </>
  );
}

Image.defaultProps = {
  width: 'auto',
};

interface StyleProps {
  width: string;
  height?: string;
}

const ImageStyled = styled.img<StyleProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => (height ? height : `auto`)};
`;
