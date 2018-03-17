import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  // lifecycle methods
  componentWillMount () {
    this.props.employeesFetch();
  }

  // render method
  render () {
    return (
      <View>
        <Text>Employee 1</Text>
        <Text>Employee 2</Text>
        <Text>Employee 3</Text>
        <Text>Employee 4</Text>
        <Text>Employee 5</Text>
      </View>
    );
  }
}

export default connect(null, { employeesFetch })(EmployeeList);
