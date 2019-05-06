import React from 'react';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import TableLine from './TableLine';

const getCells = (resource, type) => [ 
  { value: resource.name }, 
  (type === 'assets' ? {} : { value: resource.monthlyPayment, isCurrency: true }), 
  { value: resource.interestRate, isRate: true }, 
  { ...resource, propertyName: type, isCurrency: true, isEditable: true } 
];

const ThickDivider = withStyles({
  root: {
    height: '2px'
  }
})(Divider)

const NetWorth = (props) => (
  <div>
    <TableLine cells={[ { value: 'Net Worth' }, {}, {}, { value: props.netWorthTotal, isCurrency: true } ]} title />
    <ThickDivider />
    <TableLine cells={[ { value: 'Assets' }, {}, {}, {} ]} title />
    <Divider />
    <TableLine cells={[ { value: 'Cash and Investments' }, {}, { value: 'Interest Rate' }, {} ]} />
    <Divider />
    {props.loaded ? props.assets.filter(({ type }) => type === 0).map(asset => (
      <TableLine 
        key={asset.name} 
        cells={getCells(asset, 'assets')}
      />
    )) : <></>}
    <Divider />
    <TableLine cells={[ { value: 'Long Term Assets' }, {}, { }, {} ]} />
    <Divider />
    {props.loaded ? props.assets.filter(({ type }) => type === 1).map(asset => (
      <TableLine 
        key={asset.name} 
        cells={getCells(asset, 'assets')}
      />
    )) : <></>}
    <Divider />
    <TableLine cells={[ { value: 'Total Assets' }, {}, {}, { value: props.assetsTotal, isCurrency: true } ]} title />
    <ThickDivider />
    <br />
    <br />
    <TableLine cells={[ { value: 'Liabilities' }, {}, {}, {  } ]} title />
    <Divider />
    <TableLine cells={[ { value: 'Short Term Liabilities' }, { value: 'Monthly Payment' }, { value: 'Interest Rate' }, {} ]} />
    <Divider />
    {props.loaded ? props.liabilities.filter(({ type }) => type === 0).map(liability => (
      <TableLine 
        key={liability.name} 
        cells={getCells(liability, 'liabilities')}
      />
    )) : <></>}
    <Divider />
    <TableLine cells={[ { value: 'Long Term Debt' }, {}, {}, {} ]} />
    <Divider />
    {props.loaded ? props.liabilities.filter(({ type }) => type === 1).map(liability => (
      <TableLine 
        key={liability.name} 
        cells={getCells(liability, 'liabilities')}
      />
    )) : <></>}
    <Divider />
    <TableLine cells={[ { value: 'Total Liabilities' }, {}, {}, { value: props.liabilitiesTotal, isCurrency: true } ]} title />
    <ThickDivider />
  </div>
);


const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.netWorth
})

export default connect(mapStateToProps)(NetWorth);
