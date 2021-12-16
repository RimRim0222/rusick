import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { MemberExpatAuthForm } from './MemberExpatAuthForm';
import { memberExpat } from './text';
export function MemberExpatAuth() {
  const { t } = useTranslation();

  return (
    <MemeberExpatAuthWrapper>
      <MemberExpatAuthTitleWrapper>
        <MainTitleStyled>{t(memberExpat.mainTitle)}</MainTitleStyled>
        <MainSubTitleStyled01>{t(memberExpat.subTitle01)}</MainSubTitleStyled01>
        <MainSubTitleStyled02>{t(memberExpat.subTitle02)}</MainSubTitleStyled02>
      </MemberExpatAuthTitleWrapper>
      <MemberExpatAuthFormWrapper>
        <MemberExpatAuthForm />
      </MemberExpatAuthFormWrapper>
    </MemeberExpatAuthWrapper>
  );
}

const MemeberExpatAuthWrapper = styled.div``;
const MemberExpatAuthTitleWrapper = styled.div``;

const MainTitleStyled = styled.div`
  ${(props) => props.theme.fonts.h1_B};
`;
const MainSubTitleStyled01 = styled.div`
  margin-top: 15px;
  ${(props) => props.theme.fonts.bd2_R};
  color: ${(props) => props.theme.colors.text_subtitle};
`;
const MainSubTitleStyled02 = styled.div`
  margin-top: 15px;
  ${(props) => props.theme.fonts.p1_R};
  color: ${(props) => props.theme.colors.text_subtitle};
`;

const MemberExpatAuthFormWrapper = styled.div`
  margin-top: 40px;
`;
