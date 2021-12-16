import styled from '@emotion/styled';
import { Select, SELECT_THEME } from '@src/components/select';
import { LNG_KEY } from '@src/i18n';
import { SymptomImageQueryParam } from '@src/store/SymptomState';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState } from 'recoil';
import { searchSymptomSortItems } from '../reservation.data';

export function SymptomSearchCondition() {
  const { t } = useTranslation();
  const setParam = useSetRecoilState(SymptomImageQueryParam);

  const onSortChangeHandler = (val: string) => {
    setParam((prev) => ({ ...prev, sort: val }));
  };

  return (
    <SymptomSearchConditionStyled>
      <span>{t(LNG_KEY.UNTACT_SYMPTOM_N_DISEASE)}</span>
      <span>
        <Select
          id="reserveSymptomCard"
          theme={SELECT_THEME.DIALOG}
          type="single"
          label="sort"
          // size={SELECT_SIZE.MEDIUM}
          defaultValue={searchSymptomSortItems[0].id}
          options={searchSymptomSortItems.map((obj) => ({ ...obj, text: t(obj.labelKey) }))}
          OptionKeys={{ id: 'id', text: 'text' }}
          onSelect={onSortChangeHandler}
        />
      </span>
    </SymptomSearchConditionStyled>
  );
}

const SymptomSearchConditionStyled = styled.div`
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: space-between;
  span:first-of-type {
    padding: 8px 0;
  }
`;
