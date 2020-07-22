import { SET_LOADING, TECH } from '../actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TECH.ADD:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case TECH.DELETE:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        loading: false,
      };
    case TECH.GET:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case TECH.ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
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
