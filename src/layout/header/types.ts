import { RouteList } from '@src/routes/RouteList';

export interface IHeaderList {
  key: RouteList;
  title: string;
  prevPath?: RouteList | HeaderStep;
  nextPath?: RouteList;
  onPrev?: () => void;
  onClose?: () => void;
  usePrev?: boolean;
  useClose?: boolean;
  step?: HeaderStep;
}

export interface IHeaderState {
  key: RouteList;
  step: HeaderStep;
}

export interface ILayerHeaderList {
  id: string;
  title: string;
  prevPath?: RouteList;
  nextPath?: RouteList;
  onPrev?: () => void;
  onClose?: () => void;
  usePrev?: boolean;
  useClose?: boolean;
}

export enum HeaderStep {
  STEP1 = 'step1',
  STEP2 = 'step2',
  STEP3 = 'step3',
  STEP4 = 'step4',
  STEP5 = 'step5',
  STEP6 = 'step6',
}
