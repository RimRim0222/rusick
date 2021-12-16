import { RouteList } from '@src/routes/RouteList';
import { HeaderParams } from '@src/store/HeaderState';
import isEmpty from 'lodash/isEmpty';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { IHeaderList, HeaderStep } from './types';
import { headerList } from './headerList';

const initHeaderData: IHeaderList = { key: RouteList.MAIN, title: '' };

export function useHeaderState() {
  const [headerParam, setHeaderParam] = useRecoilState(HeaderParams);
  const [currentHeader, setCurrentHeader] = useState<IHeaderList>(initHeaderData);

  const handleCurrentHeader = useCallback(() => {
    const selectedHeader = headerList.find((header) => {
      if (header.step && header.step === headerParam.step && header.key === headerParam.key) {
        return true;
      }
      if (!header.step && header.key === headerParam.key) {
        return true;
      }
      return false;
    });

    if (!selectedHeader) {
      return setCurrentHeader(initHeaderData);
    }

    const { useClose, usePrev } = selectedHeader;

    setCurrentHeader({
      ...selectedHeader,
      useClose: !!useClose,
      usePrev: isEmpty(usePrev) ? true : usePrev,
    });
  }, [headerParam]);

  useEffect(() => {
    handleCurrentHeader();
  }, [headerParam]);

  const setHeaderStep = (step: HeaderStep) => {
    setHeaderParam((prevParam) => {
      return { ...prevParam, step };
    });
  };

  const setHeaderKey = (key: RouteList) => {
    setHeaderParam((prevParam) => {
      return { ...prevParam, key };
    });
  };

  const setHeaderData = (key: RouteList, step: HeaderStep) => {
    setHeaderParam({ key, step });
  };

  return { currentHeader, setHeaderStep, setHeaderKey, setHeaderData };
}

export function useCurrentStep(currentPath: RouteList) {
  const headerParam = useRecoilValue(HeaderParams);
  return currentPath === headerParam.key ? headerParam.step : HeaderStep.STEP1;
}
