import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ISwitch, IToggle, TOGGLE_SIZE, TOGGLE_COLOR } from './types';
import { ChangeEvent, useCallback } from 'react';
import { Themes } from '@src/theme';

export function Toggle({ checked, onChange, id, size, disabled, color }: IToggle) {
  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }, []);

  return (
    <>
      <ToggleStyled size={size} className="toggle">
        <ToggleSwitch checked={checked} size={size} color={color} className="toggle-switch-label">
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            value={id}
            onChange={onChangeHandler}
          />
        </ToggleSwitch>
      </ToggleStyled>
    </>
  );
}

Toggle.defaultProps = {
  checked: false,
  disabled: false,
  size: TOGGLE_SIZE.W50,
  color: TOGGLE_COLOR.DEFAULT,
};

const ToggleSize = {
  [TOGGLE_SIZE.W100]: {
    width: 100,
    height: 58,
  },
  [TOGGLE_SIZE.W80]: {
    width: 80,
    height: 45,
  },
  [TOGGLE_SIZE.W50]: {
    width: 50,
    height: 29,
  },
};

const ToggleColor = {
  [TOGGLE_COLOR.DEFAULT]: Themes.colors.maincolor_blue,
  [TOGGLE_COLOR.RED]: Themes.colors.point_red,
};

const ToggleStyled = styled.div`
  ${({ size }: ISwitch) => ToggleSize[size]}
  position: relative;
  display: inline-block;
  input {
    opacity: 0;
  }
`;

const ToggleSwitch = styled.label`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  ::before {
    position: absolute;
    content: '';
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    -webkit-transition: 0.5s;
    transition: 0.4s;
  }

  ${({ checked, size, color }: ISwitch) => {
    const button = ToggleSize[size].height - 8; //높이 - 상하여백
    const move = ToggleSize[size].width - button - 8; //너비 - 버튼크기 - 왼오여백
    const activeColor = ToggleColor[color ? color : 'DEFAULT'];
    const boxShadow = checked ? `-1px` : `1px`;

    return css`
      background-color: ${checked ? activeColor : Themes.colors.gray_scale_5};
      ::before {
        width: ${`${button}px`};
        height: ${`${button}px`};
        border-radius: ${`${button}px`};
        box-shadow: ${boxShadow} 1px 2px rgba(0, 0, 0, 0.3);
        ${checked ? toggleMove(move) : toggleMove(0)}
      }
    `;
  }}
`;

const toggleMove = (size: number) => css`
  -webkit-transform: translateX(${`${size}px`});
  -ms-transform: translateX(${`${size}px`});
  transform: translateX(${`${size}px`});
`;
