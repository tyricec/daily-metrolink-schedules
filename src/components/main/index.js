import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingIndicator from 'react-loading-indicator';

import { fetchRoutes, setRoute } from '../../actions';
import RouteDisplay from './RouteDisplay';
import {
  getRouteFetchingStatus,
  getRoutes,
  getRouteById,
  getCurrentRouteId,
} from '../../reducers/index';

const container = {
  padding: '16px 8px',
};

const row = {
  boxShadow: '0px 0px 2px rgb(0,0,0)',
  marginBottom: '16px',
};

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };

    this.props.dispatch(fetchRoutes());
  }

  onRouteClick = (route) => {
    this.props.dispatch(setRoute(route));
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect && this.props.routeId) {
      return <Redirect to={`/details/${encodeURIComponent(this.props.routeId)}`} />;
    }

    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }

    const routeDisplays = this.props.routes.map(route => (
      <div key={route.route_id} style={row}>
        <RouteDisplay onPress={() => this.onRouteClick(route.route_id)} route={route} />
      </div>
    ));

    return (
      <div id="main" style={container}>
        {routeDisplays}
      </div>
    );
  }
}

export default connect(
  state => ({
    isFetching: getRouteFetchingStatus(state),
    routeId: getCurrentRouteId(state),
    routes: getRoutes(state),
  }),
)(Main);
