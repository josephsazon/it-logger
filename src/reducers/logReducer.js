import { SET_LOADING, LOG } from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG.GET:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case LOG.ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};