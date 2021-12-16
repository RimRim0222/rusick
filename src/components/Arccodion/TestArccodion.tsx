import styled from '@emotion/styled';
import { useState } from 'react';
import { Arccodion } from './Arccodion';

const dummy = [
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
  { title: 'test', content: 'content' },
];

export function TestArccodion() {
  const [containerHeight, setHeight] = useState('');
  return (
    <TestStyled height={containerHeight}>
      {dummy.map((data, idx) => (
        <Arccodion
          key={idx}
          title={`${data.title}${idx}`}
          content={`${data.content}${idx}`}
          setContainerHeight={setHeight}
        />
      ))}
    </TestStyled>
  );
}

interface IContainer {
  height: string;
}
const TestStyled = styled.div<IContainer>`
  box-sizing: border-box;
  height: ${(props) => props.height};
  // scroll-behavior: smooth !important;
`;
