import { useEffect, useState } from 'react';

export function useSocialHistoryForm() {
  //음주,흡연 여부 세팅
  const [isDrinking, setDrinking] = useState(false);
  const [isSmoking, setSmoking] = useState(false);

  //추가 옵션 세팅
  const drinkingAmountInitState = ['1회', '1잔'];
  const smokingAmountInitState = ['1개피', '1년'];
  const [drinkingAmountState, setDrinkingAmount] = useState(drinkingAmountInitState);
  const [smokingAmountState, setSmokingAmount] = useState(smokingAmountInitState);

  //사회력 정보 종합
  const socialInfoInitState = {
    drinkingOrnot: '음주안함',
    drinkingAmount: '',
    smokingOrNot: '흡연안함',
    smokingAmount: '',
  };
  const [socialInfo, setSocialInfo] = useState(socialInfoInitState);

  useEffect(() => {
    if (isDrinking) {
      setSocialInfo((state) => {
        return { ...state, drinkingAmount: drinkingAmountState.join('/') };
      });
    }
    if (isSmoking) {
      setSocialInfo((state) => {
        return { ...state, smokingAmount: smokingAmountState.join('/') };
      });
    }
    if (!isDrinking) {
      setSocialInfo((state) => {
        return { ...state, drinkingAmount: '' };
      });
    }
    if (!isSmoking) {
      setSocialInfo((state) => {
        return { ...state, smokingAmount: '' };
      });
    }
  }, [isDrinking, isSmoking, drinkingAmountState, smokingAmountState]);

  //음주여부에 따라 추가 옵션창 열고 닫기
  const changeDrinkingOrNot = (val: string) => {
    setSocialInfo((state) => {
      return { ...state, drinkingOrnot: val };
    });
    if (val === '음주안함') {
      setDrinking(false);
      return;
    }
    setDrinking(true);
  };

  //음주 추가 옵션 핸들링
  const changeDrinkingTimes = (val: string) => {
    setDrinkingAmount((state) => [val, state[1]]);
  };

  const changeDrinkingAmount = (val: string) => {
    setDrinkingAmount((state) => [state[0], val]);
  };

  //흡연여부에 따라 추가 옵션창 열고 닫기
  const changeSmokingOrNot = (val: string) => {
    setSocialInfo((state) => {
      return { ...state, smokingOrNot: val };
    });
    if (val === '금연') {
      setSmoking(false);
      return;
    }
    setSmoking(true);
  };

  //흡연 추가 옵션 핸들링
  const changeSmokingTimes = (val: string) => {
    setSmokingAmount((state) => [val, state[1]]);
  };

  const changeSmokingAmount = (val: string) => {
    setSmokingAmount((state) => [state[0], val]);
  };

  const handleNextButton = () => {
    console.log(socialInfo);
    console.log('건강정보 입력 완료 페이지로 이동');
  };

  return {
    isDrinking,
    isSmoking,
    changeDrinkingOrNot,
    changeDrinkingTimes,
    changeDrinkingAmount,
    changeSmokingOrNot,
    changeSmokingTimes,
    changeSmokingAmount,
    handleNextButton,
  };
}
