import { TECH, SET_LOADING } from './types';

/**
 * Get technicians.
 */
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: TECH.GET,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECH.ERROR,
      payload: err.response.statusText,
    });
  }
};

/**
 * Set loading to true.
 */
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
