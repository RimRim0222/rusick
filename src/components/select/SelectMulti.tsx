import styled from '@emotion/styled';
import { useEffect } from 'react';
import { ISelectMulti, SELECT_STYLE_THEME } from './types';
import { ICON_LIST } from '@src/components/icon';
import { useSelect } from './useSelect';
import { css } from '@emotion/react';
export function SelectMulti({
  id,
  styleTheme,
  layerSplit,
  label,
  defaultValue,
  isReadOnly,
  onSelect,
  options,
  OptionKeys,
}: ISelectMulti) {
  const { setOptions, onOpenDial, onClear, usedSelectState } = useSelect(id, 'multiple');
  const { selectId } = usedSelectState;

  const onOpenOption = () => {
    const contentsSort = options.map((item) => ({
      id: item[OptionKeys.id],
      text: item[OptionKeys.text],
    }));
    const dial_label = label ? label : '';
    setOptions(id, layerSplit, dial_label, contentsSort, defaultValue);
  };

  const onClickHandler = () => {
    if (isReadOnly) return false;
    onOpenDial();
  };

  useEffect(() => {
    onSelect(selectId);
  }, [selectId]);

  useEffect(() => {
    onOpenOption();
    return () => onClear();
  }, []);

  return (
    <SelectWrapper>
      <SelectStyled onClick={onClickHandler} styleTheme={styleTheme}>
        {label}
        <OpeionBtnStyled />
      </SelectStyled>
      value : {JSON.stringify(selectId)}
      {/* <OptionDialog id={id} /> */}
    </SelectWrapper>
  );
}

SelectMulti.defaultProps = {
  label: '',
  layerSplit: '1',
  defaultValue: null,
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
const OpeionBtnStyled = styled.span`
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
