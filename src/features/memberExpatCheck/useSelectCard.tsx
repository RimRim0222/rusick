import { useState } from 'react';
import { useNavigate } from 'react-router';
import { RouteList } from '@src/routes/RouteList';
import { useRecoilState } from 'recoil';
import { LoginState, MEMBER_TYPE } from '@store/LoginState';

export function useSelectCard() {
  const [activeId, setActiveId] = useState<string>();
  const navigate = useNavigate();
  const [loginState, setLoginState] = useRecoilState(LoginState);

  const handleAuthSubmit = () => {
    /** activeId value check
     * NATIVE : 내국인 인증
     * EXPAT : 재외국민 인증
     */
    if (activeId === MEMBER_TYPE.EXPAT) {
      return navigate(RouteList.MEMBER_AUTH_EXPAT);
    }
  };

  const handleCardOnClick = (id: string) => {
    setActiveId(id);
    setLoginState((prevState) => {
      return { ...prevState, memberType: id as MEMBER_TYPE };
    });
  };

  return {
    activeId,
    handleAuthSubmit,
    handleCardOnClick,
  };
}
