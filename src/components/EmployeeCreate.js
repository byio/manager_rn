import React, { Component } from 'react';
import { Card, CardSection, TextField, Button } from './common';

class EmployeeCreate extends Component {
  render () {
    return (
      <Card>
        {/* Employee's Name */}
        <CardSection>
          <TextField
            label="Name"
            placeholderText="eg. Jane Doe"
          />
        </CardSection>
        {/* Employee's Contact Number */}
        <CardSection>
          <TextField
            label="Phone"
            placeholderText="555-555-5555"
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

export default EmployeeCreate;
