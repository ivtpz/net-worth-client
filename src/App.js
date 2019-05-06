import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Currencies from './components/Currencies';
import NetWorth from './components/NetWorth';
import * as NetWorthActionCreators from './actions/netWorthActions';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.calculate();
  }
  

  render() {
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
}

const mapDispatchToProps = dispatch => bindActionCreators(NetWorthActionCreators, dispatch)

export default connect(() => ({}), mapDispatchToProps)(App);
