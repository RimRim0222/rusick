import styled from '@emotion/styled';

export function WriteReservationSubTitle({ label }: { label: string }) {
  return <WriteReservationSubTitleStyled>{label}</WriteReservationSubTitleStyled>;
}

const WriteReservationSubTitleStyled = styled.div`
  font-weight: bold;
`;
