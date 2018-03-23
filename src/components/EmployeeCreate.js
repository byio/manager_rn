import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  // helper methods
  onButtonPress () {
    // extract props from form
    const { name, phone, shift } = this.props;
    // call employeeCreate action creator
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  // render method
  render () {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        {/* Create Button */}
        <CardSection>
          <Button onPressProp={this.onButtonPress.bind(this)}>
            Create Employee
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  // return as props
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);
