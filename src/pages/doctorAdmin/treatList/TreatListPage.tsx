import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Search } from './Search';
import { Table } from './Table';

export function TreatListPage() {
  // 진료 리스트 페이지
  return (
    <>
      <Search />
      <Table />
    </>
  );
}
