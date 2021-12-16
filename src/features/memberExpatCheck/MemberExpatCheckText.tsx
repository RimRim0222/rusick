import styled from '@emotion/styled';
import { LNG_KEY } from '@src/i18n';
import { useTranslation } from 'react-i18next';

export function MemberExpatCheckText() {
  const { t } = useTranslation();
  const title = LNG_KEY.USER_VERIFY_MAIN_TITLE;
  return (
    <MemberExpatCheckTextStyled>
      <TitleStyled>{t(title)}</TitleStyled>
      <DescriptionAWrapper>
        <DescBoldStyle>{t(LNG_KEY.USER_VERIFY_DESC_A_01_B)}</DescBoldStyle>
        {t(LNG_KEY.USER_VERIFY_DESC_A_01)}
        <DescriptionAStyled> {t(LNG_KEY.USER_VERIFY_DESC_A_02)}</DescriptionAStyled>
      </DescriptionAWrapper>
      <DescriptionBstyled>{t(LNG_KEY.USER_VERIFY_DESC_B)}</DescriptionBstyled>
    </MemberExpatCheckTextStyled>
  );
}

const MemberExpatCheckTextStyled = styled.div``;
const TitleStyled = styled.section`
  ${(props) => props.theme.fonts.h0_B}
`;
const DescriptionAWrapper = styled.section`
  ${(props) => props.theme.fonts.bd2_R}
`;
const DescBoldStyle = styled.span`
  ${(props) => props.theme.fonts.bd2_B};
  color: ${(props) => props.theme.colors.maincolor_blue};
`;
const DescriptionAStyled = styled.div``;
const DescriptionBstyled = styled.section`
  ${(props) => props.theme.fonts.bd2_R}
`;
