import React from 'react';

const footer = {
  backgroundColor: '#045D6A',
  boxShadow: '0 0 2px',
  color: 'rgb(255,255,255)',
  padding: '16px 0',
  width: '100%',
  position: 'absolute',
  bottom: 0,
};

const signature = {
  fontSize: '1.2em',
  margin: '0 8px',
  textDecoration: 'none',
};

export default () => (
  <footer style={footer}>
    <h1 style={signature}>App created by: Tyrice Clark</h1>
  </footer>
);
