/*
 * @Author: kingford
 * @Date: 2021-04-03 11:08:15
 * @LastEditTime: 2021-04-12 19:11:23
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { loadServer, DevTools } from 'jira-dev-tool';
// import { AppProviders } from 'context';
import './i18n/config';

// loadServer(() =>
//   ReactDOM.render(
//     <React.StrictMode>
//       <AppProviders>
//         <DevTools />
//         <App />
//       </AppProviders>
//     </React.StrictMode>,
//     document.getElementById('root')
//   )
// );
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
