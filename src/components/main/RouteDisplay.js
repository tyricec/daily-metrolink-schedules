import React from 'react';

const routeContainer = {
  backgroundColor: 'rgb(255,255,255)',
  padding: '8px 8px',
};

export default (props) => {
  return (
    <div
      onClick={props.onPress}
      style={{
        ...routeContainer,
        borderBottom: `8px solid #${props.route.route_color}`,
      }}>
      {props.route.route_id}
    </div>
  );
};
