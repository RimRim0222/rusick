import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface PropTypes {
  active: boolean;
  onClick: () => void;
  children: JSX.Element | JSX.Element[];
}

export function Card({ active, onClick, children }: PropTypes) {
  return (
    <CardStyled active={active} onClick={onClick}>
      {children}
    </CardStyled>
  );
}

Card.defaultProps = {
  active: false,
};

const CardStyled = styled.div<{ active: boolean }>`
  ${({ active, theme }) => {
    return css`
      border: 1px solid ${active ? theme.colors.maincolor_blue : theme.colors.gray_scale_4};
    `;
  }}
  border-radius: 7px;
  /* text-align: center; */
  padding: 17px 15px 0;
`;
