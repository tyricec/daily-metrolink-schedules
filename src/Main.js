import React from 'react';
import RouteDisplay from './RouteDisplay';

const container = {
  padding: '16px 8px',
};

const row = {
  boxShadow: '0px 0px 2px rgb(0,0,0)',
  marginBottom: '16px',
};

export default () => {
  const routes = [{
    name: '91/Perris Valley',
    routeColor: '#0071CE',
  }, {
    name: 'Antelope Valley',
    routeColor: '#00AF43',
  }, {
    name: 'Riverside',
    routeColor: '#682E86',
  }, {
    name: 'San Bernardino',
    routeColor: '#A32136',
  }];

  const routeDisplays = routes.map(route => (
    <div key={route.name} style={row}>
      <RouteDisplay route={route} />
    </div>
  ));

  return (
    <div id="main" style={container}>
        {routeDisplays}
    </div>
  )
};
