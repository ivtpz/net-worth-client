import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

const netWorth = {
  assets: [
    {
      name: 'Chequing',
      interestRate: 0,
      value: 2000.00,
      type: 0,
    },
    {
      name: 'Savings for Taxes',
      interestRate: 0.05,
      value: 4000.00,
      type: 0,
    },
    {
      name: 'Rainy Day Fund',
      interestRate: 0,
      value: 506.00,
      type: 0,
    },
    {
      name: 'Savings for Fun',
      interestRate: 0,
      value: 5000.00,
      type: 0,
    },
    {
      name: 'Savings for Travel',
      interestRate: 0,
      value: 400.00,
      type: 0,
    },
    {
      name: 'Savings for Personal Development',
      interestRate: 0.015,
      value: 200.00,
      type: 0,
    },
    {
      name: 'Investment 1',
      interestRate: 0.230,
      value: 5000.00,
      type: 0,
    },
    {
      name: 'Investment 2',
      interestRate: 0.02,
      value: 60000.00,
      type: 0,
    },
    {
      name: 'Investment 3',
      interestRate: 0.05,
      value: 30000.00,
      type: 0,
    },
    {
      name: 'Investment 4',
      interestRate: 0.10,
      value: 50000.00,
      type: 0,
    },
    {
      name: 'Investment 5',
      interestRate: 0,
      value: 24000.00,
      type: 0,
    },
    {
      name: 'Primary Home',
      interestRate: 0.01,
      value: 455000.00,
      type: 1,
    },
    {
      name: 'Second Home',
      interestRate: 0.02,
      value: 1564321.00,
      type: 1,
    }
  ],
  liabilities: [
    { name: 'Credit Card 1', monthlyPayment: 200.00, interestRate: 0.5, value:  4342.00, type: 0 },
    { name: 'Credit Card 2', monthlyPayment: 150.00, interestRate: 0.2, value:  322.00, type: 0 },
    { name: 'Mortgage 1', monthlyPayment: 2000.00, interestRate: .0260, value: 250999.00, type: 1 },
    { name: 'Mortgage 2', monthlyPayment: 3500.00, interestRate: .0540, value: 632634.00, type: 1 },
    { name: 'Line of Credit', monthlyPayment: 500.00, interestRate: .05, value: 10000.00, type: 1 },
    { name: 'Investment Loan', monthlyPayment: 700.00, interestRate: .06, value: 10000.00, type: 1 },
    { name: 'Student Loan', type: 1 },
    { name: 'Car Loan', type: 1 }
  ],
  baseCurrencyId: 0,
  resultCurrencyId: 0
}



ReactDOM.render(
  <Provider store={configureStore({ netWorth })}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// TODO: change to register
serviceWorker.unregister();
