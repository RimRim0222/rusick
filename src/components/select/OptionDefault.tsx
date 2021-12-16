import styled from '@emotion/styled';
import { ISelectOptionDefault } from '.';

export function OptionDefault({ isOpen, optionData, onClick }: ISelectOptionDefault) {
  const { selectId, contents } = optionData;

  const onClickHandler = (id: string) => {
    onClick(id);
  };

  return (
    <>
      {isOpen && (
        <OptionDefaultStyled>
          <ul>
            {contents.map((item, idx) => {
              return (
                <OpionItemStyles key={item.id} onClick={() => onClickHandler(item.id)}>
                  {item.text}
                </OpionItemStyles>
              );
            })}
          </ul>
        </OptionDefaultStyled>
      )}
    </>
  );
}

const OptionDefaultStyled = styled.div`
  border: 1px solid black;
  z-index: 10;
  width: 100%;
  max-height: 250px;
  overflow-y: auto;
  background-color: #fff;
  box-sizing: border-box;
`;

const OpionItemStyles = styled.div`
  cursor: pointer;
`;
