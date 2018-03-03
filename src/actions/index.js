import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

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
  }
};
