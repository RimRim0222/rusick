import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { I18N_LNG } from './types';
import { MSG_LIST, MSG } from './message';
import { TEXT_LIST, TEXT } from './text';
import { LABEL_LIST, LABEL } from './label';
import { TERMS_LIST, TERMS } from './terms';
import { TITLE_LIST, TITLE } from './title';
import { ADMIN_LIST, ADMIN } from './admin';

export const LNG_KEY = Object.freeze({
  ...TEXT,
  ...MSG,
  ...LABEL,
  ...TERMS,
  ...TITLE,
  ...ADMIN,
});

export type ILNG = keyof typeof LNG_KEY;

const resources = {
  [I18N_LNG.EN]: {
    translation: {
      ...MSG_LIST.EN,
      ...TEXT_LIST.EN,
      ...LABEL_LIST.EN,
      ...TERMS_LIST.EN,
      ...TITLE_LIST.EN,
      ...ADMIN_LIST.EN,
    },
  },
  [I18N_LNG.KO]: {
    translation: {
      ...MSG_LIST.KO,
      ...TEXT_LIST.KO,
      ...LABEL_LIST.KO,
      ...TERMS_LIST.KO,
      ...TITLE_LIST.KO,
      ...ADMIN_LIST.KO,
    },
  },
};

i18n.use(initReactI18next).init({ resources, lng: I18N_LNG.KO });

export default i18n;
