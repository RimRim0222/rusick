import styled from '@emotion/styled';

export function HealthInfoTableWithoutIndex({
  tableHead,
  tableItems,
}: {
  tableHead: string;
  tableItems: null | string[];
}) {
  return (
    <HealthInfoTableWithoutIndexStyled>
      <TableHeadWrapper>{tableHead}</TableHeadWrapper>
      {tableItems &&
        tableItems.map((item) => <TableItemWrapper key={item}>{item}</TableItemWrapper>)}
    </HealthInfoTableWithoutIndexStyled>
  );
}

const HealthInfoTableWithoutIndexStyled = styled.div``;
const TableHeadWrapper = styled.h3``;
const TableItemWrapper = styled.div``;
