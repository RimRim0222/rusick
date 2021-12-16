import styled from '@emotion/styled';
import { ILabelToggle, TOGGLE_COLOR, TOGGLE_SIZE } from './types';
import { Icon } from '../icon';
import { Toggle } from './Toggle';
import { cssx } from '@src/theme/';

export function LabelToggle({
  checked,
  onChange,
  id,
  size,
  disabled,
  label,
  icon,
  color,
}: ILabelToggle) {
  return (
    <LabelToggleStyled>
      <span>
        {icon && (
          <IconWrapper>
            <Icon icon={icon} width="20px" />
          </IconWrapper>
        )}
        {label}
      </span>
      <Toggle
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        size={size}
        id={id}
        color={color}
      />
    </LabelToggleStyled>
  );
}

LabelToggle.defaultProps = {
  checked: false,
  disabled: false,
  size: TOGGLE_SIZE.W50,
  color: TOGGLE_COLOR.DEFAULT,
};

const LabelToggleStyled = styled.div`
  ${cssx.flexBtw}
  height: 45px;
  span {
    ${(props) => props.theme.fonts.bd2_R}
    display: inline-block;
  }
  .toggle {
    float: right;
  }
`;

const IconWrapper = styled.span`
  padding-right: 10px;
`;
