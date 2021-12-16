import React from 'react';

interface ISuspenser {
  children: JSX.Element;
}

export function Suspenser({ children }: ISuspenser) {
  return <React.Suspense fallback={<div>suspense..</div>}>{children}</React.Suspense>;
}
