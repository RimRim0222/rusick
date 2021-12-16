import React, { useState, MouseEvent } from 'react';
import { css, SerializedStyles, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { INPUT_SIZE, INPUT_THEME, INPUT_TYPE, IInput } from './types';
import { Icon, ICON_LIST } from '@src/components/icon';
export function Input({
  size,
  theme,
  inputValue,
  isRequired,
  isError,
  onChange,
  type,
  name,
  disabled,
  allowClear,
  placeholder,
  maxLength,
  readOnly,
  prefixIcon,
  suffixIcon,
  onClickSuffix,
}: IInput) {
  const { colors } = useTheme();

  const [passwordShown, setPasswordShown] = useState(true);
  const themeStyle = inputTheme[theme];
  const sizeStyle = inputSize[size];
  const isPassword = INPUT_TYPE.PW === type;
  const canChange = onChange && typeof onChange === 'function';
  const canClickSuffix = onClickSuffix && typeof onClickSuffix === 'function';
  const inputType = isPassword && passwordShown ? INPUT_TYPE.PW : INPUT_TYPE.TEXT;
  const checkedColor = isError ? colors.point_red : colors.gray_scale_4;

  const suffixStr = suffixIcon ? '20px' : '0px';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (canChange) {
      const value = e.target.value;
      const maxInput = maxLength ? maxLength : 0;
      // maxlength가 있으면 값 잘라서 넣기
      if (maxInput > 0) {
        return onChange(value.slice(0, maxInput));
      }
      onChange(value);
    }
  };

  const handleClickAllowClear = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (canChange) {
      onChange('');
    }
  };

  const handlePasswordVisiblity = () => setPasswordShown(passwordShown ? false : true);
  const handleClickSuffix = () => {
    if (canClickSuffix) {
      onClickSuffix();
    }
  };

  return (
    <InputWrapper themeStyle={themeStyle} color={checkedColor} disabled={!!disabled}>
      {prefixIcon && (
        <IconWrapper onClick={handleClickAllowClear}>
          <img src={ICON_LIST[prefixIcon]} width={'20px'} alt="prefixIcon" />
        </IconWrapper>
      )}
      <InputStyled
        type={inputType}
        name={name}
        sizeStyle={sizeStyle}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        readOnly={readOnly}
        disabled={!!disabled}
      />
      {allowClear && inputValue && (
        <IconWrapper onClick={handleClickAllowClear}>
          <img src={ICON_LIST['x_input']} width={'24px'} alt="clearIcon" />
        </IconWrapper>
      )}
      {isPassword && (
        <IconWrapper onClick={handlePasswordVisiblity}>
          <img
            src={passwordShown ? ICON_LIST['icn_view'] : ICON_LIST['icn_view_hide']}
            style={{ width: '20px' }}
            alt="eyeIcon"
          />
        </IconWrapper>
      )}
      {suffixIcon && (
        <IconWrapper onClick={handleClickSuffix}>
          <img src={ICON_LIST[suffixIcon]} style={{ width: suffixStr }} alt={suffixIcon} />
        </IconWrapper>
      )}
    </InputWrapper>
  );
}

Input.defaultProps = {
  size: INPUT_SIZE.MEDIUM,
  theme: INPUT_THEME.ROUNDED,
  type: INPUT_TYPE.TEXT,
  isRequired: false,
  isError: false,
  disabled: false,
  allowClear: false,
  readOnly: false,
  prefixIcon: '',
  suffixIcon: '',
};

const inputTheme = {
  [INPUT_THEME.DEFAULT]: css`
    background-color: #fff;
  `,
  [INPUT_THEME.ROUNDED]: css`
    border: 1px solid #d0d0d0;
    border-radius: 7px;
  `,
  [INPUT_THEME.NONROUNDED]: css`
    border: none;
  `,
};

const inputSize = {
  [INPUT_SIZE.LARGE]: css`
    padding: 18px 24px;
  `,
  [INPUT_SIZE.MEDIUM]: css`
    padding: 12px 16px;
  `,
  [INPUT_SIZE.SMALL]: css`
    padding: 10px 8px;
  `,
};

interface IInputWrapperStyled {
  themeStyle: SerializedStyles;
  disabled: boolean;
}

const InputWrapper = styled.div<IInputWrapperStyled>`
  flex: 1;
  display: flex;
  border: 1px solid ${({ color }) => color};
  ${(props) => props.themeStyle};
  ${(props) =>
    props.disabled &&
    css`
      background-color: #a9a5a59e;
    `};
  :focus {
    background: red;
  }
`;

interface IInputStyled {
  sizeStyle: SerializedStyles;
}

const InputStyled = styled.input<IInputStyled>`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: inherit;
  ${(props) => props.sizeStyle}
  ${(props) => props.theme.fonts.bd2_R}
`;

const IconWrapper = styled.span`
  margin: auto;
  align-items: center;
  cursor: pointer;
`;
