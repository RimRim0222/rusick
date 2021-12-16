import styled from '@emotion/styled';

export function TestInput({ id }: { id: string }) {
  const onClickHandler = () => {
    console.log(id);
  };
  return (
    <TestInputStyled>
      <input type="file" onClick={onClickHandler} />
    </TestInputStyled>
  );
}

const TestInputStyled = styled.div``;
