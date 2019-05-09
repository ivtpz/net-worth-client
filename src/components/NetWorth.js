import React from 'react';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import TableLine from './TableLine';
import Projection from './Projection';

const getCells = (resource, type) => [ 
  { value: resource.name }, 
  (type === 'assets' ? 
    {} 
    : { 
      ...resource, 
      value: resource.monthlyPayment, 
      field: 'monthlyPayment',
      propertyName: type, 
      isCurrency: true, 
      isEditable: true 
    }), 
  { ...resource, propertyName: type, value: resource.interestRate, isRate: true }, 
  { ...resource, propertyName: type, isCurrency: true, isEditable: true } 
];

const ThickDivider = withStyles({
  root: {
    height: '2px'
  }
})(Divider)

const NetWorth = (props) => (
  <div>
    <TableLine 
      cells={[ { value: 'Net Worth' }, { value: props.netWorthTotal, isCurrency: true }, {}, {} ]} 
      title 
      color={'blue'} 
    />
    <ThickDivider />
    <div style={styles.container}>
      <div style={styles.item}>
        <TableLine 
          cells={[ { value: 'Assets' }, {}, {}, {} ]} 
          title 
          color={'#1c9ea0'} 
        />
        <Divider />
        <TableLine 
          cells={[ { value: 'Cash and Investments' }, {}, { value: 'Interest Rate' }, {} ]} 
          title 
        />
        <Divider />
        {props.loaded ? props.assets.filter(({ type }) => type === 0).map(asset => (
          <TableLine 
            key={asset.name} 
            cells={getCells(asset, 'assets')}
          />
        )) : <></>}
        <Divider />
        <TableLine 
          cells={[ { value: 'Long Term Assets' }, {}, { }, {} ]} 
          title 
        />
        <Divider />
        {props.loaded ? props.assets.filter(({ type }) => type === 1).map(asset => (
          <TableLine 
            key={asset.name} 
            cells={getCells(asset, 'assets')}
          />
        )) : <></>}
        <Divider />
        <TableLine 
          cells={[ { value: 'Total Assets' }, {}, {}, { value: props.assetsTotal, isCurrency: true } ]} 
          title 
          color={'#1c9ea0'} 
        />
        <ThickDivider />
      </div>
      <div style={styles.item}>
        <TableLine 
          cells={[ { value: 'Liabilities' }, {}, {}, {  } ]} 
          title 
          color={'#1c9ea0'} 
        />
        <Divider />
        <TableLine 
          cells={[ { value: 'Short Term Liabilities' }, { value: 'Monthly Payment' }, { value: 'Interest Rate' }, {} ]} 
          title 
        />
        <Divider />
        {props.loaded ? props.liabilities.filter(({ type }) => type === 0).map(liability => (
          <TableLine 
            key={liability.name} 
            cells={getCells(liability, 'liabilities')}
          />
        )) : <></>}
        <Divider />
        <TableLine 
          cells={[ { value: 'Long Term Debt' }, {}, {}, {} ]} 
          title 
        />
        <Divider />
        {props.loaded ? props.liabilities.filter(({ type }) => type === 1).map(liability => (
          <TableLine 
            key={liability.name} 
            cells={getCells(liability, 'liabilities')}
          />
        )) : <></>}
        <Divider />
        <TableLine 
          cells={[ { value: 'Total Liabilities' }, {}, {}, { value: props.liabilitiesTotal, isCurrency: true } ]} 
          title 
          color={'#1c9ea0'} 
        />
        <ThickDivider />
      </div>
    </div>
    <Projection />
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item: {
    flexBasis: 'auto',
    minWidth: '600px',
    flexGrow: 1,
    margin: '10px'
  }
}


const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.netWorth
})

export default connect(mapStateToProps)(NetWorth);
