import styled from '@emotion/styled';
import { menuText } from './text';
import { ICON_LIST } from '@components/icon';
import { useTranslation } from 'react-i18next';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { LoginState } from '@src/store/LoginState';
import { AlertState } from '@src/store/AlertState';
import { RouteList } from '@src/routes/RouteList';
import { useNavigate } from 'react-router';

export function useMenu() {
  const { t } = useTranslation();
  const loginState = useRecoilValue(LoginState);
  const setAlertState = useSetRecoilState(AlertState);
  const navigate = useNavigate();

  const untactItemProps = [
    {
      image: ICON_LIST['inform_01'],
      title: menuText.reserveDiseaseTitle,
      desc: menuText.reserveDiseaseDesc,
      onClcik: () => {
        /*증상/질환으로 예약 페이지로 이동 */
        console.log('증상/질환으로 예약');
      },
    },
    {
      image: ICON_LIST['inform_01'],
      title: menuText.reserveSubjectTitle,
      desc: menuText.reserveSubjectDesc,
      onClick: () => {
        /*진료과로 예약 페이지로 이동 */
        console.log('진료과로 예약');
      },
    },
  ];

  const serviceCenterItemProps = [
    {
      image: ICON_LIST['menu_03'],
      title: menuText.noticeTitle,
      onClick: () => {
        /*공지사항 페이지로 이동*/
        console.log('공지사항');
      },
    },
    {
      image: ICON_LIST['menu_04'],
      title: menuText.askTitle,
      onClick: () => {
        /*일반문의 페이지로 이동*/
        console.log('일반문의');
      },
    },
    {
      image: ICON_LIST['menu_05'],
      title: menuText.qAndATitle,
      onClick: () => {
        /*Q&A 페이지로 이동*/
        console.log('Q&A');
      },
    },
    {
      image: ICON_LIST['menu_06'],
      title: menuText.serviceTermsTitle,
      onClick: () => {
        /*서비스 이용약관 페이지로 이동*/
        console.log('서비스 이용약관');
      },
    },
  ];

  const SettingItemProps = [
    {
      image: ICON_LIST['inform_01'],
      title: menuText.settingsTitle,
      onClick: () => {
        /*설정 페이지로 이동*/
        console.log('설정');
      },
    },
    {
      image: ICON_LIST['person_30x30'],
      title: menuText.myInfoTitle,
      onClick: () => {
        if (loginState.isLogin) {
          navigate(RouteList.MEMBER_INFO);
          return;
        }
        setAlertState((prevState) => {
          return {
            ...prevState,
            isOpen: true,
            message: [menuText.alertRequestLogin, menuText.alertAskLogin],
            useInput: false,
            isSingleBtn: false,
          };
        });
      },
    },
  ];

  const noticeCenterOnClick = () => {
    /*알림 센터 페이지로 이동*/
    console.log('알림 센터');
  };

  return { t, untactItemProps, serviceCenterItemProps, SettingItemProps, noticeCenterOnClick };
}
