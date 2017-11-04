import React from 'react';

const headerStyle = {
  backgroundColor: '#045D6A',
  boxShadow: '0 0 2px',
  padding: '16px 8px',
};

const title = {
  color: '#ffffff',
  fontSize: '1.4em',
}

export default () => (
  <header style={headerStyle}>
    <h1 style={title}>Metrolink Schedules</h1>
  </header>
);
