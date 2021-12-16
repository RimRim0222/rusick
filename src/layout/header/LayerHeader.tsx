import styled from '@emotion/styled';
import { Icon, ICON_LIST } from '@src/components/icon';
import { useLayer } from '@src/components/modal/useLayer';

interface ILayerHeader {
  level: number;
}

export function LayerHeader({ level }: ILayerHeader) {
  // 왼쪽 아이템
  // 오른쪽 아이템

  const { selectedHeader, handlePrevClick, handleCloseClick } = useLayer(level);

  const { id, usePrev = false, useClose = true, title } = selectedHeader;

  return (
    <PopupHeaderStyled>
      <PrefixWrapper>
        {usePrev && (
          <span onClick={handlePrevClick}>
            <Icon icon={ICON_LIST['arrow_back_01']} width={'30px'} />
          </span>
        )}
      </PrefixWrapper>
      <TitleStyled>{title}</TitleStyled>
      <SurffixWrapper>
        {useClose && (
          <span onClick={handleCloseClick}>
            <Icon icon={ICON_LIST['x_60x60']} width={'30px'} />
          </span>
        )}
      </SurffixWrapper>
    </PopupHeaderStyled>
  );
}

LayerHeader.defaultProps = {
  label: 'header Name',
  hasPrev: true,
  hasClose: true,
};

const PopupHeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  height: 50px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border_stroke};
  ${(props) => props.theme.fonts.h2_1_B};
`;

const PrefixWrapper = styled.div`
  margin: auto 0px;
`;
const SurffixWrapper = styled.div`
  margin: auto 0px;
`;
const TitleStyled = styled.div`
  margin: auto;
`;
