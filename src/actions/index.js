import fetch from 'isomorphic-fetch';
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

export default {
  sendRoutes,
  sendRoutesError,
  requestRoutes,
  fetchRoutes,
};
