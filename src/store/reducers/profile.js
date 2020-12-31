import {
  FETCH_PROFILE_PENDING,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_ERROR,
  UPDATE_PROFILE_PENDING,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_IMAGE_SUCCESS,
} from '../actions/profileActions';

const initialProfile = {
  where_you_live: '',
  preferred_currency: '',
  preferred_language: '',
  phone_number: '',
  profile_image: '',
  father_name: '',
  mother_name: '',
  first_name: '',
  last_name: '',
  marital_status: '',
  nationality: '',
  birth_date: '',
  gender: '',
};

const initialState = {
  pending: false,
  profile: initialProfile,
  error: null,
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE_PENDING:
    case FETCH_PROFILE_PENDING:
      return { ...state, pending: true, error: null };
    case UPDATE_PROFILE_SUCCESS:
    case FETCH_PROFILE_SUCCESS:
      return { ...state, pending: false, profile: action.payload, error: null };
    case UPDATE_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        pending: false,
        profile: { ...state.profile, profile_image: action.payload },
      };
    case UPDATE_PROFILE_ERROR:
    case FETCH_PROFILE_ERROR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
}

export const getProfile = (state) => state.profile.profile;
export const getProfilePending = (state) => state.profile.pending;
export const getProfileError = (state) => state.profile.error;
