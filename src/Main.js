import React from 'react';
import RouteDisplay from './RouteDisplay';

export default () => {
  const routes = [{
    name: '91/Perris Valley',
  }, {
    name: 'Antelope Valley',
  }, {
    name: 'Riverside',
  }, {
    name: 'San Bernardino',
  }];

  const routeDisplays = routes.map(route => (
    <RouteDisplay key={route.name} route={route} />
  ));

  return (
    <div id="main" className="container">
      {routeDisplays}
    </div>
  )
};
