import React, { Component } from 'react';

import { Card, CardSection, TextField, Button } from './common';

class LoginForm extends Component {
  render () {
    return (
      <Card>

        <CardSection>
          <TextField
            label="Email"
            placeholderText="username@email.com"
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
