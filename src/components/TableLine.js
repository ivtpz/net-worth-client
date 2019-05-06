import React from 'react';
import TableCell from './TableCell';

const TableLine = props => (
  <div style={getStyles(props.title)}>
    {props.cells.map((cell, i) => (
      // Cells will not rearrange, so we can use index as key here
      <TableCell key={i} { ...cell } index={i} />
    ))}
  </div>
);

const getStyles = isTitle => ({
  display: 'flex',
  justifyContent: 'space-around',
  minHeight: '30px',
  alignItems: 'center',
  fontWeight: isTitle ? 600 : 'auto',
  textAlign: 'left'
})

export default TableLine;