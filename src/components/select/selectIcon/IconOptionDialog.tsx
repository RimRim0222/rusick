import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { cssx } from '@src/theme';
import { useEffect } from 'react';

import ReactModal from 'react-modal';
import { Icon, ICON_LIST } from '../../icon';
import { useSelectIcon } from './useSelectIcon';

export function IconOptionDialog({ id }: { id: string }) {
  const { isOpen, optionData, getContents, onClickOption, onCloseOption } = useSelectIcon(
    id,
    'single',
  );
  const { label, layerSplit, selectId, contents } = optionData;

  const onClickHandler = (id: string) => {
    onClickOption(id);
  };

  const onCloseHandler = () => {
    onCloseOption();
  };

  useEffect(() => {
    if (isOpen) getContents();
  }, [isOpen]);

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <IconOptionDialogStyled>
        <HeaderWrapper>
          {label}
          <IconWrapper onClick={onCloseHandler}>
            <Icon icon={ICON_LIST.x_60x60} width="30px" />
          </IconWrapper>
        </HeaderWrapper>

        <ContentsWrapper>
          <ContentsStyled layer={Number(layerSplit)}>
            {contents.map((item, idx) => {
              const activeCheck = selectId.find((id) => id === item.id);
              return (
                <ItemStyles
                  key={item.id}
                  onClick={() => onClickHandler(item.id)}
                  active={!!activeCheck}
                >
                  {item.icon}
                </ItemStyles>
              );
            })}
          </ContentsStyled>
        </ContentsWrapper>
      </IconOptionDialogStyled>
    </ReactModal>
  );
}

IconOptionDialog.defaultProps = {
  label: '',
};

//modal 내부 전체 영역
const IconOptionDialogStyled = styled.div`
  ${cssx.flexEndR}
  flex-wrap: wrap;
`;

//헤더 영역
const HeaderWrapper = styled.div`
  width: 100%;
  height: 65px;
  padding: 30px 0 11px;
  margin-bottom: 20px;
  text-align: center;
  ${(props) => props.theme.fonts.h2_1_B}
`;

//헤더 내 x 아이콘 wrapper
const IconWrapper = styled.span`
  float: right;
  margin-top: -2px;
`;

// scroll. list contents wrapper
const ContentsWrapper = styled.div`
  max-height: 371px; /** height값 수동 계산함 */
  width: 100%;
  overflow-y: scroll;
`;

// list contents inner
const ContentsStyled = styled.div<{ layer: number }>`
  ${({ layer }) => layerLevelStyles[layer]}
`;

// select list - 1줄, 2줄, 3줄
const layerLevelStyles: { [key: number]: SerializedStyles } = {
  1: css`
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    > div {
      height: 50px;
      &:first-of-type ~ div {
        margin-top: 18px;
      }
    }
  `,
  2: css`
    ${cssx.flexBtw}
    flex-direction: row;
    flex-wrap: wrap;
    > div {
      width: calc(50% - 5px);
      &:nth-of-type(2) ~ div {
        margin-top: 18px;
      }
    }
  `,
  3: css`
    ${cssx.flexStart}
    flex-direction: row;
    flex-wrap: wrap;
    > div {
      width: calc(33.3% - 7px);
      height: 42px;
      margin-left: 7px;
      &:nth-of-type(3) ~ div {
        margin-top: 18px;
      }
      &:first-of-type,
      &:nth-of-type(3n + 1) {
        margin-left: 0;
      }
    }
  `,
};

// 리스트 style - <div>option1</div>
const ItemStyles = styled.div<{ active: boolean }>`
  ${cssx.flexCenter}
  height: 50px;
  background: #fff;
  border: 1px solid #d8d8d8;
  color: #939393;
  border-radius: 25px;
  ${(props) => props.theme.fonts.bd2_B}

  ${(props) => {
    const fonts = props.theme.fonts;
    if (props.active) {
      //acitve
      return css`
        background: #f0faff;
        border: 1px solid #4ac6ff;
        color: #4ac6ff;
      `;
    } else {
      //none active
    }
  }}
`;

//modal layout style
const customStyles = {
  overlay: {
    overflow: 'hidden',
    zIndex: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'block',
  },
  content: {
    top: 'auto',
    left: '0',
    right: '0',
    bottom: '0',
    borderRadius: '14px 14px 0 0',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.16)',
    background: 'white',
    width: '100%',
    maxHeight: '500px',
    overflow: 'hidden',
    padding: '0 20px 30px',
  },
};
