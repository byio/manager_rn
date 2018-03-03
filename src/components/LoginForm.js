import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';

import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, TextField, Button } from './common';

class LoginForm extends Component {
  // helper methods
  onEmailChange (text) {
    this.props.emailChanged(text); // invoke emailChanged action creator
  }

  onPasswordChange (text) {
    this.props.passwordChanged(text); // invoke passwordChanged action creator
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
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <TextField
            secureTextEntryProp
            label="Password"
            placeholderText="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
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

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
