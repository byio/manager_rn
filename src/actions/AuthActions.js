import firebase from 'firebase';

import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGOUT_USER
} from './types';

// emailChanged action creator
export const emailChanged = (text) => {
  // return an action
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

// passwordChanged action creator
export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

// loginUser action creator
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_START });
    firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
              firebase.auth()
                      .createUserWithEmailAndPassword(email, password)
                      .then(user => loginUserSuccess(dispatch, user))
                      .catch(() => loginUserFail(dispatch));
            });
  };
};

// logoutUser action creator
export const logoutUser = () => {
  return (dispatch) => {
    firebase.auth()
            .signOut()
            .then(() => {
              dispatch({ type: LOGOUT_USER });
            });
  };
};

// helper functions (do not export)
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
};
