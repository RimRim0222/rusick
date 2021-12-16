import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { completeData } from './complete.data';
import { RouteList } from '@src/routes/RouteList';

export function useComplete() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname, state } = location; // pathname : '/complete', state : {text : 'aaa'}

  // storybook 테스트용 패스
  const locationPath = pathname === '/iframe.html' ? '/passwordSearchComplete' : pathname;
  const locationState = pathname === '/iframe.html' ? { text: 'aaaa@address.com' } : state;
  // end

  const object = completeData[locationPath];
  const description = object.description.map((des) => ({ ...des, text: t(des.text) }));

  const buttons = object.button.map((des) => ({
    ...des,
    btnLabel: t(des.label),
    onComplete: des.onComplete ? des.onComplete : () => navigate(des.directPath as RouteList),
  }));

  return {
    icon: object.icon,
    title: t(object.title),
    description: locationState
      ? [{ type: 'strong', text: locationState.text }, ...description]
      : description,
    buttons,
  };
}
