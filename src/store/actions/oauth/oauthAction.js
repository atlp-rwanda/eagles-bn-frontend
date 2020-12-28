/* eslint-disable linebreak-style */
import oauth from './oauth';

const oauthSuccess = (payload) => (dispatch) => {
  const createdAction = oauth(payload);
  return dispatch(createdAction);
};

export default oauthSuccess;
