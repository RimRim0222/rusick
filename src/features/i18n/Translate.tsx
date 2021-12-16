import { LNG_KEY, I18N_LNG } from '@src/i18n';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Ii18nProps {
  /**
   * Lng Props
   */
  lng: I18N_LNG;
}

export function Translate({ lng }: Ii18nProps) {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng]);

  return (
    <div>
      <span>language: {i18n.language}</span>
      <h1>{t(LNG_KEY.ALERT_01)}</h1>
    </div>
  );
}
