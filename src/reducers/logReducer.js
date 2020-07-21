import { SET_LOADING, LOG } from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG.ADD:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case LOG.DELETE:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };
    case LOG.UPDATE:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
        loading: false,
      };
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
    case LOG.SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case LOG.CLEAR_CURRENT:
      return {
        ...state,
        current: null,
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
