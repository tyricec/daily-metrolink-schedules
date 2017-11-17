import React from 'react';

const styles = {
  container: {
    backgroundColor: 'rgb(66,134,247)',
    color: 'rgb(255,255,255)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export default props => (
  <div style={{
    ...styles.container,
    ...props.containerStyle,
  }}>
    <div>{props.route}</div>
    <div>{props.duration}</div>
    <div>{props.daysOfWeek}</div>
  </div>
);
