import { ILayerHeaderList } from '@src/layout/header';
import {
  ILayerState,
  initLayerState,
  LayerState1,
  LayerState2,
  LayerState3,
} from '@src/store/LayerState';
import { useRecoilState } from 'recoil';

interface ILayerOpen {
  level: number;
  contents: ILayerState;
}

const defaultHeaderData: ILayerHeaderList = {
  id: '',
  title: '',
  usePrev: false,
  useClose: false,
};

export function useLayer(level?: number) {
  const [layer1, setLayer1] = useRecoilState(LayerState1);
  const [layer2, setLayer2] = useRecoilState(LayerState2);
  const [layer3, setLayer3] = useRecoilState(LayerState3);

  const initState = { ...initLayerState };

  const selectedLayer = level === 1 ? layer1 : level === 2 ? layer2 : layer3;
  const selectedHeader = {
    id: selectedLayer.id,
    title: selectedLayer.title,
    usePrev: selectedLayer.usePrev,
    useClose: selectedLayer.useClose,
  };

  const handlePrevClick = () => {
    if (selectedLayer.onClickPrev) selectedLayer.onClickPrev();
  };

  const handleCloseClick = () => {
    if (level) {
      if (selectedLayer.onClickClose) {
        selectedLayer.onClickClose();
      } else {
        if (level < 2) {
          setLayer1(initState);
        }
        if (level < 3) {
          setLayer2(initState);
        }
        setLayer3(initState);
      }
    }
  };

  const onOpenLayer = ({ level, contents }: ILayerOpen) => {
    if (level === 1) {
      setLayer1({ ...contents });
    }
    if (level === 2) {
      setLayer2({ ...contents });
    }
    if (level === 3) {
      setLayer3({ ...contents });
    }
  };

  const allLayerClear = () => {
    setLayer1(initState);
    setLayer2(initState);
    setLayer3(initState);
  };

  return {
    selectedLayer,
    selectedHeader: selectedHeader ? selectedHeader : defaultHeaderData,
    onOpenLayer,
    handlePrevClick,
    handleCloseClick,
    allLayerClear,
  };
}
