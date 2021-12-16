import { LNG_KEY } from '@src/i18n';
import { initPopupState, PopupState } from '@src/store/PopupState';
import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState } from 'recoil';
import { usePatientSocket } from './usePatientSocket';

export function PatientCallPopup() {
  const { t } = useTranslation();
  const setPopupState = useSetRecoilState(PopupState);
  const { offerCareInfo, handleOfferConfirm } = usePatientSocket();

  const onclickConfirm = () => {
    setPopupState(initPopupState);
    handleOfferConfirm();
  };

  const popupContents = (
    <div>
      <ul>
        <li>홍길동 회원님</li>
        <li>
          부민병원/소화기내과/진료의 정명의 님께서 진료실 입장을 요청하였습니다.
          <br />
          아래 버튼을 선택하셔서 진료실에 입장해 주시기 바랍니다.
        </li>
      </ul>
      <button onClick={onclickConfirm}>진료실 입장하기</button>
    </div>
  );

  const setPopup = () => {
    setPopupState({
      id: 'popup1',
      isOpen: true,
      isLabel: true,
      label: `[${t(LNG_KEY.UNTACT_RESERVATION_POPUP_TITLE)}]`,
      children: popupContents,
    });
  };

  useEffect(() => {
    if (!isEmpty(offerCareInfo)) setPopup();
  }, [offerCareInfo]);

  return null;
}
