import {
  IconSelectState,
  getIconSelectState,
  IconSelectFormValue,
  IOptionIconContents,
} from '@src/store/SelectIconState';
import { useEffect, useState } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ISelectIconOptionData } from '../types';

export function useSelectIcon(id: string, selectType: 'single' | 'multiple') {
  const setSelectState = useSetRecoilState(IconSelectState);
  const usedSelectState = useRecoilValue(getIconSelectState(id)); //현재 select 값
  const selectFormValue = useRecoilValue(IconSelectFormValue(id)); //현재 select에서 선택된 값
  const optionDataInit: ISelectIconOptionData = {
    label: '',
    layerSplit: '1',
    selectId: [],
    contents: [],
  };
  const [optionData, setOptionData] = useState(optionDataInit); //option ctrl data

  const setOptions = (
    id: string,
    layerSplit: '1' | '2' | '3',
    label: string,
    contents: IOptionIconContents[],
    defaultValue?: string,
  ) => {
    const newState = {
      id: id,
      isOpen: false,
      layerSplit: layerSplit,
      type: selectType ? selectType : 'single',
      label: label,
      selectId: defaultValue ? [defaultValue] : [],
      contents: contents,
    };

    setSelectState((prev) => [...prev, newState]);
  };

  //select opion 열기
  const onOpenDial = () => {
    setSelectState((prev) =>
      prev.map((obj) => (obj.id === id ? { ...obj, isOpen: true } : { ...obj })),
    );
  };

  //select option 선택했을 떄 처리
  const onClickOption = (optionId: string) => {
    switch (usedSelectState.type) {
      case 'single':
        setOptionData({ ...optionData, selectId: [optionId] });
        break;

      case 'multiple':
        console.log(optionId);
        const findIndex = optionData.selectId.indexOf(optionId);
        const temp =
          findIndex > 0
            ? optionData.selectId.filter((sid) => sid !== optionId)
            : [...optionData.selectId, optionId];
        console.log(temp);
        setOptionData({ ...optionData, selectId: temp });
        //selectid에 파라미터로 받은 id가 있는지 체크
        //있으면 selectId에서 제거
        //없으면 selectId에 추가
        break;

      default:
        break;
    }
  };

  //select option 팝업 닫기
  const onCloseOption = () => {
    setSelectState((prev) =>
      prev.map((obj) =>
        obj.id === id ? { ...obj, selectId: optionData.selectId, isOpen: false } : { ...obj },
      ),
    );
  };

  //option state setting
  const getContents = () => {
    setOptionData({
      label: usedSelectState.label,
      layerSplit: usedSelectState.layerSplit,
      selectId: usedSelectState.selectId,
      contents: usedSelectState.contents,
    });
  };

  //select state 삭제
  const onClear = () => {
    setSelectState((prev) => prev.filter((obj) => obj.id !== id));
  };

  useEffect(() => {
    if (
      usedSelectState.type === 'single' &&
      usedSelectState.isOpen &&
      usedSelectState.selectId !== optionData.selectId
    ) {
      onCloseOption();
    }
  }, [optionData]);

  return {
    selectFormValue,
    selectId: usedSelectState.selectId, //클릭한 option의 [id]
    isOpen: usedSelectState.isOpen, //option dial/popup open
    setOptions, //set option state
    onOpenDial, //set option dial/popup open
    onClear, //state 초기화

    optionData, //option data state
    getContents, //select open일 때 option 데이터 가져오기
    onClickOption, //option click ctrl
    onCloseOption, //set option dial/popup close
  };
}
