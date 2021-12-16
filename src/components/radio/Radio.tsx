import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import { RadioProps } from './types';

export function Radio({ label, value, disabled, onChange }: RadioProps) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <>
      <RadioStyled
        type="radio"
        name="radio"
        onChange={onChangeHandler}
        value={value}
        disabled={disabled}
      />
      {label && <Label>{label}</Label>}
    </>
  );
}

Radio.defaultProps = {
  disabled: false,
};

const RadioStyled = styled.input``;

const Label = styled.span`
  display: inline-block;
`;
