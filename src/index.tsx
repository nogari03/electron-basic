import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configureStore from './configureStore';
import reportWebVitals from './reportWebVitals';
import { initialState } from './store/layout';

import 'typeface-ibm-plex-sans';

const history = createBrowserHistory();
const store = configureStore(history, initialState);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App store={store} history={history} />
  </React.StrictMode>
);

reportWebVitals();
