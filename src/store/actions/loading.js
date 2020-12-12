import * as types from '../action-types/action-types';

// eslint-disable-next-line import/prefer-default-export
export function setLoading(payload) {
  return { type: types.SET_LOADING, payload };
}
