import styled from '@emotion/styled';
import { EmailUpdateText, EmailUpdateForm } from '@src/features/emailUpdate';
import React from 'react';
import ErrorBoundary from '@pages/error/ErrorBoundary';
export function EmailUpdatePage() {
  /**
   * todo
   * myinfo 정보를 불러와서 회원정보 이동시에 활용해야될 수 있음
   */
  return (
    <EmailUpdatePageStyled>
      <EmailUpdateText />
      <ErrorBoundary>
        <React.Suspense fallback={<div>suspense..</div>}>
          <EmailUpdateForm />
        </React.Suspense>
      </ErrorBoundary>
    </EmailUpdatePageStyled>
  );
}

const EmailUpdatePageStyled = styled.div``;
