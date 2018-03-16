// import action types
import { EMPLOYEE_UPDATE } from '../actions/types';

// define initial state
const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

// export, by default, a function
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
