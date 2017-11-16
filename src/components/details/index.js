import React from 'react';
import { connect } from 'react-redux';
import LoadingIndicator from 'react-loading-indicator';

import { fetchSchedules, switchDestination } from '../../actions';
import {
  getScheduleDestination,
  getSchedulesForDestination,
  getSchedulesFetchingStatus
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
  }

  handleDirectionChange = (direction) => {
    this.props.dispatch(switchDestination(direction));
  }

  render() {
    const { match } = this.props;
    const route = decodeURIComponent(match.params.route);
    
    if (this.props.schedules === undefined || this.props.schedules === null)
      return null;

    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <div>
        <div style={styles.menuContainer}>
          <RouteMenu
            route={route}
            selectedDirection={this.props.destination}
            directions={this.props.schedules.destinations}
            onDirectionChange={(direction) => this.handleDirectionChange(direction)}
          />
        </div>
        <div style={styles.scheduleContainer}>
          <ScheduleList schedules={this.props.schedules.schedules} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    destination: getScheduleDestination(state),
    isFetching: getSchedulesFetchingStatus(state),
    schedules: getSchedulesForDestination(state),
  }),
)(RouteDetails);
