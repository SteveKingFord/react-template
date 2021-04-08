/*
 * @Author: kingford
 * @Date: 2021-04-08 11:28:30
 * @LastEditTime: 2021-04-08 18:26:35
 */
import React, { useState } from 'react';
import store from '../../redux/store';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const storeState = store.getState();
  const [state, setstate] = useState({ language: storeState.language, languageList: storeState.languageList });
  const { t } = useTranslation();

  const toggleLanguge = () => {
    const language = storeState.language === 'zh' ? 'en' : 'zh';
    const action = { type: 'change_language', payload: language };
    setstate({
      ...state,
      language,
    });
    store.dispatch(action);
  };

  return (
    <div>
      <button onClick={toggleLanguge}>切换语言</button>
      当前语言： {state.language}
      <div>{t('header.title')}</div>
    </div>
  );
};
