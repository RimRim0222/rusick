import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { TestUser } from './TestUser';
// import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import ErrorBoundary from '@pages/error/ErrorBoundary';
import React, { useState } from 'react';

import { cssx } from '@src/theme/';

export function TestPage() {
  return (
    <PageStyled>
      <Link to={{ pathname: '/login' }}>login</Link>
      <Link to={{ pathname: '/loginTest' }}>loginTest</Link>
      <Link to={{ pathname: '/testStep' }}>testStep1</Link>
      <Link to={{ pathname: '/passwordSearchComplete' }} state={{ text: 'aaaa@address.com' }}>
        password search complete page
      </Link>
      <Link to={{ pathname: '/passwordSearchComplete' }}>JOIN_COMPLETE</Link>
      <Link to={{ pathname: '/modifyCompleteSetPayment' }}>MODIFY_COMPLETE_PAYMENT</Link>
      <Link to={{ pathname: '/modifyComplete' }}>MODIFY_COMPLETE</Link>

      <React.Suspense fallback={<div>suspense..</div>}>
        <TestUser />
      </React.Suspense>
      <ErrorBoundary>
        <SuspensedComponent />
      </ErrorBoundary>
    </PageStyled>
  );
}

const SuspensedComponent = () => {
  const [testError, setTestError] = useState(false);
  const handleError = () => {
    setTestError(true);
  };

  if (testError) {
    throw Error('Error');
  }
  return (
    <>
      <div>do something suspensed</div>
      <button onClick={handleError}>Error</button>
    </>
  );
};

// const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   );
// };

const PageStyled = styled.div`
  ${cssx.flexBtw}
  ${cssx.flexCenter}
  ${cssx.flexStart}
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  padding-top: 20px;
  ${(props) => props.theme.fonts.h2_B}
`;

const LinkWrapper = styled.div``;
