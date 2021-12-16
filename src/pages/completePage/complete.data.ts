import { ICompleteData } from './types';
import { BUTTON_THEME } from '@src/components/button/types';
import { ICON_LIST } from '@src/components/icon';
import { LNG_KEY } from '@src/i18n';
import { RouteList } from '@src/routes/RouteList';

export const completeData: ICompleteData = {
  //비밀번호 찾기 - 이메일 인증전송 완료
  '/passwordSearchComplete': {
    icon: ICON_LIST.mymenu_01,
    title: LNG_KEY.USER_PW_SEARCH_COMPLETE_TITLE,
    description: [
      {
        type: 'normal',
        text: LNG_KEY.USER_PW_SEARCH_COMPLETE_CONTENT_01,
      },
      {
        type: 'normal',
        text: LNG_KEY.USER_PW_SEARCH_COMPLETE_CONTENT_02,
      },
    ],
    button: [
      {
        label: LNG_KEY.BTN_REPEAT_SEND,
        theme: BUTTON_THEME.DEFAULT,
        directPath: null,
        onComplete: () => console.log('인증 메일 재발송'),
      },
    ],
  },
  // 회원가입 완료
  '/joinComplete': {
    icon: ICON_LIST.mymenu_01,
    title: LNG_KEY.HEADER_MEMBER_JOIN_COMPLETE,
    description: [
      {
        type: 'strong',
        text: LNG_KEY.JOIN_COMPLETE_SUB_TITLE,
      },
      {
        type: 'normal',
        text: LNG_KEY.JOIN_COMPLETE_QT,
      },
    ],
    button: [
      {
        label: LNG_KEY.BTN_INFO_NOW,
        theme: BUTTON_THEME.DEFAULT,
        directPath: RouteList.MEMBER_AUTH_SELECT,
      },
      { label: LNG_KEY.BTN_INFO_LATER, theme: BUTTON_THEME.DEFAULT, directPath: RouteList.MAIN },
    ],
  },
  // 회원정보 수정 완료 -> 결제정보 입력 권유
  '/modifyCompleteSetPayment': {
    icon: ICON_LIST.icn_modify_complete,
    title: LNG_KEY.UPDATE_COMPLETE_MAIN_TITLE,
    description: [
      {
        type: 'strong',
        text: LNG_KEY.UPDATE_COMPLETE_SUB_TITLE,
      },
      {
        type: 'normal',
        text: LNG_KEY.UPDATE_COMPLETE_QT_02,
      },
    ],
    button: [
      { label: LNG_KEY.BTN_INFO_NOW, theme: BUTTON_THEME.DEFAULT, directPath: RouteList.MAIN },
      { label: LNG_KEY.BTN_INFO_LATER, theme: BUTTON_THEME.DEFAULT, directPath: RouteList.MAIN },
    ],
  },
  // 회원정보 수정 완료
  '/modifyComplete': {
    icon: ICON_LIST.icn_modify_complete,
    title: LNG_KEY.UPDATE_COMPLETE_MAIN_TITLE,
    description: [
      {
        type: 'strong',
        text: LNG_KEY.UPDATE_COMPLETE_SUB_TITLE,
      },
    ],
    button: [{ label: LNG_KEY.CHECK, theme: BUTTON_THEME.DEFAULT, directPath: RouteList.MAIN }],
  },
  '/untactReservationComplete': {
    icon: ICON_LIST.icn_modify_complete,
    title: LNG_KEY.UNTACT_RESERVATION_COMPLETE_01,
    description: [
      {
        type: 'strong',
        text: LNG_KEY.UNTACT_RESERVATION_COMPLETE_02,
      },
    ],
    button: [{ label: LNG_KEY.CHECK, theme: BUTTON_THEME.DEFAULT, directPath: RouteList.MAIN }],
  },
};
