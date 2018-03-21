import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeUpdate, employeeChangeDetails } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  // lifecycle methods
  /*
    when this component is about to be mounted, take the
    props (this.props.employee) passed from EmployeeListItem
    component via RNRF's Actions, and pass them to the
    employeeUpdate reducer with the help of lodash.
  */
  componentWillMount () {
    /*
      iterate over every property (key) in employee object,
      and invoke the employeeUpdate function with these
      key value pairs.
    */
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  // helper methods
  onButtonPress () {
    const { name, phone, shift } = this.props;
    // console.log(`logging new data in redux store (not firebase): ${name} ${phone} ${shift}`);
    // console.log(this.props.employee.uid);
    // invoke action creator to save changes made onto firebase db
    this.props.employeeChangeDetails({ name, phone, shift, uid: this.props.employee.uid });
  }

  // render method
  render () {
    // console.log(this.props.employee);
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPressProp={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
}

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeChangeDetails }
)(EmployeeEdit);
