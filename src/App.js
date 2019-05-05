import React from 'react';
import { Helmet } from 'react-helmet';
import Currencies from './components/Currencies';
import NetWorth from './components/NetWorth';
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      </Helmet>
      <div>Tracking your Networth</div>
      <Currencies></Currencies>
      <NetWorth></NetWorth>
    </div>
  );
}

export default App;
