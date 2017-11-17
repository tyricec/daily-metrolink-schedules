import React from 'react';
import { connect } from 'react-redux';
import LoadingIndicator from 'react-loading-indicator';

import { fetchSchedules, switchDestination, fetchRoutes, setRoute } from '../../actions';
import {
  getScheduleDestination,
  getSchedulesForDestination,
  getSchedulesFetchingStatus,
  getRouteById,
  getRouteFetchingStatus
} from '../../reducers';
import RouteMenu from './RouteMenu';
import ScheduleList from './ScheduleList';

const styles = {
  menuContainer: {
    boxShadow: '0 0 4px rgba(0,0,0,0.75)',
  },
  scheduleContainer: {
    padding: 8,
  },
};

class RouteDetails extends React.Component {
  constructor(props) {
    super(props);

    this.props.dispatch(fetchSchedules(props.match.params.route));
    this.props.dispatch(
      setRoute(decodeURIComponent(props.match.params.route)
    ));
    if (props.route === undefined)
      this.props.dispatch(fetchRoutes());
  }

  handleDirectionChange = (direction) => {
    this.props.dispatch(switchDestination(direction));
  }

  render() {
    if (
      this.props.isFetchingSchedules ||
      this.props.isFetchingRoutes ||
      this.props.route === undefined
    ) {
      return <LoadingIndicator />;
    }

    if (this.props.schedules === undefined)
      return null;

    return (
      <div>
        <div style={styles.menuContainer}>
          <RouteMenu
            route={this.props.route}
            selectedDirection={this.props.destination}
            directions={this.props.schedules.destinations}
            onDirectionChange={(direction) => this.handleDirectionChange(direction)}
          />
        </div>
        <div style={styles.scheduleContainer}>
          <ScheduleList
            route={this.props.route}
            schedules={this.props.schedules.schedules}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    route: getRouteById(
      state,
      decodeURIComponent(ownProps.match.params.route)
    ),
    destination: getScheduleDestination(state),
    isFetchingSchedules: getSchedulesFetchingStatus(state),
    isFetchingRoutes: getRouteFetchingStatus(state),
    schedules: getSchedulesForDestination(state),
  }),
)(RouteDetails);
