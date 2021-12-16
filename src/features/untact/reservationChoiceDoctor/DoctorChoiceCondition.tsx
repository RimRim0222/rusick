import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';

import { ICON_LIST } from '@src/components/icon';
import { Select, SELECT_THEME } from '@src/components/select';
import { doctorSortItems } from '../reservation.data';
import { DoctorParams } from '@src/store/DoctorCardState';
import { useTranslation } from 'react-i18next';
import { LNG_KEY } from '@src/i18n';

export function DoctorChoiceCondition() {
  const { t } = useTranslation();
  const setDoctorParams = useSetRecoilState(DoctorParams);

  const location = t(LNG_KEY.NOW_LOCATION);
  const onChangeSort = (value: string) => {
    console.log(value);
    setDoctorParams((currVal) => {
      return { ...currVal, condition: value };
    });
    console.log('셀렉트 조건 변경, api 조회');
  };

  const onClickLocation = () => {
    //현위치 api 조회
    setDoctorParams((currVal) => {
      return { ...currVal, location };
    });
    console.log('현위치 변경, api 조회');
  };

  return (
    <DoctorChoiceConditionStyled>
      <SearchPointStyle onClick={onClickLocation}>{location}</SearchPointStyle>
      <SearchSortStyle>
        <Select
          id="doctorCardSort"
          defaultValue={doctorSortItems[0].id}
          options={doctorSortItems.map((obj) => ({ ...obj, text: t(obj.labelKey) }))}
          theme={SELECT_THEME.DIALOG}
          onSelect={onChangeSort}
          OptionKeys={{ id: 'id', text: 'text' }}
        />
      </SearchSortStyle>
    </DoctorChoiceConditionStyled>
  );
}

const DoctorChoiceConditionStyled = styled.div`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
  display: inline-block;
  ${(props) => css`
    border-bottom: 1px solid ${props.theme.colors.border_stroke};
  `};
`;

const SearchPointStyle = styled.div`
  width: 50%;
  float: left;
  ::before {
    content: '';
    background: url(${ICON_LIST['myLocation']}) no-repeat 0 4px / contain;
    width: 10px;
    height: 10px;
    float: left;
    padding: 10px 5px 0 0;
  }
`;
const SearchSortStyle = styled.div`
  width: 50%;
  padding-left: 20%;
  float: right;
`;
