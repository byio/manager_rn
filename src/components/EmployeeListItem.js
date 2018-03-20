import React, { Component } from 'react';
import { Text } from 'react-native';

import { CardSection } from './common';

class EmployeeListItem extends Component {

  render () {
    const { item } = this.props.employeeProp;

    return (
      <CardSection>
        <Text style={styles.titleStyle}>
          {item.name}
        </Text>
      </CardSection>
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
