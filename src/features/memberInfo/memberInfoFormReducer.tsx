import { checkFormNext, checkObject, checkFormError } from '@utils/form';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { MemberInfoForm, IMemberInfoReducerState, IMemberInfoFormAction } from './types';
import { formName } from '@src/components/form/FormList';

const initMemberInfoFormReducer: IMemberInfoReducerState = {
  memberName: formName,
};

function memberInfoFormReducer(state: IMemberInfoReducerState, action: IMemberInfoFormAction) {
  switch (action.type) {
    case MemberInfoForm.MEMBER_NAME:
      return {
        ...state,
        memberName: checkObject(state.memberName, action.payload),
      };
    default: {
      return state;
    }
  }
}

export function useMemberInfoFormReducer() {
  const [memberInfoReducer, dispatchReducer] = useReducer(
    memberInfoFormReducer,
    initMemberInfoFormReducer,
  );
  const [hasError, setHasError] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const checkValidation = useCallback(() => {
    setHasError(checkFormError(memberInfoReducer));
    setCanNext(checkFormNext(memberInfoReducer));
  }, [memberInfoReducer]);

  useEffect(() => {
    checkValidation();
  }, [memberInfoReducer]);

  return {
    memberInfoReducer,
    dispatchReducer,
    checkValidation,
    hasError,
    canNext,
  };
}
