/*
 * @Author: kingford
 * @Date: 2021-04-08 16:57:54
 * @LastEditTime: 2021-04-08 17:02:31
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_en from './en.json';
import translation_zh from './zh.json';

const resources = {
  en: {
    translation: translation_en,
  },
  zh: {
    translation: translation_zh,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'zh',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
