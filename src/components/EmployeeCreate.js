import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker } from 'react-native';

import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, TextField, Button } from './common';

class EmployeeCreate extends Component {
  // helper methods
  renderPickerItems () {
    const shifts = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return shifts.map(shift => {
      return <Picker.Item key={shift} label={shift} value={shift}/>
    });
  }

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
        {/* Shift RN Picker */}
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabelStyles}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={
              value => this.props.employeeUpdate({
                prop:'shift',
                value
              })}
          >
            {this.renderPickerItems()}
          </Picker>
        </CardSection>
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

const styles = {
  pickerLabelStyles: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 10
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  // return as props
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);
