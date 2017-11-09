import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    backgroundColor: 'rgb(66,134,247)',
    color: 'rgb(255,255,255)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  routeSelect: {
    flex: 1,
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  directionSelect: {
    flex: 1,
    cursor: 'pointer',
    textAlign: 'right',
    textDecoration: 'underline',
  }
};

export default () => (
  <div style={styles.container}>
    <div style={styles.routeSelect}>
      <Link to="/">91/Perris Valley</Link>
    </div>
    <div style={styles.directionSelect}>Inbound</div>
  </div>
);
