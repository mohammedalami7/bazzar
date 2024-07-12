/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import global_en from './translations/english/global_en.json';
import global_ar from './translations/arabic/global_ar.json';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)




