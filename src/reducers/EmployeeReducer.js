// import action types
import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';

// define initial state
const INITIAL_STATE = {};

// export, by default, a function
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      // console.log(action);
      return action.payload;
    default:
      return state;
  }
};
