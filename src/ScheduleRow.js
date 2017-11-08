import React from 'react';

const styles = {
  row: {
    display: 'flex',
    borderBottom: '1px solid rgb(0,0,0)',
    borderRight: '1px solid rgb(0,0,0)',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderLeft: '1px solid rgb(0,0,0)',
    borderTop: '1px solid rgb(0,0,0)',
    padding: 8,
    textAlign: 'center',
  },
};

export default props => (
  <div style={styles.row}>
    <div style={styles.column}>
      <div>{props.name}</div>
    </div>
    <div style={styles.column}>
      <div>{props.time}</div>
    </div>
  </div>
);
