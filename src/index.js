import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import netWorth from './data.json';

ReactDOM.render(
  <Provider store={configureStore({ netWorth })}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
