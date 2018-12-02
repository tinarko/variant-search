import React from 'react';
import COLORS from '../../../constants/colors';

import './index.css';

function Table({ columnHeaders = [], data = [], rowComponent = () => {} }) {
  return (
    <table style={styles.wrapper} className="Table__component">
      <thead>
        <tr style={styles.headers}>
          {columnHeaders.map(header => (
            <th key={header} style={styles.header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map(rowData =>
          React.Children.map(rowComponent(rowData), (row, index) => (
            <tr key={index} style={styles.row}>
              {row.props.children}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

const styles = {
  wrapper: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  headers: {
    background: COLORS.NAVY,
    color: COLORS.GREY_LIGHTEST
  },
  header: {
    fontWeight: 400,
    transition: 'all 0.2s ease-out',
    textAlign: 'left'
  }
};

export default Table;
