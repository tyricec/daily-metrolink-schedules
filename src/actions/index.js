import fetch from 'isomorphic-fetch';
import moment from 'moment';

import actionTypes from './actionTypes';

export const sendRoutes = (routes) => {
  routes.sort((a, b) => {
    const aName = a.route_id.toUpperCase();
    const bName = b.route_id.toUpperCase();

    if (aName < bName)
      return -1;
    if (bName < aName)
      return 1;
    return 0;
  });

  return {
    payload: {
      routes,
    },
    type: actionTypes.RECEIVE_ROUTES,
  };
};

export const requestRoutes = () => ({
  type: actionTypes.REQUEST_ROUTES,
});

export const sendRoutesError = (error) => ({
  error,
  type: actionTypes.RECEIVE_ROUTES_ERROR,
});

export const fetchRoutes = () => {
  return (dispatch) => {
    dispatch(requestRoutes());
    return fetch('http://localhost:3000/api/v1/routes')
      .then(res => res.json())
      .then(res => dispatch(sendRoutes(res)));
  };
};

export const sendSchedules = (schedules) => {
  const formatArrivalTime = time => moment(time, 'HH:mm:ss').format('hh:mm a');
  const schedulesWithDurations = {
    ...schedules,
    schedules: schedules.schedules.map(schedule => ({
      ...schedule,
      duration: formatArrivalTime(schedule.table[0].arrival_time)
        .concat(' - ')
        .concat(formatArrivalTime(schedule.table[schedule.table.length - 1].arrival_time))
    })).sort((a, b) => {
      const aTime = moment(a.table[0].arrival_time, 'HH:mm:ss');
      const bTime = moment(b.table[0].arrival_time, 'HH:mm:ss');

      if (aTime.isAfter(bTime)) {
        return 1;
      }
      if (bTime.isAfter(aTime)) {
        return -1;
      }
      return 0;
    }),
  }
  return {
    payload: {
      schedules: schedulesWithDurations,
    },
    type: actionTypes.RECEIVE_SCHEDULES,
  };
};

export const requestSchedules = (routeId) => ({
  payload: {
    routeId,
  },
  type: actionTypes.REQUEST_SCHEDULES,
});

export const fetchSchedules = (routeId) => {
  const encodedRoute = encodeURIComponent(routeId);

  return (dispatch) => {
    dispatch(requestSchedules(routeId));
    return fetch(`http://localhost:3000/api/v1/schedules/${encodedRoute}`)
      .then(res => res.json())
      .then(res => dispatch(sendSchedules(res)));
  };
};

export const switchDestination = (destination) => ({
  payload: {
    destination,
  },
  type: actionTypes.SWITCH_DESTINATION,
})

export default {
  sendRoutes,
  sendRoutesError,
  requestRoutes,
  fetchRoutes,
  switchDestination,
};
