import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection } from './common';

class EmployeeListItem extends Component {

  // helper methods
  onRowPress () {
    Actions.employeeEdit({
      employee: this.props.employeeProp.item
    });
  }

  // render method
  render () {
    const { item } = this.props.employeeProp;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {item.name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }

}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default EmployeeListItem;
