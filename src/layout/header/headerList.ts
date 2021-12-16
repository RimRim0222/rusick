import { LNG_KEY } from '@src/i18n';
import { RouteList } from '@src/routes/RouteList';
import { IHeaderList, HeaderStep, ILayerHeaderList } from './types';

export const headerList: IHeaderList[] = [
  {
    key: RouteList.ALL_MENU,
    prevPath: RouteList.MAIN,
    title: LNG_KEY.HEADER_ALL_MENU,
  },
  {
    key: RouteList.LOGIN,
    prevPath: RouteList.MAIN,
    title: LNG_KEY.HEADER_LOGIN,
    step: HeaderStep.STEP1,
  },
  {
    key: RouteList.MEMBER_JOIN,
    prevPath: RouteList.LOGIN,
    title: LNG_KEY.HEADER_TERMS,
    step: HeaderStep.STEP1,
  },
  {
    key: RouteList.MEMBER_JOIN,
    prevPath: HeaderStep.STEP1,
    title: LNG_KEY.HEADER_MEMBER_JOIN_EMAIL,
    step: HeaderStep.STEP2,
  },
  {
    key: RouteList.JOIN_COMPLETE,
    prevPath: RouteList.MAIN,
    title: LNG_KEY.HEADER_MEMBER_JOIN_COMPLETE,
  },
  {
    key: RouteList.MEMBER_AUTH_SELECT,
    prevPath: RouteList.MAIN,
    title: LNG_KEY.HEADER_MEMBER_AUTH_SELECT,
  },
  {
    key: RouteList.MEMBER_AUTH_EXPAT,
    prevPath: RouteList.MEMBER_AUTH_SELECT,
    title: LNG_KEY.HEADER_MEMBER_AUTH_EXPAT,
  },
  {
    key: RouteList.MEMBER_MYINFO,
    prevPath: RouteList.MAIN,
    title: LNG_KEY.HEADER_MEMBER_MYINFO,
  },
  {
    key: RouteList.MEMBER_INFO,
    prevPath: RouteList.MAIN,
    title: LNG_KEY.HEADER_MEMBER_INFO,
  },

  {
    key: RouteList.UNTACT_RESERVATION_SYMPTOM,
    prevPath: RouteList.MAIN,
    title: LNG_KEY.HEADER_UNTACT_RESERVATION,
    step: HeaderStep.STEP1,
  },
  {
    key: RouteList.UNTACT_RESERVATION_SYMPTOM,
    prevPath: HeaderStep.STEP1,
    title: LNG_KEY.HEADER_UNTACT_RESERVATION,
    step: HeaderStep.STEP2,
  },
  {
    key: RouteList.UNTACT_RESERVATION_SYMPTOM,
    prevPath: HeaderStep.STEP2,
    title: LNG_KEY.HEADER_UNTACT_RESERVATION,
    step: HeaderStep.STEP3,
  },
  {
    key: RouteList.UNTACT_RESERVATION_SYMPTOM,
    prevPath: HeaderStep.STEP3,
    title: LNG_KEY.HEADER_UNTACT_RESERVATION,
    step: HeaderStep.STEP4,
  },
  {
    key: RouteList.UNTACT_RESERVATION_SYMPTOM,
    prevPath: HeaderStep.STEP4,
    title: LNG_KEY.HEADER_UNTACT_RESERVATION,
    step: HeaderStep.STEP5,
  },

  {
    key: RouteList.UNTACT_RESERVATION_SUBJECT,
    prevPath: RouteList.MAIN,
    title: LNG_KEY.HEADER_UNTACT_RESERVATION,
    step: HeaderStep.STEP1,
  },
  {
    key: RouteList.UNTACT_RESERVATION_SUBJECT,
    prevPath: HeaderStep.STEP1,
    title: LNG_KEY.HEADER_UNTACT_RESERVATION,
    step: HeaderStep.STEP2,
  },
  {
    key: RouteList.UNTACT_RESERVATION_SUBJECT,
    prevPath: HeaderStep.STEP2,
    title: LNG_KEY.HEADER_UNTACT_RESERVATION,
    step: HeaderStep.STEP3,
  },
  {
    key: RouteList.UNTACT_RESERVATION_SUBJECT,
    prevPath: HeaderStep.STEP3,
    title: LNG_KEY.HEADER_UNTACT_RESERVATION,
    step: HeaderStep.STEP4,
  },
  {
    key: RouteList.UNTACT_RESERVATION_SUBJECT,
    prevPath: HeaderStep.STEP4,
    title: LNG_KEY.HEADER_UNTACT_RESERVATION,
    step: HeaderStep.STEP5,
  },
];

export const layerHeaderList: ILayerHeaderList[] = [
  {
    id: '',
    title: '',
  },
];
