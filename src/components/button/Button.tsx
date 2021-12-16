import { css, SerializedStyles, useTheme } from '@emotion/react';
import { IButton, BUTTON_THEME, BUTTON_SIZE, BUTTON_SHAPE, BUTTON_DISPLAY_TYPE } from './types';
import styled from '@emotion/styled';

export function Button({
  theme,
  shape,
  size,
  displayType,
  label,
  isBold,
  disabled,
  onClick,
}: IButton) {
  const { colors } = useTheme();
  const themeStyle = buttonTheme[theme];
  const sizeStyle = buttonSize[size];
  const shapeStyle = buttonShape[shape];
  const displayStyle = buttonDisplayType[displayType];
  const fontWeight = isBold ? '600' : '400';
  const fontColor = disabled ? colors.gray_scale_4 : colors.gray_scale_6;
  const backgroundColor = disabled ? colors.bg_gray : colors.maincolor_blue;
  const pointerEvent = disabled ? 'none' : 'all';

  return (
    <ButtonStyled
      themeType={theme}
      themeStyle={themeStyle}
      shapeStyle={shapeStyle}
      sizeStyle={sizeStyle}
      fontWeight={fontWeight}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      displayStyle={displayStyle}
      pointerEvent={pointerEvent}
      onClick={onClick}
    >
      {label}
    </ButtonStyled>
  );
}

const buttonTheme = {
  [BUTTON_THEME.DEFAULT]: css`
    background-color: #4ac6ff;
    color: #fff;
    border-radius: 4px;
  `,
  [BUTTON_THEME.OUTLINE]: css`
    background-color: #fff;
    color: #4ac6ff;
    border: 1px solid #4ac6ff;
  `,
  [BUTTON_THEME.OUTLINE_GRAY]: css`
    background-color: #fff;
    color: #606060;
    border: 1px solid #606060;
  `,
  [BUTTON_THEME.DOWNLOAD]: css`
    background-color: #999999;
    color: #fff;
  `,
  [BUTTON_THEME.GHOST_DEFAULT]: css`
    background-color: #fff;
    color: #4ac6ff;
  `,
  [BUTTON_THEME.GHOST_BLACK]: css`
    background-color: #fff;
    color: #000;
  `,
};

const buttonSize = {
  [BUTTON_SIZE.XSSMALL]: css`
    padding: 0px 7px;
    height: 28px;
    font-size: 11px;
  `,
  [BUTTON_SIZE.SMALL]: css`
    padding: 0px 11px;
    height: 42px;
    font-size: 14px;
  `,
  [BUTTON_SIZE.MEDIUM]: css`
    padding: 0px 15px;
    height: 50px;
    font-size: 15px;
  `,
  [BUTTON_SIZE.LARGE]: css`
    padding: 0px 20px;
    height: 66px;
    font-size: 17px;
  `,
};

const buttonShape = {
  [BUTTON_SHAPE.SQUARED]: css`
    border-radius: 0px;
  `,
  [BUTTON_SHAPE.ROUNDED]: css`
    border-radius: 4px;
  `,
};

const buttonDisplayType = {
  [BUTTON_DISPLAY_TYPE.AUTO]: css`
    display: block;
    width: auto;
  `,
  [BUTTON_DISPLAY_TYPE.FULL]: css`
    display: inline-block;
    width: 100%;
  `,
};

interface IButtonStyeld {
  themeType: BUTTON_THEME;
  themeStyle: SerializedStyles;
  shapeStyle: SerializedStyles;
  sizeStyle: SerializedStyles;
  backgroundColor: SerializedStyles;
  displayStyle: SerializedStyles;
  fontWeight: string;
  fontColor: string;
  pointerEvent: string;
}

const ButtonStyled = styled.button<IButtonStyeld>`
  box-sizing: border-box;
  ${(props) => props.displayStyle};
  ${(props) => props.themeStyle};
  ${(props) => props.shapeStyle};
  ${(props) => props.sizeStyle};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => {
    return (
      props.themeType === BUTTON_THEME.DEFAULT &&
      css`
        background-color: ${props.backgroundColor};
      `
    );
  }}
  pointer-events:${(props) => props.pointerEvent}
`;

Button.defaultProps = {
  theme: BUTTON_THEME.DEFAULT,
  border: BUTTON_SHAPE.SQUARED,
  size: BUTTON_SIZE.MEDIUM,
  displayType: BUTTON_DISPLAY_TYPE.AUTO,
  label: '테스트 버튼',
  shape: 'DEFAULT',
  isBold: false,
  disabled: false,
};
