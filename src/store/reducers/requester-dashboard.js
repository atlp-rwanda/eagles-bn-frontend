import * as types from '../action-types/action-types';

const initialState = { data: {}, error: null, pending: false };
export const requesterDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUESTER_DASHBOARD_PENDING:
      return { ...state, pending: true };
    case types.FETCH_REQUESTER_DASHBOARD_SUCCESS:
      return { ...state, pending: false, data: action.data };
    case types.FETCH_REQUESTER_DASHBOARD_ERROR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};
export const getRequesterDashboard = (state) => state.requester_dashboard.data;
export const getRequesterDashboardPending = (state) => state.requester_dashboard.pending;
export const getRequesterDashboardError = (state) => state.requester_dashboard.error;
