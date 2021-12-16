import styled from '@emotion/styled';
import { cssx } from '@src/theme';

interface IPropTypes {
  title: string;
}

export function RecordTitle1({ title }: IPropTypes) {
  return <RecordTitle1Styled>{title}</RecordTitle1Styled>;
}

const RecordTitle1Styled = styled.div`
  ${cssx.title1}
`;
