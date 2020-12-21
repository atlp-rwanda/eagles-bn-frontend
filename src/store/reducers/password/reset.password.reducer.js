import { RESET_PASSWORD } from '../../action-types/action-types';
import { fulfilled, rejected } from '../../../utils/action.utils';

const initialState = {
  isLoading: false,
  password: '',
  confirmPassword: '',
  error: null,
};

const resetPassword = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(RESET_PASSWORD):
      return {
        ...state,
        message: action.payload ,
        isLoading: false,
      };
    case rejected(RESET_PASSWORD):
      return {
        ...state,
        error: action.error ,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default resetPassword;
