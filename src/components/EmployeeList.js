import _ from 'lodash';
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
    console.log(this.props);
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

const mapStateToProps = state => {
  /*
    _.map creates key value pairs out of the firebase data
    object, and pushes them into an array defined as
    employees
  */
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  // return the employees array as a prop
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
