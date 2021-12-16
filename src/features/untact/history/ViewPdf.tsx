import styled from '@emotion/styled';
import { cssx } from '@src/theme';
import { Button } from '@src/components/button';
import { useLayer } from '@src/components/modal/useLayer';
import { Prescription } from '@src/features/untact/history/Prescription';

export function ViewPdf({ layerNum }: { layerNum: number }) {
  const { onOpenLayer } = useLayer();
  const onLayerHandler = (level: number) => {
    onOpenLayer({
      level: level,
      contents: {
        id: `layer${level}`,
        isOpen: true,
        title: `처방전 보기`,
        usePrev: false,
        useClose: true,
        contents: <Prescription />,
      },
    });
  };

  return (
    <ViewPdfStyled>
      <ViewPdfWrap>
        <div className="left">
          {/* <Button label={'X'} onClick={() => console.log('click')} /> */}
          <span className="route">sadknknkasd12sdl.pdf</span>
        </div>
        <div className="right">
          <Button label={'문서 보기'} onClick={() => onLayerHandler(layerNum)} />
        </div>
      </ViewPdfWrap>
    </ViewPdfStyled>
  );
}

const ViewPdfStyled = styled.div``;
const ViewPdfWrap = styled.div`
  ${cssx.flexBtw}
  .left {
    button {
      display: inline-block;
      margin-right: 10px;
    }
  }
`;
