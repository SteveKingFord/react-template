/*
 * @Author: kingford
 * @Date: 2021-04-08 11:28:30
 * @LastEditTime: 2021-04-08 17:19:00
 */
import React, { useState } from 'react';
import store from '../../redux/store';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const storeState = store.getState();
  const [state, setstate] = useState({ language: storeState.language, languageList: storeState.languageList });
  const { t } = useTranslation();

  const toggleLanguge = () => {
    console.log(storeState);
    const action = { type: 'change_language', payload: storeState.language === 'zh' ? 'en' : 'zh' };
    console.log(action);
    store.dispatch(action);
  };

  return (
    <div>
      <button onClick={toggleLanguge}>切换语言</button>
      About=== {state.language}
      <div>{t('header.title')}</div>
    </div>
  );
};
