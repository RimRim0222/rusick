import styled from '@emotion/styled';
import { Input, INPUT_SIZE, INPUT_THEME, INPUT_TYPE } from '@src/components/input';
import { LNG_KEY } from '@src/i18n';
import { ISymptomQueryParam, SymptomListQueryParam } from '@src/store/SymptomState';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState, useSetRecoilState } from 'recoil';

export function SymptomSearchInput() {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState('');
  const setParam = useSetRecoilState(SymptomListQueryParam);

  const onClickSearch = () => {
    setParam((prev) => ({ ...prev, text: inputValue }));
  };

  const onChangeInput = (value: string) => {
    setInputValue(value);
  };

  return (
    <SymptomSearchInputStyled>
      <LabelStyles>{t(LNG_KEY.UNTACT_SEARCH_SYMPTOM)}</LabelStyles>
      <InputWrapper>
        <Input
          type={INPUT_TYPE.TEXT}
          name=""
          inputValue={inputValue}
          size={INPUT_SIZE.SMALL}
          theme={INPUT_THEME.ROUNDED}
          placeholder={t(LNG_KEY.UNTACT_SEARCH_SYMPTOM_PLACEHOLDER)}
          allowClear={true}
          onChange={onChangeInput}
          suffixIcon="search"
          onClickSuffix={onClickSearch}
        />
      </InputWrapper>
    </SymptomSearchInputStyled>
  );
}

const SymptomSearchInputStyled = styled.div``;

const InputWrapper = styled.div``;

const SearchIconStyle = styled.span`
  float: right;
`;

const LabelStyles = styled.div``;
