import axios from 'axios';
import { toast } from 'react-toastify';
import {
  fetchProfilePending,
  fetchProfileSuccess,
  fetchProfileError,
} from '../actions/profileActions';

export const axiosObj = {
  method: 'get',
  url: '/user/profile',
};

export const handleCatch = (dispatch, dispatched, { response, request, message }) => {
  if (response) {
    toast.error(response.data.error);
    return dispatch(dispatched(response.data.error));
  }
  if (request) {
    toast.error(request);
    return dispatch(dispatched(JSON.parse(error.request.response).error));
  }
  toast.error(message);
  return dispatch(dispatched(message));
};

function fetchProfile() {
  return (dispatch) => {
    dispatch(fetchProfilePending());
    return axios(axiosObj)
      .then((res) => {
        if (res.error) throw res.error;
        dispatch(
          fetchProfileSuccess({
            ...res.data.data,
            birth_date:
              res.data.data.birth_date
              && res.data.data.birth_date.split('T')[0],
          }),
        );
      })
      .catch((error) => handleCatch(dispatch, fetchProfileError, error));
  };
}

export default fetchProfile;
