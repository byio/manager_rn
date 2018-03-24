import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';

import { employeeUpdate, employeeChangeDetails, employeeFormReset } from '../actions';
import { Card, CardSection, Button, ConfirmModal } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

  // component level state
  state = {
    showModal: false
  };

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

  componentWillUnmount () {
    this.props.employeeFormReset();
  }

  // helper methods
  onButtonPress () {
    const { name, phone, shift } = this.props;
    // console.log(`logging new data in redux store (not firebase): ${name} ${phone} ${shift}`);
    // console.log(this.props.employee.uid);
    // invoke action creator to save changes made onto firebase db
    this.props.employeeChangeDetails({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress () {
    // extract values from props
    const { name, phone, shift } = this.props;
    // invoke texting function
    Communications.text(phone, `Hi ${name}, your upcoming shift is on ${shift}.`);
  }

  onFirePress () {
    this.setState({ showModal: !this.state.showModal });
  }

  onDecline () {
    this.setState({ showModal: false });
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

        <CardSection>
          <Button onPressProp={this.onTextPress.bind(this)}>
            Text Shift
          </Button>
        </CardSection>

        <CardSection>
          <Button onPressProp={this.onFirePress.bind(this)}>
            Fire Employee
          </Button>
        </CardSection>

        <ConfirmModal
          visible={this.state.showModal}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire this employee?
        </ConfirmModal>

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
  { employeeUpdate, employeeChangeDetails, employeeFormReset }
)(EmployeeEdit);
