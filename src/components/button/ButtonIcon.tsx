import { css, SerializedStyles, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { BUTTON_ICON_THEME, BUTTON_ICON_SIZE, BUTTON_SHAPE, IButtonIcon } from './types';
import { Icon, ICON_LIST } from '@src/components/icon';

export function ButtonIcon({
  theme,
  shape,
  size,
  lebal,
  iconActive,
  iconNonActive,
  isRightIcon,
  isBold,
  disabled,
  onClick,
}: IButtonIcon) {
  const { colors } = useTheme();
  const themeStyle = buttonIconTheme[theme];
  const sizeStyle = buttonSize[size];
  const shapeStyle = buttonShape[shape];
  const fontWeight = isBold ? '600' : '400';
  const fontColor = disabled ? colors.gray_scale_4 : colors.gray_scale_6;
  const IconItem = disabled ? ICON_LIST[iconActive] : ICON_LIST[iconNonActive];
  const backgroundColor = disabled ? colors.bg_gray : colors.maincolor_blue;

  return (
    <ButtonIconStyled
      themeType={theme}
      themeStyle={themeStyle}
      shapeStyle={shapeStyle}
      sizeStyle={sizeStyle}
      fontWeight={fontWeight}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      <ButtonItemWrapper isRightIcon={isRightIcon}>
        {iconActive && (
          <IconStyeld>
            <Icon icon={IconItem} width={'30px'} />
          </IconStyeld>
        )}
        <LabelStyeld>{lebal}</LabelStyeld>
      </ButtonItemWrapper>
    </ButtonIconStyled>
  );
}

ButtonIcon.defaultProps = {
  theme: BUTTON_ICON_THEME.DEFAULT,
  border: BUTTON_SHAPE.SQUARED,
  size: BUTTON_ICON_SIZE.MEDIUM,
  label: '테스트 버튼',
  shape: 'DEFAULT',
  isBold: false,
  disabled: false,
  isRightIcon: true,
};

const buttonIconTheme = {
  [BUTTON_ICON_THEME.DEFAULT]: css`
    background-color: #4ac6ff;
    color: #fff;
  `,
  [BUTTON_ICON_THEME.OUTLINE]: css`
    background-color: #fff;
    color: #4ac6ff;
    border: 1px solid #4ac6ff;
  `,
};

const buttonSize = {
  [BUTTON_ICON_SIZE.SMALL]: css`
    padding: 0px 11px;
    height: 42px;
    font-size: 14px;
  `,
  [BUTTON_ICON_SIZE.MEDIUM]: css`
    padding: 0px 15px;
    height: 50px;
    font-size: 15px;
  `,
  [BUTTON_ICON_SIZE.LARGE]: css`
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

interface IButtonIconStyled {
  themeType: BUTTON_ICON_THEME;
  themeStyle: SerializedStyles;
  shapeStyle: SerializedStyles;
  sizeStyle: SerializedStyles;
  backgroundColor: SerializedStyles;
  fontWeight: string;
  fontColor: string;
}

const ButtonIconStyled = styled.button<IButtonIconStyled>`
  width: 100%;
  box-sizing: border-box;
  ${(props) => props.themeStyle}
  ${(props) => props.shapeStyle};
  ${(props) => props.sizeStyle}
  font-weight: ${(props) => props.fontWeight};
  ${(props) => {
    return (
      props.themeType === BUTTON_ICON_THEME.DEFAULT &&
      css`
        background-color: ${props.backgroundColor};
      `
    );
  }}
  ${(props) => {
    return (
      props.themeType === BUTTON_ICON_THEME.DEFAULT &&
      css`
        color: ${props.fontColor};
      `
    );
  }}
`;

const IconStyeld = styled.div``;
const LabelStyeld = styled.div``;

interface IButtonItemStyled {
  isRightIcon?: boolean;
}

const ButtonItemWrapper = styled.div<IButtonItemStyled>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  ${(props) =>
    !props.isRightIcon
      ? css`
          > :nth-of-type(1) {
            order: 1;
          }
          > :nth-of-type(2) {
            order: 2;
          }
        `
      : css`
          > :nth-of-type(1) {
            order: 2;
          }
          > :nth-of-type(2) {
            order: 1;
          }
        `}
`;
