/*
 * @Author: kingford
 * @Date: 2021-04-07 21:15:54
 * @LastEditTime: 2021-04-07 21:23:41
 */
import { createStore } from 'redux';
import languageReducer from './languageReducer';

const store = createStore(languageReducer);

export default store;
