import React from 'react';

const headerStyle = {
  backgroundColor: '#045D6A',
  padding: '8px 0',
};

const title = {
  color: '#ffffff',
  fontSize: '1.4em',
  margin: '0 8px',
}

export default () => (
  <header style={headerStyle}>
    <h1 style={title}>Metrolink Schedules</h1>
  </header>
);
