import React from 'react';
import CurrencyCell from './CurrencyCell';
import RateCell from './RateCell';

const TableCell = props => {
  if (props.isCurrency) {
    return (
      <CurrencyCell { ...props }/>
    );
  }
  if (props.isRate) {
    return (
      <RateCell {...props} />
    )
  }
  return (<div style={styles.flexItem}>{props.value}</div>)
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  flexItem: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '150px'
  }
}

export default TableCell;