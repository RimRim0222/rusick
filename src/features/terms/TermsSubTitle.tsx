import styled from '@emotion/styled';

interface PropTypes {
  text: string;
}

export function TermsSubTitle({ text }: PropTypes) {
  return <SubTitleStyled>{text}</SubTitleStyled>;
}

const SubTitleStyled = styled.div`
  padding-top: 47px;
  ${(props) => props.theme.fonts.h0_B}
`;
