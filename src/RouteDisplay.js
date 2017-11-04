import React from 'react';

const routeContainer = {
  backgroundColor: '#ffffff',
  padding: '8px 8px',
};

export default (props) => {
  return (
    <div
      style={{
        ...routeContainer,
        borderBottom: `8px solid ${props.route.routeColor}`,
      }}>
      {props.route.name}
    </div>
  );
};
