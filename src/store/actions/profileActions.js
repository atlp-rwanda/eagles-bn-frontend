export const UPDATE_PROFILE_IMAGE_SUCCESS = 'UPDATE_PROFILE_IMAGE_SUCCESS';
export const UPDATE_PROFILE_PENDING = 'UPDATE_PROFILE_PENDING';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR';
export const FETCH_PROFILE_PENDING = 'FETCH_PROFILE_PENDING';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR';

export function fetchProfilePending() {
  return {
    type: FETCH_PROFILE_PENDING,
  };
}

export function fetchProfileSuccess(payload) {
  return {
    type: FETCH_PROFILE_SUCCESS,
    payload,
  };
}

export function fetchProfileError(error) {
  return {
    type: FETCH_PROFILE_ERROR,
    error,
  };
}

export function updateProfilePending() {
  return {
    type: UPDATE_PROFILE_PENDING,
  };
}

export function updateProfileImageSuccess(payload) {
  return {
    type: UPDATE_PROFILE_IMAGE_SUCCESS,
    payload,
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: profile,
  };
}

export function updateProfileError(error) {
  return {
    type: UPDATE_PROFILE_ERROR,
    error,
  };
}
