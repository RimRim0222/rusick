import styled from '@emotion/styled';

export function AddTitle({ title, desc }: { title: string; desc?: string }) {
  return (
    <AddTitleStyled>
      <TitleWrapper>{title}</TitleWrapper>
      {desc && <DescWrapper>{desc}</DescWrapper>}
    </AddTitleStyled>
  );
}

const AddTitleStyled = styled.div``;
const TitleWrapper = styled.div``;
const DescWrapper = styled.div``;
