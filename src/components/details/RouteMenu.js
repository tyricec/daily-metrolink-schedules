import React from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';

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

export default (props) => {
  return (
    <div style={{
      ...styles.container,
      backgroundColor: `#${props.route.route_color}`,
    }}>
      <div style={styles.routeSelect}>
        <Link style={{ color: 'rgb(255,255,255)' }} to="/">{props.route.route_id}</Link>
      </div>
      <Dropdown
        onSelect={props.onDirectionChange}
        selected={props.selectedDirection}
        items={props.directions}
      />
    </div>
  );
}
