import React, { MouseEvent } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { ITextArea, TEXTAREA_THEME } from './types';
import { ICON_LIST } from '@src/components/icon';

export function TextArea({
  theme,
  inputValue,
  row,
  isRequired,
  isError,
  disabled,
  allowClear,
  placeholder,
  maxLength,
  readOnly,
  onChange,
}: ITextArea) {
  const themeStyle = textAreaTheme[theme];
  const canChange = onChange && typeof onChange === 'function';

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (canChange) {
      const value = e.target.value;
      const maxInput = maxLength ? maxLength : 0;
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

  return (
    <TextAreaWrapper>
      <TextAreaStyled
        themeStyle={themeStyle}
        rows={row}
        value={inputValue}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        onChange={handleChange}
      />
      {allowClear && inputValue && (
        <IconWrapper onClick={handleClickAllowClear}>
          <img src={ICON_LIST['x_60x60']} width={'20px'} alt="clearIcon" />
        </IconWrapper>
      )}
    </TextAreaWrapper>
  );
}

TextArea.defaultProps = {
  theme: TEXTAREA_THEME.ROUNDED,
  row: 5,
  maxLength: 250,
  placeholder: '입력해주세요.',
  isRequired: false,
  isError: false,
  disabled: false,
  allowClear: true,
  readOnly: false,
};

const textAreaTheme = {
  [TEXTAREA_THEME.ROUNDED]: css`
    border-radius: 4px;
  `,
  [TEXTAREA_THEME.NONROUNDED]: css`
    border-radius: 0px;
  `,
};

interface ITextAreaStyled {
  themeStyle: SerializedStyles;
}

const TextAreaWrapper = styled.div`
  flex: 1;
  display: flex;
`;
const TextAreaStyled = styled.textarea<ITextAreaStyled>`
  width: 100%;
  overflow: auto;
  resize: none;
  border: 1px solid ${(props) => props.theme.colors.border_table};
`;

const IconWrapper = styled.span`
  margin: auto;
  align-items: center;
  cursor: pointer;
`;
