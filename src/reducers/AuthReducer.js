import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_START, LOGOUT_USER } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  notification: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload, notification: 'You are now logged in.' };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Invalid credentials.', password: '', loading: false };
    case LOGIN_USER_START:
      return { ...state, loading: true, error: '' }
    case LOGOUT_USER:
      return { ...state, user: null, notification: 'You are now logged out.' }
    default:
      return state;
  };
};
