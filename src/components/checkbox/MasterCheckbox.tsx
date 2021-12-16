import { useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { Checkbox } from './Checkbox';
import { IMasterCheckbox } from './types';
import { useCheckbox } from './useCheckbox';
import { css } from '@emotion/react';
import { cssx } from '@src/theme';

export function MasterCheckbox({
  options,
  allCheckLabel,
  onCheckIds,
  onClickItem,
}: IMasterCheckbox) {
  const { allChecked, checkList, requredCheck, onCheckAll, onCheckItem } = useCheckbox(options);

  const requiredList = checkList.filter((obj) => obj.isRequired); //체크 필수 리스트
  const optionalList = checkList.filter((obj) => !obj.isRequired); //체크 선택 리스트

  //하나씩 체크
  const onClickHandler = useCallback(
    (id: string): void => {
      onCheckItem(id);
    },
    [onCheckItem, checkList],
  );

  const onClickInfo = (value: string) => {
    onClickItem(value);
    //상세 팝업 열기
  };

  // 필수값이 모두 체크되었을 때 체크된 [value] 리턴
  useEffect(() => {
    onCheckIds(requredCheck);
  }, [requredCheck]);

  return (
    <>
      <CheckAllStyled>
        <Checkbox id="all" label={allCheckLabel} onClick={onCheckAll} isChecked={allChecked} />
      </CheckAllStyled>

      {/* 체크 필수 리스트 */}
      <CheckItemStyled required={true}>
        {requiredList.map((obj, idx) => (
          <Checkbox
            key={idx}
            id={obj.id}
            label={obj.text}
            onClick={onClickHandler}
            isChecked={obj.check}
            suffixIcon="icn_arrow_60x60"
            onClickSuffix={() => onClickInfo(obj.id)}
          />
        ))}
      </CheckItemStyled>

      {/* 체크 선택 리스트 */}
      <CheckItemStyled required={false}>
        {optionalList.map((obj, idx) => (
          <Checkbox
            key={idx}
            id={obj.id}
            label={obj.text}
            onClick={onClickHandler}
            isChecked={obj.check}
            suffixIcon="icn_arrow_60x60"
            onClickSuffix={() => onClickInfo(obj.id)}
          />
        ))}
      </CheckItemStyled>
    </>
  );
}

MasterCheckbox.defaultProps = {
  allCheckLabel: 'All',
};

const CheckAllStyled = styled.div`
  ${cssx.flexBtw}
  height: 60px;
  margin-bottom: 14px;
  border-bottom: 1px solid #e9e9e9;
  label {
    span {
      ${(props) => props.theme.fonts.bd2_B}
      color: #000
    }
  }
`;

const CheckItemStyled = styled.div<{ required: boolean }>`
  ${(props) => {
    const required = props.required;
    if (required) {
      return css`
        > div {
          ${cssx.flexBtw}
          height: 40px;
        }
      `;
    }
    if (!required) {
      return css`
        > div {
          ${cssx.flexBtw}
          height: 40px;
          margin-top: 50px;
          & ~ div {
            margin-top: 0;
          }
        }
      `;
    }
  }}
`;
