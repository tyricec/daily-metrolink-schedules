import React from 'react';

const footer = {
  backgroundColor: 'rgb(82,82,82)',
  boxShadow: '0 0 4px',
  color: 'rgb(255,255,255)',
  padding: '1rem 0',
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
    <span style={signature}>App created by: Tyrice Clark</span>
  </footer>
);
