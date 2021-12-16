import styled from '@emotion/styled';
import { cssx } from '@src/theme/';

interface IPropTypes {
  label: string;
}

export function CheckReserveTitle({ label }: IPropTypes) {
  return <CheckReserveTitleStyled>{label}</CheckReserveTitleStyled>;
}

const CheckReserveTitleStyled = styled.div`
  margin-top: 30px;
  ${cssx.title2}
`;
