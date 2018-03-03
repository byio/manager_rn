import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';

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
    firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
              dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: user
              });
            });
  };
};
