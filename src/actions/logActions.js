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

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: LOG.UPDATE,
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
 * Search logs
 */
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    dispatch({ type: LOG.SEARCH, payload: data });
  } catch (err) {
    dispatch({ type: LOG.ERROR, payload: err.response.data });
  }
};

/**
 * Clear selected log.
 */
export const clearCurrent = () => {
  return {
    type: LOG.CLEAR_CURRENT,
  };
};

/**
 * Set current log.
 */
export const setCurrent = (log) => {
  return {
    type: LOG.SET_CURRENT,
    payload: log,
  };
};

/**
 * Set loading to true.
 */
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
