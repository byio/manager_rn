import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';

import EmployeeListItem from './EmployeeListItem';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  // lifecycle methods
  componentWillMount () {
    this.props.employeesFetch();
  }

  // renderItem method for FlatList
  renderItem (employee) {
    // console.log('employee: ', employee);
    return <EmployeeListItem employeeProp={employee} />
  }

  // render method
  render () {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={(employee, index) => 
          employee.uid.toString()
        }
      />
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
