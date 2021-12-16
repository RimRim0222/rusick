import styled from '@emotion/styled';
import { useEffect } from 'react';
import { IconOptionDialog } from './IconOptionDialog';
import { ISelectIcon, SELECT_THEME, SELECT_STYLE_THEME } from '../types';
import { Icon, ICON_LIST } from '@src/components/icon';
import { useSelectIcon } from './useSelectIcon';
import { css } from '@emotion/react';
export function SelectIcon({
  id,
  theme,
  styleTheme,
  layerSplit,
  label,
  defaultValue,
  isReadOnly,
  onSelect,
  options,
  placeholder,
}: ISelectIcon) {
  const { setOptions, onOpenDial, onClear, selectId, selectFormValue } = useSelectIcon(
    id,
    'single',
  );

  const onOpenOption = () => {
    const dial_label = label ? label : '';
    setOptions(id, layerSplit, dial_label, options, defaultValue);
  };

  const onClickHandler = () => {
    if (isReadOnly) return false;
    onOpenDial();
  };

  useEffect(() => {
    onSelect(selectId[0]);
  }, [selectId]);

  useEffect(() => {
    console.log(selectFormValue);
    onOpenOption();
    return () => onClear();
  }, []);

  return (
    <SelectWrapper>
      <SelectIconStyled onClick={onClickHandler} styleTheme={styleTheme}>
        {selectFormValue.icon === null ? placeholder : selectFormValue.icon}
      </SelectIconStyled>

      {/* {theme === SELECT_THEME.DEFAULT && <OptionDefault id={id} />} */}
      {theme === SELECT_THEME.DIALOG && <IconOptionDialog id={id} />}
    </SelectWrapper>
  );
}

SelectIcon.defaultProps = {
  type: 'single',
  label: '',
  layerSplit: '1',
  styleTheme: SELECT_STYLE_THEME.NONELINE,
  isReadOnly: false,
  placeholder: Icon({ icon: ICON_LIST['plus'], width: '40px' }),
  defaultValue: null,
};

const SelectWrapper = styled.div`
  /* width: 100%; */
`;

const SelectIconStyled = styled.div<{ styleTheme: SELECT_STYLE_THEME }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  /* padding: 6px 12px; */
  border-radius: 7px;
  cursor: pointer;
  ${(props) => props.theme.fonts.bd3_R}
  ${({ styleTheme }) => {
    if (styleTheme === SELECT_STYLE_THEME.DEFAULT)
      return css`
        background: #f4f4f4;
      `;
  }}
`;
const OpenBtnStyled = styled.span`
  display: inline-flex;
  width: 29px;
  height: 29px;
  background: url(${ICON_LIST.arrow_down_58x58}) no-repeat 50% 50% / contain;
  &:first-of-type {
    margin-left: -6px;
    margin-right: 4px;
  }
  &:last-child {
    margin-left: 4px;
    margin-right: -6px;
  }
`;
