import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker } from 'react-native';

import { employeeUpdate } from '../actions';
import { CardSection, TextField } from './common';

class EmployeeForm extends Component {
  // helper methods
  renderPickerItems () {
    const shifts = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return shifts.map(shift => {
      return <Picker.Item key={shift} label={shift} value={shift}/>
    });
  }

  // render method
  render () {
    return (
      <View>
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
        {/* Employee Shift RN Picker */}
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
      </View>
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
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeForm);
