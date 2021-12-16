import styled from '@emotion/styled';
import { Icon, ICON_LIST } from '@src/components/icon';

export function HealthInfoTable({
  tableHead,
  tableItems,
}: {
  tableHead: string;
  tableItems: null | { key: string; value: string }[];
}) {
  return (
    <HealthInfoTableStyled>
      <TableHeadWrapper>{tableHead}</TableHeadWrapper>
      {tableItems &&
        tableItems.map((item) => {
          const { key, value } = item;
          return (
            <TableItemWrapper key={key}>
              <TableItemLeft>{key}</TableItemLeft>
              <TableItemRight>
                {key === '프로필이미지' ? <Icon icon={ICON_LIST[value]} width={'40px'} /> : value}
              </TableItemRight>
            </TableItemWrapper>
          );
        })}
    </HealthInfoTableStyled>
  );
}

const HealthInfoTableStyled = styled.div``;
const TableHeadWrapper = styled.h3``;
const TableItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const TableItemLeft = styled.div``;
const TableItemRight = styled.div``;
