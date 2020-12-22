import axios from 'axios';
import { toast } from 'react-toastify';
import { axiosObj, handleCatch } from './fetchProfile';
import {
  updateProfilePending,
  updateProfileImageSuccess,
  updateProfileSuccess,
  updateProfileError,
} from '../actions/profileActions';

function updateProfileFinal(profile) {
  return async (dispatch) => {
    try {
      dispatch(updateProfilePending());
      const { error, data: { data } } = await axios({ ...axiosObj, method: 'patch', data: profile });
      if (error) throw error;
      dispatch(updateProfileSuccess({
        ...data,
        birth_date: data.birth_date && data.birth_date.split('T')[0],
      }));
      toast.success('Profile Updated!');
      return data;
    } catch (error) {
      return handleCatch(dispatch, updateProfileError, error);
    }
  };
}

export function updateProfileImage(image) {
  return (dispatch) => {
    dispatch(updateProfilePending());
    const body = new FormData();
    body.append('profile_image', image);
    axios({
      method: 'patch',
      url: '/user/profile/picture',
      data: body,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        if (res.error) throw res.error;
        dispatch(updateProfileImageSuccess(res.data.data));
      })
      .catch(({ response: { data }, request, message }) => {
        if (data) return dispatch(updateProfileError(data.error));
        if (request) return dispatch(updateProfileError(request));
        return dispatch(updateProfileError(message));
      });
  };
}

export function updateProfile(data) {
  return (dispatch) => {
    dispatch(updateProfileSuccess(data));
  };
}

export default updateProfileFinal;
