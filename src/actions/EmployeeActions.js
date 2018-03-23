import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_CHANGE_DETAILS_SUCCESS } from './types';

/*
  this employeeUpdate action creator handles ANY update to
  ANY of the fields in the form. it takes in a prop that
  changes dynamically, and a value that's in the respective
  field.
*/
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  // extract current user from firebase auth
  const { currentUser } = firebase.auth();
  // use return here as a workaround to an error for not using redux-thunk properly
  return (dispatch) => {
    firebase.database()
            .ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
              dispatch({ type: EMPLOYEE_CREATE });
              Actions.pop();
            });
  };
};

export const employeesFetch = () => {
  // extract current user from firebase auth
  const { currentUser } = firebase.auth();
  // use redux-thunk while fetching data from firebase (async function)
  return (dispatch) => {
    firebase.database()
            .ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
              dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
  };
};

export const employeeChangeDetails = ({ name, phone, shift, uid }) => {
  // extract current user from firebase auth
  const { currentUser } = firebase.auth();
  // use redux-thunk while fetching data from firebase (async function)
  return (dispatch) => {
    firebase.database()
            .ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
              dispatch({ type: EMPLOYEE_CHANGE_DETAILS_SUCCESS });
              Actions.pop();
            });
  };
};
