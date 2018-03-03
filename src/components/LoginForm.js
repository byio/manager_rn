import React, { Component } from 'react';
import { connect } from 'react-redux';

import { emailChanged } from '../actions';
import { Card, CardSection, TextField, Button } from './common';

class LoginForm extends Component {
  // helper methods
  onEmailChange (text) {
    this.props.emailChanged(text);
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

export default connect(null, { emailChanged })(LoginForm);
