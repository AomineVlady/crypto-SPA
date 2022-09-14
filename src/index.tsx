import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/normalize.css';
import './styles/typography.css';
import GlobalStyle from './styles/global';
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <App />
    </>
  </React.StrictMode>
);
