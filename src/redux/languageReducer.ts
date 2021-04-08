/*
 * @Author: kingford
 * @Date: 2021-04-07 21:17:20
 * @LastEditTime: 2021-04-08 17:18:53
 */
import i18n from 'i18next';
interface LanguageState {
  language: 'en' | 'zh';
  languageList: { name: string; code: string }[];
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    {
      name: '中文',
      code: 'zh',
    },
    {
      name: '英文',
      code: 'en',
    },
  ],
};

export default (state = defaultState, { type, payload }: { type: string; payload: any }) => {
  switch (type) {
    case 'change_language':
      i18n.changeLanguage(payload);
      return { ...state, language: payload };
    case 'add_language':
      return { ...state, languageList: [...state.languageList, payload] };
    default:
      return state;
  }
};
