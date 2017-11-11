import React from 'react';
import { Redirect } from 'react-router-dom';
import RouteDisplay from './RouteDisplay';

const container = {
  padding: '16px 8px',
};

const row = {
  boxShadow: '0px 0px 2px rgb(0,0,0)',
  marginBottom: '16px',
};

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  onRouteClick = (route) => {
    this.setState({ route, redirect: true });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={`/details/${encodeURIComponent(this.state.route)}`} />;
    }
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
        <RouteDisplay onPress={() => this.onRouteClick(route.name)} route={route} />
      </div>
    ));

    return (
      <div id="main" style={container}>
        {routeDisplays}
      </div>
    );
  }
}

