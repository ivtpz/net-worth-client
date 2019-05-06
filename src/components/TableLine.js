import React from 'react';
import TableCell from './TableCell';

const TableLine = props => (
  <div style={styles.container}>
    {props.cells.map((cell, i) => (
      // Cells will not rearrange, so we can use index as key here
      <TableCell key={i} { ...cell } />
    ))}
  </div>
);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}

export default TableLine;