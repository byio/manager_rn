import { EMAIL_CHANGED } from './types';

// emailChanged action creator
export const emailChanged = (text) => {
  // return an action
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
