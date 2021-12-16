import styled from '@emotion/styled';
import { LayerHeader } from '@src/layout/header/LayerHeader';
import ReactModal from 'react-modal';
import { ILayerLayout } from './types';
import { useLayer } from './useLayer';

function LayerLayout({ isOpen, level, children }: ILayerLayout) {
  const zIndex = level === 1 ? 101 : level === 2 ? 102 : 103;

  const customStyle: any = {
    ...customStyles,
    content: { ...customStyles.content, zIndex },
  };

  return (
    <ReactModal isOpen={isOpen} style={customStyle}>
      <LayerHeader level={level} />
      <ContentsWrapper>{children}</ContentsWrapper>
    </ReactModal>
  );
}

export function Layer1() {
  const { selectedLayer } = useLayer(1);
  const { isOpen, contents } = selectedLayer;

  return (
    <LayerLayout isOpen={isOpen} level={1}>
      {contents}
    </LayerLayout>
  );
}

export function Layer2() {
  const { selectedLayer } = useLayer(2);
  const { isOpen, contents } = selectedLayer;

  return (
    <LayerLayout isOpen={isOpen} level={2}>
      {contents}
    </LayerLayout>
  );
}

export function Layer3() {
  const { selectedLayer } = useLayer(3);
  const { isOpen, contents } = selectedLayer;

  return (
    <LayerLayout isOpen={isOpen} level={3}>
      {contents}
    </LayerLayout>
  );
}

const customStyles = {
  content: {
    width: '100%',
    height: '100vh',
    top: 0,
    left: 0,
    overflowY: 'auto',
    backgroundColor: '#fff',
    padding: 0,
  },
};

const ContentsWrapper = styled.div`
  overflow-y: auto;
  height: calc(100vh - 51px);
`;
