import styled from '@emotion/styled';
import { cssx } from '@src/theme';

interface IPropTypes {
  title: string;
}

export function RecordTitle2({ title }: IPropTypes) {
  return <RecordTitle2Styled>{title}</RecordTitle2Styled>;
}

const RecordTitle2Styled = styled.div`
  ${cssx.title2}
`;
