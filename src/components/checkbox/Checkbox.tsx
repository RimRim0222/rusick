import styled from '@emotion/styled';
import { ICheckbox, IValue } from './types';
import { css } from '@emotion/react';
import { ChangeEvent } from 'react';
import { Icon, ICON_LIST } from '../icon';
import { cssx } from '@src/theme';

export function Checkbox({
  isChecked,
  label,
  id,
  disabled,
  onClick,
  suffixIcon,
  onClickSuffix,
}: ICheckbox) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onClick(e.target.value);
  };

  return (
    <CheckboxWrapper>
      <CheckboxStyled checkValue={isChecked}>
        <input
          type="checkbox"
          checked={isChecked}
          value={id}
          onChange={onChangeHandler}
          disabled={disabled}
        />
        {label && <Text>{label}</Text>}
      </CheckboxStyled>
      {suffixIcon && (
        <span onClick={onClickSuffix}>
          <Icon icon={ICON_LIST[suffixIcon]} width="30px" />
        </span>
      )}
    </CheckboxWrapper>
  );
}

Checkbox.defaultProps = {
  isChecked: false,
  disabled: false,
  value: '',
};

const CheckboxWrapper = styled.div`
  ${cssx.flexBtw}
`;

const CheckboxStyled = styled.label`
  padding-left: 10px;
  ${(props) => props.theme.fonts.bd2_R}
  ${({ checkValue }: IValue) =>
    checkValue
      ? css`
          background: url(${ICON_LIST.check_on}) no-repeat 0 50% / contain;
        `
      : css`
          background: url(${ICON_LIST.check_off}) no-repeat 0 50% / contain;
        `}
  input {
    opacity: 0;
  }
`;

const Text = styled.span`
  color: #606060;
  padding-left: 17px;
`;
