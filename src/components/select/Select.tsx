import styled from '@emotion/styled';
import { useEffect } from 'react';
import { OptionDefault } from './OptionDefault';
import { OptionDialog } from './OptionDialog';
import { ISelect, SELECT_THEME, SELECT_STYLE_THEME } from './types';
import { ICON_LIST } from '@src/components/icon';
import { useSelect } from './useSelect';
import { css } from '@emotion/react';
export function Select({
  id,
  theme,
  styleTheme,
  layerSplit,
  label,
  defaultValue,
  isReadOnly,
  onSelect,
  options,
  OptionKeys,
  placeholder,
}: ISelect) {
  const {
    setOptions,
    onOpenDial,
    onClear,
    usedSelectState,
    selectFormValue,
    onClickOption,
    onCloseOption,
  } = useSelect(id, 'single');

  const onOpenOption = () => {
    const contentsSort = options.map((item) => ({
      id: item[OptionKeys.id],
      text: item[OptionKeys.text],
    }));
    const dial_label = label ? label : '';
    setOptions(id, layerSplit, dial_label, contentsSort, defaultValue);
  };

  const onOpenHandler = () => {
    if (isReadOnly) return false;
    usedSelectState.isOpen ? onCloseOption() : onOpenDial();
  };

  const onClickHandler = (optionId: string) => {
    onClickOption(optionId);
    onSelect(optionId);
  };
  const onCloseHadler = () => {
    onCloseOption();
  };

  useEffect(() => {
    onOpenOption();
    return () => onClear();
  }, []);

  return (
    <SelectWrapper>
      <SelectStyled onClick={onOpenHandler} styleTheme={styleTheme}>
        {selectFormValue.text === '' ? placeholder : selectFormValue.text}
        <OpenBtnStyled />
      </SelectStyled>

      {theme === SELECT_THEME.DEFAULT && (
        <OptionDefault
          isOpen={usedSelectState.isOpen}
          optionData={usedSelectState}
          onClick={onClickHandler}
        />
      )}
      {theme === SELECT_THEME.DIALOG && (
        <OptionDialog
          isOpen={usedSelectState.isOpen}
          optionData={usedSelectState}
          onClick={onClickHandler}
          onClose={onCloseHadler}
        />
      )}
    </SelectWrapper>
  );
}

Select.defaultProps = {
  type: 'single',
  label: '',
  layerSplit: '1',
  defaultValue: '',
  styleTheme: SELECT_STYLE_THEME.DEFAULT,
  isReadOnly: false,
};

const SelectWrapper = styled.div`
  /* width: 100%; */
`;

const SelectStyled = styled.div<{ styleTheme: SELECT_STYLE_THEME }>`
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
