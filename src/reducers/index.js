import actionTypes from '../actions/actionTypes';

const routes = (state = { isFetching: false, items: [] }, action) => {
  switch (action.type) {
    case (actionTypes.REQUEST_ROUTES):
      return {
        ...state,
        isFetching: true,
      };
    case (actionTypes.RECEIVE_ROUTES):
      return {
        ...state,
        isFetching: false,
        items: action.payload.routes,
      };
    case (actionTypes.RECEIVE_ROUTES_ERROR):
      return {
        ...state,
        errorMessage: action.payload.error,
      };
    default:
      return state;
  }
};

const app = (state = {}, action) => {
  return {
    routes: routes(state.routes, action),
    schedules: state.schedules,
  };
}

export default app;
