import styled from '@emotion/styled';
import {
  SymptomSearchInput,
  SymptomSearchList,
} from '@src/features/untact/reservationSearchSymptom';

export function SearchSymptomPage() {
  return (
    <SearchSymptomPageStyled>
      <SearchInputWrapper>
        <SymptomSearchInput />
      </SearchInputWrapper>
      <SearchListWrapper>
        <SymptomSearchList />
      </SearchListWrapper>
    </SearchSymptomPageStyled>
  );
}

const SearchSymptomPageStyled = styled.div``;

const SearchInputWrapper = styled.div`
  padding: 10px 0;
`;

const SearchListWrapper = styled.div``;
