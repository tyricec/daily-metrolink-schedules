import actionTypes from '../actions/actionTypes';

const routes = (state = { isFetching: true, items: [] }, action) => {
  switch (action.type) {
    case (actionTypes.REQUEST_ROUTES): {
      return {
        ...state,
        isFetching: true,
      };
    }
    case (actionTypes.RECEIVE_ROUTES): {
      return {
        ...state,
        isFetching: false,
        items: action.payload.routes,
      };
    }
    case (actionTypes.RECEIVE_ROUTES_ERROR): {
      return {
        ...state,
        errorMessage: action.payload.error,
      };
    }
    default:
      return state;
  }
};

const schedules = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case (actionTypes.REQUEST_SCHEDULES): {
      return {
        ...state,
        isFetching: true,
      }
    }
    case (actionTypes.RECEIVE_SCHEDULES): {
      return {
        ...state,
        data: action.payload.schedules,
        destination: action.payload.schedules.destinations[0],
        isFetching: false,
      };
    }
    case (actionTypes.SWITCH_DESTINATION): {
      return {
        ...state,
        destination: action.payload.destination,
      }
    }
    default:
      return state;
  }
};

const app = (state = {}, action) => {
  switch (action.type) {
    case (actionTypes.SET_ROUTE): {
      return {
        ...state,
        routeId: action.payload.routeId,
      };
    }
    default:
      return state;
  }
};

const appReducer = (state = {}, action) => {
  return {
    app: app(state.app, action),
    routes: routes(state.routes, action),
    schedules: schedules(state.schedules, action),
  };
}

export const getApp = state => state.app;
export const getRoutes = state => state.routes.items;
export const getRouteFetchingStatus = state => getRoutes(state).isFetching;
export const getSchedules = state => state.schedules;
export const getCurrentRouteId = state => getApp(state).routeId;
export const getRouteById = (state, id) =>
  getRoutes(state).find(r => r.route_id === id);
export const getScheduleDestination = state =>
  getSchedules(state).destination;
export const getSchedulesFetchingStatus = state => state.schedules.isFetching;
export const getSchedulesForDestination = (state) => {
  const schedules = getSchedules(state);
  const destination = schedules.destination;

  if (schedules.data === undefined) {
    return;
  }
  return {
    ...schedules.data,
    schedules: schedules.data.schedules
      .filter(schedule => schedule.trip_headsign === destination),
  };
};

export default appReducer;
