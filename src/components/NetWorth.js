import React from 'react';
import { connect } from 'react-redux';
import TableLine from './TableLine';

const getCells = (resource, type) => [ 
  { value: resource.name }, 
  (type === 'assets' ? {} : { value: resource.monthlyPayment, isCurrency: true }), 
  { value: resource.interestRate, isRate: true }, 
  { ...resource, propertyName: type, isCurrency: true, isEditable: true } 
];

const NetWorth = (props) => (
  <div>
    <TableLine cells={[ { value: 'Net Worth' }, {}, {}, { value: props.netWorthTotal, isCurrency: true } ]} />
    <TableLine cells={[ { value: 'Assets' }, {}, {}, {} ]} />
    <TableLine cells={[ { value: 'Cash and Investments' }, {}, { value: 'Interest Rate' }, {} ]} />
    {props.loaded ? props.assets.filter(({ type }) => type === 0).map(asset => (
      <TableLine 
        key={asset.name} 
        cells={getCells(asset, 'assets')}
      />
    )) : <></>}
    <TableLine cells={[ { value: 'Cash and Investments' }, {}, { }, {} ]} />
    {props.loaded ? props.assets.filter(({ type }) => type === 1).map(asset => (
      <TableLine 
        key={asset.name} 
        cells={getCells(asset, 'assets')}
      />
    )) : <></>}
    <TableLine cells={[ { value: 'Total Assets' }, {}, {}, { value: props.assetsTotal, isCurrency: true } ]}/>
    <TableLine cells={[ { value: 'Liabilities' }, {}, {}, {  } ]}/>
    <TableLine cells={[ { value: 'Short Term Liabilities' }, { value: 'Monthly Payment' }, { value: 'Interest Rate' }, {} ]} />
    {props.loaded ? props.liabilities.filter(({ type }) => type === 0).map(liability => (
      <TableLine 
        key={liability.name} 
        cells={getCells(liability, 'liabilities')}
      />
    )) : <></>}
    <TableLine cells={[ { value: 'Long Term Debt' }, {}, {}, {} ]} />
    {props.loaded ? props.liabilities.filter(({ type }) => type === 1).map(liability => (
      <TableLine 
        key={liability.name} 
        cells={getCells(liability, 'liabilities')}
      />
    )) : <></>}
    <TableLine cells={[ { value: 'Total Liabilities' }, {}, {}, { value: props.liabilitiesTotal, isCurrency: true } ]}/>
  </div>
);


const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.netWorth
})

export default connect(mapStateToProps)(NetWorth);
