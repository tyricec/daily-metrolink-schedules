import React from 'react';

const headerStyle = {
  backgroundColor: 'rgb(4,93,106)',
  boxShadow: '0 0 4px',
  padding: '16px 8px',
};

const title = {
  color: 'rgb(255,255,255)',
  fontSize: '1.4em',
}

export default () => (
  <header style={headerStyle}>
    <h1 style={title}>Metrolink Schedules</h1>
  </header>
);
