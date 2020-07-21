import { SET_LOADING, LOG } from './types';

// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = res.json();

//     dispatch({
//       type: LOG.GET,
//       payload: data,
//     });
//   };
// };

/**
 * Get logs from server.
 */
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: LOG.GET,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOG.ERROR,
      payload: err.response.data,
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
