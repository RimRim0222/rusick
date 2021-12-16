import styled from '@emotion/styled';
import { Terms } from '@features/terms/Terms';
import { HeaderStep } from '@layout/header';
import { useHeaderState } from '@src/layout/header';

export function TermsPage() {
  const { setHeaderStep } = useHeaderState();

  const onClickAgree = () => {
    setHeaderStep(HeaderStep.STEP2);
  };

  return (
    <TermsPageStyled>
      <Terms onClickAgree={onClickAgree} />
    </TermsPageStyled>
  );
}

const TermsPageStyled = styled.div``;
