import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeUpdate } from '../actions';
import { Card, CardSection, TextField, Button } from './common';

class EmployeeCreate extends Component {
  // render method
  render () {
    return (
      <Card>
        {/* Employee's Name */}
        <CardSection>
          <TextField
            label="Name"
            placeholderText="eg. Jane Doe"
            value={this.props.name}
            onChangeText={
              value => this.props.employeeUpdate({
                prop: 'name',
                value
              })}
          />
        </CardSection>
        {/* Employee's Contact Number */}
        <CardSection>
          <TextField
            label="Phone"
            placeholderText="555-555-5555"
            value={this.props.phone}
            onChangeText={
              value => this.props.employeeUpdate({
                prop: 'phone',
                value
              })}
          />
        </CardSection>
        <CardSection>

        </CardSection>
        {/* Create Button */}
        <CardSection>
          <Button>
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
  { employeeUpdate }
)(EmployeeCreate);
