import styled from '@emotion/styled';
import { IIcon } from './types';

export function Icon({ icon, width }: IIcon) {
  return <IconStyled src={icon} width={width} />;
}

interface IconStyleProps {
  width: string;
}

const IconStyled = styled.img<IconStyleProps>`
  width: ${({ width }) => width};
  height: ${({ width }) => width};
`;

Icon.defaultProps = {
  width: '24px',
};
