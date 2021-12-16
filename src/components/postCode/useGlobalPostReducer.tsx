import { checkFormNext, checkObject, checkFormError } from '@utils/form';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { GlobalPostForm } from '.';
import { formDetailAddress, formPostCode } from '@src/components/form/FormList';
import { IGlobalPostReducerState, IGlobalPostFormAction } from './types';

const initGlobalPostReducer: IGlobalPostReducerState = {
  postCode: formPostCode,
  address: formDetailAddress,
  detailAddress: formDetailAddress,
};

function globalPostReducer(state: IGlobalPostReducerState, action: IGlobalPostFormAction) {
  switch (action.type) {
    case GlobalPostForm.INIT:
      return {
        ...state,
        postCode: checkObject(state.postCode, action.payload.postCode),
        address: checkObject(state.address, action.payload.address),
      };
    case GlobalPostForm.POST_CODE:
      return {
        ...state,
        postCode: checkObject(state.postCode, action.payload),
      };
    case GlobalPostForm.ADDRESS:
      return {
        ...state,
        address: checkObject(state.address, action.payload),
      };
    case GlobalPostForm.DETAIL_ADDRESS:
      return {
        ...state,
        detailAddress: checkObject(state.detailAddress, action.payload),
      };
    default: {
      return state;
    }
  }
}

export function useGlobalPostReducer() {
  const [globalPost, dispatchGlobalPost] = useReducer(globalPostReducer, initGlobalPostReducer);
  const [hasError, setHasError] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const checkValidation = useCallback(() => {
    setHasError(checkFormError(globalPost));
    setCanNext(checkFormNext(globalPost));
  }, [globalPost]);

  useEffect(() => {
    checkValidation();
  }, [globalPost]);

  return {
    globalPost,
    dispatchGlobalPost,
    checkValidation,
    hasError,
    canNext,
  };
}
