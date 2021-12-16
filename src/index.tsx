import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@src/i18n/i18n';
import GlobalStyle from './GlobalStyle';
import Modal from 'react-modal';

Modal.setAppElement('#root');

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
