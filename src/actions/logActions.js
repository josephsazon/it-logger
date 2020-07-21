import { SET_LOADING, LOG } from './types';

/**
 * Add new log.
 * @param {Object} log - Log to be added.
 */
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({ type: LOG.ADD, payload: data });
  } catch (err) {
    dispatch({
      type: LOG.ERROR,
      payload: err.response.data,
    });
  }
};

/**
 * Delete log.
 */
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });

    dispatch({ type: LOG.DELETE, payload: id });
  } catch (err) {
    dispatch({
      type: LOG.ERROR,
      payload: err.response.data,
    });
  }
};

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
