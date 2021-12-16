import { MouseEvent } from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles, useTheme } from '@emotion/react';
import { ITag, TAG_THEME } from './types';
export function Tag({ label, theme, color, backgroundColor, onClick, closable }: ITag) {
  const globalTheme = useTheme();
  const fonts = globalTheme.fonts;
  const themeStyle = tagThemeStyled(theme, backgroundColor, fonts);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!onClick) return false;
    e.preventDefault();
    onClick(e);
  };

  return (
    <TagStyled
      themeStyle={themeStyle}
      color={color}
      backgroundColor={backgroundColor}
      onClick={(e) => handleClick}
      closable={closable}
    >
      {label}
      {closable && <span onClick={handleClick}>x</span>}
    </TagStyled>
  );
}

Tag.defaultProps = {
  closable: false,
  color: '#000',
  backgroundColor: '#fff',
};

interface IFonts {
  [key: string]: SerializedStyles;
}

const tagThemeStyled = (theme: TAG_THEME, backgroundColor: string, fonts: IFonts) => {
  switch (theme) {
    case TAG_THEME.ROUNDED:
      return css`
        padding: 4px 11px 3px;
        background: #fff;
        border-radius: 5px;
        border: 1px solid ${backgroundColor};
        ${fonts.p2_R};
      `;
    case TAG_THEME.HASH:
      return css`
        background-color: ${backgroundColor};
        border: none;
        :before {
          content: '#';
        }
      `;
    case TAG_THEME.SQUARE:
      return css`
        padding: 6px 16px;
        background-color: ${backgroundColor};
        border: none;
      `;
    default:
      return css`
        padding: 4px 10px;
        border-radius: 10px;
        background-color: ${backgroundColor};
        border: none;
        ${fonts.p1_R}
      `;
  }
};

interface ITageStyled {
  themeStyle: SerializedStyles;
  backgroundColor: string;
  closable: boolean;
}

const TagStyled = styled.span<ITageStyled>`
  ${(props) => props.themeStyle}
  ${(props) => css`
    color: ${props.color};
  `}
  display: inline-block;
  width: fit-content;
  box-sizing: border-box;
  white-space: nowrap;
  > span {
    margin-left: 10px;
    color: #00000073;
    cursor: pointer;
  }
`;
