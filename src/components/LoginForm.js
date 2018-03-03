import React, { Component } from 'react';

import { Card, CardSection, TextField, Button } from './common';

class LoginForm extends Component {
  // helper methods
  onEmailChange (text) {

  }

  // render method
  render () {
    return (
      <Card>

        <CardSection>
          <TextField
            label="Email"
            placeholderText="username@email.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <TextField
            secureTextEntry
            label="Password"
            placeholderText="password"
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>

      </Card>
    );
  }
}

export default LoginForm;
