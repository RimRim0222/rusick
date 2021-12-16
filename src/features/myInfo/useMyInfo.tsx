import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';
import { LoginState } from '@src/store/LoginState';
import { ICON_LIST } from '@src/components/icon';
import { myInfoText } from './myInfoText';

import { useNavigate } from 'react-router-dom';
import { RouteList } from '@src/routes/RouteList';
import { LNG_KEY } from '@src/i18n';
import { AlertState } from '@src/store/AlertState';

export function useMyInfo() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isAuth, isLogin } = useRecoilValue(LoginState);
  const setLoginState = useSetRecoilState(LoginState);
  const setAlertState = useSetRecoilState(AlertState);

  //myInfoHeader
  // userName store에서 가져오기
  const userName = isLogin ? '테스터 계정' : '-';
  const loginButtonLabel = isLogin ? myInfoText.logout : myInfoText.login;
  const authButtonLabel = isAuth ? myInfoText.verifyComplete : myInfoText.verifyRequest;

  const handleVerify = () => {
    if (!isAuth) {
      return navigate(RouteList.MEMBER_AUTH_SELECT, { state: RouteList.MEMBER_MYINFO });
    }
  };

  const handleLogin = () => {
    if (isLogin) {
      setLoginState((prevState) => {
        return { ...prevState, isLogin: !prevState.isLogin };
      });
    } else {
      return navigate(RouteList.LOGIN, { state: RouteList.MEMBER_MYINFO });
    }
  };

  const handleMemberMyInfo = () => {
    if (isLogin && isAuth) return navigate(RouteList.MEMBER_INFO);
    const message = !isLogin
      ? [LNG_KEY.ALERT_04, LNG_KEY.ALERT_041]
      : [LNG_KEY.ALERT_06, LNG_KEY.ALERT_061];

    setAlertState((prevState) => {
      return {
        ...prevState,
        isOpen: true,
        message: message,
        onConfirm: () => {
          navigate(RouteList.MEMBER_INFO, { state: RouteList.MEMBER_INFO });
        },
      };
    });
  };

  //myInfoMainMenu
  const mainMenuItemProps = [
    {
      image: ICON_LIST['mymenu_01'],
      title: myInfoText.userInfo,
      onClick: () => {
        handleMemberMyInfo();
      },
    },
    {
      image: ICON_LIST['mymenu_02'],
      title: myInfoText.medicalInfo,
      onClick: () => {
        //건강정보로 이동
        console.log('건강정보');
      },
    },
    {
      image: ICON_LIST['mymenu_03'],
      title: myInfoText.paymentSetting,
      onClick: () => {
        //결제수단 관리로 이동
        console.log('결제수단 관리');
      },
    },
  ];

  //myInfoSubMenu
  const subMenuItemProps = [
    {
      title: myInfoText.untactReservatoionHistory,
      onClick: () => {
        //비대면 진료 예약 내역으로 이동
        console.log('비대면 진료 예약 내역');
      },
    },
    {
      title: myInfoText.untactClinicHistory,
      onClick: () => {
        //비대면 진료 기록 내역으로 이동
        console.log('비대면 진료 기록 내역');
      },
    },
  ];
  const subMenuIcon = ICON_LIST['arrow_58x58'];

  return {
    t,
    userName,
    loginButtonLabel,
    authButtonLabel,
    isLogin,
    handleVerify,
    handleLogin,
    mainMenuItemProps,
    subMenuItemProps,
    subMenuIcon,
  };
}
