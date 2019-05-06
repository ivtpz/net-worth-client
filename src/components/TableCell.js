import React from 'react';
import CurrencyCell from './CurrencyCell';

const TableCell = props => {
  if (props.isCurrency) {
    return (
      <CurrencyCell { ...props }/>
    );
  }
  if (props.isRate) {
    return (
      <div style={{ ...styles.container, ...styles.flexItem }}>
        <div>{typeof props.value === 'number' ? (props.value * 100).toFixed(2) + ' %' : ''}</div>
      </div>
    )
  }
  return (<div style={styles.flexItem}>{props.value}</div>)
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  flexItem: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '150px'
  }
}

export default TableCell;