import {
  CREATE_ACCOMMODATION_FAILURE,
  CREATE_ACCOMMODATION_REQUEST,
  CREATE_ACCOMMODATION_SUCCESS,
  DELETE_ACCOMMODATION_FAILURE,
  DELETE_ACCOMMODATION_START,
  DELETE_ACCOMMODATION_SUCCESS,
  EDIT_ACCOMMODATION_FAILURE,
  EDIT_ACCOMMODATION_START,
  EDIT_ACCOMMODATION_SUCCESS,
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_START,
  FETCH_LOCATIONS_SUCCESS,
} from '../action-types/accommodations';

// create an accommodation action creator
export const createAccommodationRequest = () => {
  return {
    type: CREATE_ACCOMMODATION_REQUEST,
  };
};

export const createAccommodationSuccess = (data) => {
  return {
    type: CREATE_ACCOMMODATION_SUCCESS,
    message: data,
  };
};

export const createAccommodationFailure = (error) => {
  return {
    type: CREATE_ACCOMMODATION_FAILURE,
    error,
  };
};

// delete an accommodation action creator
export const deleteAccommodationRequest = () => {
  return {
    type: DELETE_ACCOMMODATION_START,
  };
};

export const deleteAccommodationSuccess = (message) => {
  return {
    type: DELETE_ACCOMMODATION_SUCCESS,
    message,
  };
};

export const deleteAccommodationFailure = (error) => {
  return {
    type: DELETE_ACCOMMODATION_FAILURE,
    error,
  };
};

// Update an accommodation action creator
export const editAccommodationRequest = () => {
  return {
    type: EDIT_ACCOMMODATION_START,
  };
};

export const editAccommodationSuccess = (message) => {
  return {
    type: EDIT_ACCOMMODATION_SUCCESS,
    message,
  };
};

export const editAccommodationFailure = (error) => {
  return {
    type: EDIT_ACCOMMODATION_FAILURE,
    error,
  };
};

// Retrieve location

export const fetchLocationStart = () => {
  return {
    type: FETCH_LOCATIONS_START,
  };
};
export const fetchLocationSuccess = (locations) => {
  return {
    type: FETCH_LOCATIONS_SUCCESS,
    locations,
  };
};

export const fetchLocationFailure = (error) => {
  return {
    type: FETCH_LOCATIONS_FAILURE,
    error,
  };
};
