import { FIND_USER } from '../../action-types/action-types';
import { fulfilled, rejected } from '../../../utils/action.utils';

const initialState = {
  isLoading: false,
  message: '',
  error: null,
};

const forgotEmail = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case fulfilled(FIND_USER):
      return {
        ...state,
        isLoading,
        message: action.payload,
      };
    case rejected(FIND_USER):
      console.log(action.payload.error);
      return {
        ...state,
        isLoading: true,
        message: action.payload.error,
      };
    default:
      return state;
  }
};

export default forgotEmail;
