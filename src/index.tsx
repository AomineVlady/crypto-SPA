import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/normalize.css';
import './styles/typography.css';
import GlobalStyle from './styles/global';
import App from './components/App';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import { BrowserRouter } from 'react-router-dom';
const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
