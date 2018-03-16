import { EMPLOYEE_UPDATE } from './types';

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
